# API Edge Functions - InnoAM

## Configuration des notifications email avec Resend

### 1. Créer un compte Resend

1. Va sur [Resend.com](https://resend.com)
2. Crée un compte gratuit
3. Vérifie ton email

### 2. Obtenir la clé API

1. Dans le dashboard Resend, va dans **API Keys**
2. Clique sur **Create API Key**
3. Donne-lui un nom (ex: "InnoAM Production")
4. Copie la clé API (elle commence par `re_`)

### 3. Configurer les variables d'environnement

#### En local (.env)

Ajoute la clé dans ton fichier `.env` :

```env
RESEND_API_KEY="re_your_actual_api_key_here"
```

#### Sur Vercel

1. Va dans ton projet Vercel
2. Settings > Environment Variables
3. Ajoute une nouvelle variable :
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_actual_api_key_here`
   - **Environments**: Production, Preview, Development
4. Clique sur **Save**

### 4. Installer les dépendances

```bash
npm install resend
```

### 5. Tester l'API en local

Pour tester l'Edge Function localement avec Vercel CLI :

```bash
# Installer Vercel CLI
npm install -g vercel

# Lancer le serveur de développement Vercel
vercel dev
```

Ensuite, teste l'endpoint :

```bash
curl -X POST http://localhost:3000/api/send-contact-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectType": "Web Development",
    "message": "Ceci est un test",
    "language": "fr"
  }'
```

### 6. Déployer sur Vercel

```bash
# Déployer
vercel --prod

# Ou via Git (recommandé)
git add .
git commit -m "Add Resend email notifications"
git push origin main
```

Vercel déploiera automatiquement l'Edge Function.

### 7. Vérifier le domaine d'envoi (Important!)

Par défaut, Resend utilise `onboarding@resend.dev` qui est limité.

Pour un domaine personnalisé :

1. Dans Resend Dashboard, va dans **Domains**
2. Clique sur **Add Domain**
3. Entre ton domaine (ex: `innoamsoftware.tn`)
4. Ajoute les enregistrements DNS fournis par Resend
5. Attends la vérification (quelques minutes)
6. Modifie `api/send-contact-email.ts` :

```typescript
from: 'InnoAM <contact@innoamsoftware.tn>',
```

### 8. Personnaliser l'email de destination

Dans `api/send-contact-email.ts`, ligne 155, change l'email :

```typescript
to: ['ton-aniswashere7@gmail.com'],  // Remplace par ton vrai email
```

Tu peux aussi ajouter plusieurs destinataires :

```typescript
to: ['ton-aniswashere7@gmail.com', 'contact@innoamsoftware.tn'],
```

## Structure de l'email

L'email envoyé contient :

- **En-tête** : Design avec gradient violet/cyan
- **Badge** : "NOUVEAU CONTACT"
- **Tableau d'informations** :
  - Nom du client
  - Entreprise (si fournie)
  - Email (cliquable)
  - Téléphone (cliquable, si fourni)
  - Type de projet
  - Budget (si fourni)
  - Langue du formulaire
- **Message** : Dans une boîte stylisée
- **Bouton CTA** : "Répondre au client" (ouvre le client email)
- **Footer** : Informations InnoAM

## Flux complet

1. **Utilisateur** remplit le formulaire sur `/contact`
2. **Frontend** valide les données avec Zod
3. **Supabase** enregistre le message dans `contact_messages`
4. **API Edge Function** envoie un email via Resend
5. **Email** arrive dans ta boîte de réception
6. **Utilisateur** voit un message de succès

## Gestion des erreurs

- Si Supabase échoue → L'utilisateur voit une erreur, rien n'est envoyé
- Si Resend échoue → L'utilisateur voit quand même le succès (le message est dans Supabase)
- Les erreurs sont loggées dans la console pour debugging

## Limites Resend (Plan gratuit)

- **100 emails/jour**
- **3,000 emails/mois**
- Domaine `onboarding@resend.dev` uniquement

Pour plus, upgrade vers un plan payant ou utilise ton propre domaine.

## Troubleshooting

### Erreur : "RESEND_API_KEY is not defined"

Vérifie que la variable d'environnement est bien configurée dans Vercel.

### Erreur : "Failed to send email"

1. Vérifie que la clé API est valide
2. Vérifie les logs Resend dans le dashboard
3. Vérifie que tu n'as pas dépassé les limites

### L'email n'arrive pas

1. Vérifie les spams
2. Vérifie que l'email de destination est correct
3. Vérifie les logs Resend pour voir si l'email a été envoyé

### Erreur 500 en production

1. Vérifie les logs Vercel : `vercel logs`
2. Vérifie que `RESEND_API_KEY` est bien configurée
3. Vérifie que le package `resend` est installé

## Support

- [Documentation Resend](https://resend.com/docs)
- [Documentation Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)
