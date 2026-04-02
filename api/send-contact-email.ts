import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  runtime: 'edge',
};

interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
  language: string;
}

export default async function handler(req: Request) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau contact InnoAM</title>
          <style>
            body {
              font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #1e293b;
              background-color: #f8fafc;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #a855f7 0%, #22d3ee 100%);
              padding: 32px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            }
            .content {
              padding: 32px;
            }
            .badge {
              display: inline-block;
              background: #f0f9ff;
              color: #0369a1;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: 600;
              margin-bottom: 16px;
            }
            .info-table {
              width: 100%;
              border-collapse: collapse;
              margin: 24px 0;
            }
            .info-table tr {
              border-bottom: 1px solid #e2e8f0;
            }
            .info-table tr:last-child {
              border-bottom: none;
            }
            .info-table td {
              padding: 12px 0;
            }
            .info-table td:first-child {
              font-weight: 600;
              color: #64748b;
              width: 140px;
            }
            .info-table td:last-child {
              color: #1e293b;
            }
            .message-box {
              background: #f8fafc;
              border-left: 4px solid #a855f7;
              padding: 16px;
              border-radius: 8px;
              margin: 24px 0;
            }
            .message-box h3 {
              margin: 0 0 12px 0;
              color: #1e293b;
              font-size: 16px;
            }
            .message-box p {
              margin: 0;
              color: #475569;
              white-space: pre-wrap;
            }
            .footer {
              background: #f8fafc;
              padding: 24px 32px;
              text-align: center;
              color: #64748b;
              font-size: 14px;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #a855f7 0%, #22d3ee 100%);
              color: #ffffff;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              font-weight: 600;
              margin-top: 16px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nouveau projet InnoAM</h1>
            </div>
            
            <div class="content">
              <span class="badge">NOUVEAU CONTACT</span>
              
              <h2 style="margin: 0 0 8px 0; color: #1e293b;">Demande de ${formData.name}</h2>
              <p style="color: #64748b; margin: 0 0 24px 0;">
                Un nouveau client potentiel a soumis le formulaire de contact.
              </p>
              
              <table class="info-table">
                <tr>
                  <td>👤 Nom</td>
                  <td><strong>${formData.name}</strong></td>
                </tr>
                ${formData.company ? `
                <tr>
                  <td>🏢 Entreprise</td>
                  <td>${formData.company}</td>
                </tr>
                ` : ''}
                <tr>
                  <td>📧 Email</td>
                  <td><a href="mailto:${formData.email}" style="color: #a855f7; text-decoration: none;">${formData.email}</a></td>
                </tr>
                ${formData.phone ? `
                <tr>
                  <td>📱 Téléphone</td>
                  <td><a href="tel:${formData.phone}" style="color: #a855f7; text-decoration: none;">${formData.phone}</a></td>
                </tr>
                ` : ''}
                <tr>
                  <td>💼 Type de projet</td>
                  <td><strong>${formData.projectType}</strong></td>
                </tr>
                ${formData.budget ? `
                <tr>
                  <td>💰 Budget</td>
                  <td>${formData.budget}</td>
                </tr>
                ` : ''}
                <tr>
                  <td>🌐 Langue</td>
                  <td>${formData.language === 'fr' ? 'Français 🇫🇷' : 'English 🇬🇧'}</td>
                </tr>
              </table>
              
              <div class="message-box">
                <h3>💬 Message</h3>
                <p>${formData.message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${formData.email}" class="cta-button">
                  Répondre au client
                </a>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">
                <strong>InnoAM</strong> - Solutions digitales sur mesure<br>
                Tunis, Tunisie | <a href="https://innoamsoftware.tn" style="color: #a855f7; text-decoration: none;">innoamsoftware.tn</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'InnoAM <onboarding@resend.dev>',
      to: ['contactinnoam@gmail.com'],
      subject: `🚀 Nouveau projet InnoAM : ${formData.name}`,
      html: htmlContent,
      replyTo: formData.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: error }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, messageId: data?.id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
