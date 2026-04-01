-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(100),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  project_type VARCHAR(100) NOT NULL,
  budget VARCHAR(50),
  message TEXT NOT NULL,
  language VARCHAR(10) DEFAULT 'fr',
  status VARCHAR(20) DEFAULT 'new',
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public inserts" ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all messages
CREATE POLICY "Allow authenticated reads" ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update messages
CREATE POLICY "Allow authenticated updates" ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS contact_messages_email_idx ON public.contact_messages(email);

-- Add comment to table
COMMENT ON TABLE public.contact_messages IS 'Stores contact form submissions from the website';
