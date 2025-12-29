import { supabaseClient } from '@/lib/supabase/client'

export async function signInService(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  })

  if (error || !data.user) {
    throw new Error(error?.message ?? 'Login failed')
  }

  return data
}

export async function signUpService(email: string, password: string) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function signOutService() {
  const { error } = await supabaseClient.auth.signOut()
  if (error) {
    throw new Error(error.message)
  }
}
