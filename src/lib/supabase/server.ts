import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function supabaseServer(reqCookies?: NextRequest['cookies']) {
  const cookieStore = reqCookies ?? (await cookies())

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      }
    }
  )
}
