-- Shared updated_at helper
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- ============ tool_submissions ============
CREATE TABLE public.tool_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT tool_submissions_name_len CHECK (char_length(name) BETWEEN 1 AND 80),
  CONSTRAINT tool_submissions_url_len CHECK (char_length(url) BETWEEN 1 AND 300),
  CONSTRAINT tool_submissions_desc_len CHECK (char_length(description) BETWEEN 20 AND 500),
  CONSTRAINT tool_submissions_status_chk CHECK (status IN ('pending','approved','rejected'))
);

ALTER TABLE public.tool_submissions ENABLE ROW LEVEL SECURITY;

-- Public can submit (insert only); no public read.
CREATE POLICY "Anyone can submit a tool"
  ON public.tool_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE TRIGGER trg_tool_submissions_updated_at
  BEFORE UPDATE ON public.tool_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX idx_tool_submissions_created_at ON public.tool_submissions (created_at DESC);

-- ============ newsletter_subscribers ============
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT newsletter_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  CONSTRAINT newsletter_email_len CHECK (char_length(email) BETWEEN 3 AND 320)
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public can subscribe (insert only); no public read.
CREATE POLICY "Anyone can subscribe to the newsletter"
  ON public.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

CREATE INDEX idx_newsletter_subscribers_created_at ON public.newsletter_subscribers (created_at DESC);
