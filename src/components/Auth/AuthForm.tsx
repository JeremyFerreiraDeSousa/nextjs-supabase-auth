'use client'

import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { useSignIn } from '@/hooks/auth/useSignIn'
import { useSignUp } from '@/hooks/auth/useSignUp'

type Mode = 'signIn' | 'signUp'

interface AuthFormProps {
  mode: Mode
}

const copyContent = {
  signIn: {
    title: 'Sign in',
    subtitle: 'Welcome back! Please sign in to continue'
  },
  signUp: {
    title: 'Sign up',
    subtitle: 'Welcome, please create an account to proceed'
  }
} as const

export default function AuthForm({ mode }: AuthFormProps) {
  const { title, subtitle } = copyContent[mode]
  const { signIn, isLoading: signInLoading, error: signInError } = useSignIn()
  const {
    signUp,
    isLoading: signUpLoading,
    success: signUpSuccess,
    error: signUpError
  } = useSignUp()

  return (
    <div className="w-80 md:w-96">
      {mode === 'signUp' && signUpSuccess ? null : (
        <>
          <h2 className="title text-gray-900 text-center">{title}</h2>
          <p className="text-gray-600 mt-3 mb-8 text-center">{subtitle}</p>
        </>
      )}

      {mode === 'signIn' ? (
        <SignInForm isLoading={signInLoading} errorMsg={signInError} onSubmit={signIn} />
      ) : (
        <SignUpForm
          isLoading={signUpLoading}
          success={signUpSuccess}
          errorMsg={signUpError}
          onSubmit={signUp}
        />
      )}
    </div>
  )
}
