
CREATE TABLE public.ai_readiness_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  score INTEGER NOT NULL,
  label TEXT NOT NULL,
  answers JSONB NOT NULL,
  recommended_tool_ids TEXT[] NOT NULL DEFAULT '{}',
  recommended_stack_id TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_readiness_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a readiness result"
ON public.ai_readiness_results
FOR INSERT
TO public
WITH CHECK (true);
