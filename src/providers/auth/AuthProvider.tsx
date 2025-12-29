'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/context/auth/AuthContext'
import { supabaseClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth/useAuthStore'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { state, dispatch } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    const { data: listener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        dispatch({ type: 'SIGN_IN', payload: { email: session.user.email! } })
        router.replace('/dashboard')
      } else {
        dispatch({ type: 'SIGN_OUT' })
        router.replace('/auth/sign-in')
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [dispatch, router])

  return <AuthContext value={{ email: state.email }}>{children}</AuthContext>
}
