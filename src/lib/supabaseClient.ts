// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// Use NEXT_PUBLIC_* for client-side apps (Next.js/Vite). Fall back to SUPABASE_* for other environments.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? ''
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  if (process.env.NODE_ENV !== 'production') {
    // In development warn when env vars are missing — avoid throwing to keep DX smooth.
    // In production it's better to fail-fast in your runtime if these are required.
    // This file intentionally does not throw so server-side deployments can decide their policy.
    // eslint-disable-next-line no-console
    console.warn('Supabase URL or ANON key is not set. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_URL and SUPABASE_ANON_KEY')
  }
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase
