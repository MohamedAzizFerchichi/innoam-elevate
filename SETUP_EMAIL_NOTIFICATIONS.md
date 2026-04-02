# 📧 Configuration des notifications email - InnoAM

## ✅ Ce qui a été fait

### 1. Edge Function créée (`api/send-contact-email.ts`)
- ✅ Utilise Resend pour envoyer des emails
- ✅ Email HTML professionnel avec design violet/cyan
- ✅ Tableau récapitulatif de toutes les informations
- ✅ Bouton "Répondre au client" cliquable
- ✅ Gestion d'erreurs complète

### 2. Formulaire Contact modifié (`src/pages/Contact.tsx`)
- ✅ Appelle l'API après insertion Supabase
- ✅ Gestion d'erreurs silencieuse (ne bloque pas l'utilisateur si l'email échoue)
- ✅ Tous les champs du formulaire sont envoyés

### 3. Configuration
- ✅ `vercel.json` créé pour Vercel
- ✅ Variable `RESEND_API_KEY` ajoutée dans `.env`
- ✅ Package `resend` déjà installé

## 🚀 Étapes pour activer les notifications

### Étape 1 : Créer un compte Resend

1. Va sur [resend.com](https://resend.com)
2. Crée un compte gratuit
3. Vérifie ton email

### Étape 2 : Obtenir la clé API

1. Dans le dashboard Resend, va dans **API Keys**
2. Clique sur **Create API Key**
3. Nom : "InnoAM Production"
4. Copie la clé (commence par `re_`)

### Étape 3 : Configurer la clé API

#### En local

Remplace dans `.env` :
```env
RESEND_API_KEY="re_your_actual_api_key_here"
```

#### Sur Vercel

1. Va dans ton projet Vercel
2. **Settings** > **Environment Variables**
3. Ajoute :
   - Name: `RESEND_API_KEY`
   - Value: `re_your_actual_api_key_here`
   - Environments: ✅ Production ✅ Preview ✅ Development

### Étape 4 : Déployer sur Vercel

```bash
git add .
git commit -m "Add email notifications with Resend"
git push origin main
```

Vercel déploiera automatiquement l'Edge Function.

### Étape 5 : Tester

1. Va sur `https://innoamsoftware.tn/contact`
2. Remplis le formulaire
3. Soumets
4. Vérifie ton email : **contactinnoam@gmail.com**

## 📧 Format de l'email

**De :** InnoAM <onboarding@resend.dev>  
**À :** contactinnoam@gmail.com  
**Objet :** 🚀 Nouveau projet InnoAM : [Nom du client]

**Contenu :**
- Badge "NOUVEAU CONTACT"
- Tableau avec toutes les infos :
  - 👤 Nom
  - 🏢 Entreprise
  - 📧 Email (cliquable)
  - 📱 Téléphone (cliquable)
  - 💼 Type de projet
  - 💰 Budget
  - 🌐 Langue
- 💬 Message dans une boîte stylisée
- Bouton "Répondre au client"
- Footer InnoAM

## 🎨 Personnalisation

### Changer l'email de destination

Dans `api/send-contact-email.ts`, ligne 155 :

```typescript
to: ['contactinnoam@gmail.com'],  // Change ici
```

Plusieurs destinataires :

```typescript
to: ['contactinnoam@gmail.com', 'contact@innoamsoftware.tn'],
```

### Utiliser ton propre domaine

1. Dans Resend Dashboard > **Domains**
2. Ajoute `innoamsoftware.tn`
3. Configure les DNS
4. Dans `api/send-contact-email.ts`, ligne 153 :

```typescript
from: 'InnoAM <contact@innoamsoftware.tn>',
```

### Personnaliser le design

Le HTML est dans `api/send-contact-email.ts` (lignes 40-180).

Tu peux modifier :
- Les couleurs (gradient violet/cyan)
- La structure du tableau
- Le footer
- Les emojis

## 🔍 Debugging

### Vérifier les logs Vercel

```bash
vercel logs
```

### Vérifier les logs Resend

1. Dashboard Resend > **Logs**
2. Tu verras tous les emails envoyés/échoués

### Tester l'API directement

```bash
curl -X POST https://innoamsoftware.tn/api/send-contact-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "projectType": "Web Dev",
    "message": "Test message",
    "language": "fr"
  }'
```

## ⚠️ Limites Resend (Plan gratuit)

- **100 emails/jour**
- **3,000 emails/mois**
- Domaine `onboarding@resend.dev` uniquement

Pour plus : upgrade vers un plan payant.

## 📊 Flux complet

```
Utilisateur remplit formulaire
         ↓
Validation Zod (frontend)
         ↓
Insertion Supabase ✅
         ↓
Appel API /api/send-contact-email
         ↓
Resend envoie l'email
         ↓
Email arrive dans ta boîte 📧
         ↓
Toast de succès pour l'utilisateur
```

## ✅ Checklist finale

- [ ] Compte Resend créé
- [ ] Clé API obtenue
- [ ] `RESEND_API_KEY` configurée dans Vercel
- [ ] Code déployé sur Vercel
- [ ] Test du formulaire effectué
- [ ] Email reçu dans la boîte de réception
- [ ] (Optionnel) Domaine personnalisé configuré

## 🆘 Support

- **Resend Docs** : [resend.com/docs](https://resend.com/docs)
- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Problème ?** Vérifie les logs Vercel et Resend

---

**Fait avec ❤️ par InnoAM**
