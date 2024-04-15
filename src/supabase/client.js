import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xnmvghmoaxijuilzvwzl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubXZnaG1vYXhpanVpbHp2d3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MTg3MzksImV4cCI6MjAyODA5NDczOX0.B8AFHgYK2eW19sGtmDsGoqdLC2yEv4kSxM64FYpX_Dg"
);
