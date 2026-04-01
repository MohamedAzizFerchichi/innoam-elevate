# Supabase Setup pour InnoAM

## Configuration de la base de données

### 1. Créer la table contact_messages

Vous avez deux options pour créer la table :

#### Option A : Via Supabase Dashboard (Recommandé)

1. Allez sur [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **SQL Editor**
4. Copiez le contenu du fichier `migrations/20260401000000_create_contact_messages.sql`
5. Collez-le dans l'éditeur SQL
6. Cliquez sur **Run** pour exécuter la migration

#### Option B : Via Supabase CLI

```bash
# Installer Supabase CLI si ce n'est pas déjà fait
npm install -g supabase

# Se connecter à votre projet
supabase link --project-ref qhptanidjczumasixhuj

# Appliquer la migration
supabase db push
```

### 2. Vérifier la table

Après avoir créé la table, vérifiez qu'elle existe :

1. Allez dans **Table Editor** dans le dashboard
2. Vous devriez voir la table `contact_messages`
3. Vérifiez que les colonnes suivantes existent :
   - `id` (UUID, Primary Key)
   - `created_at` (Timestamp)
   - `name` (VARCHAR)
   - `company` (VARCHAR, nullable)
   - `email` (VARCHAR)
   - `phone` (VARCHAR, nullable)
   - `project_type` (VARCHAR)
   - `budget` (VARCHAR, nullable)
   - `message` (TEXT)
   - `language` (VARCHAR)
   - `status` (VARCHAR)
   - `notes` (TEXT, nullable)

### 3. Tester le formulaire

1. Lancez l'application : `npm run dev`
2. Allez sur la page Contact : `http://localhost:5173/contact`
3. Remplissez le formulaire et soumettez
4. Vérifiez dans Supabase Dashboard > Table Editor > contact_messages que le message a été enregistré

### 4. Row Level Security (RLS)

Les politiques RLS sont déjà configurées dans la migration :

- **Inserts publics** : N'importe qui peut soumettre le formulaire (utilisateurs anonymes)
- **Lectures authentifiées** : Seuls les utilisateurs authentifiés peuvent lire les messages
- **Mises à jour authentifiées** : Seuls les utilisateurs authentifiés peuvent modifier les messages

### 5. Notifications par email (Optionnel)

Pour recevoir des notifications par email quand un message est soumis, vous pouvez :

1. Créer une fonction Edge dans Supabase
2. Utiliser un service comme SendGrid, Resend ou Mailgun
3. Configurer un webhook qui s'exécute après chaque INSERT dans `contact_messages`

## Structure de la table

```sql
contact_messages
├── id (UUID) - Identifiant unique
├── created_at (TIMESTAMP) - Date de création
├── name (VARCHAR) - Nom du contact
├── company (VARCHAR) - Entreprise (optionnel)
├── email (VARCHAR) - Email du contact
├── phone (VARCHAR) - Téléphone (optionnel)
├── project_type (VARCHAR) - Type de projet
├── budget (VARCHAR) - Budget (optionnel)
├── message (TEXT) - Message du contact
├── language (VARCHAR) - Langue du formulaire (fr/en)
├── status (VARCHAR) - Statut (new, read, replied, archived)
└── notes (TEXT) - Notes internes (optionnel)
```

## Troubleshooting

### Erreur : "permission denied for table contact_messages"

Vérifiez que les politiques RLS sont bien créées :

```sql
SELECT * FROM pg_policies WHERE tablename = 'contact_messages';
```

### Erreur : "relation contact_messages does not exist"

La table n'a pas été créée. Exécutez la migration SQL manuellement via le dashboard.

### Les messages ne s'enregistrent pas

1. Vérifiez les variables d'environnement dans `.env`
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez les logs Supabase dans le dashboard
