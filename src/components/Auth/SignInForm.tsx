'use client'

import React from 'react'
import CtaBtn from '@/components/Generic/Cta/CtaBtn'
import Input from '@/components/Generic/Form/Input'
import BannerInfo from '@/components/Generic/Ui/BannerInfo'
import { LoginFormValues, signInSchema } from '@/schema/auth/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormProps {
  isLoading: boolean
  errorMsg: string | null
  onSubmit: SubmitHandler<LoginFormValues>
}

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
    />
  </svg>
)

const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6.616 21q-.672 0-1.144-.472T5 19.385v-8.77q0-.67.472-1.143Q5.944 9 6.616 9H8V7q0-1.671 1.165-2.835Q10.329 3 12 3t2.836 1.165T16 7v2h1.385q.67 0 1.143.472q.472.472.472 1.144v8.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h10.769q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T17.385 10H6.615q-.269 0-.442.173T6 10.616v8.769q0 .269.173.442t.443.173M12 16.5q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434M9 9h6V7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zM6 20V10z"
    />
  </svg>
)

export default function SignInForm({ isLoading, errorMsg, onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <>
      {errorMsg && <BannerInfo msg={errorMsg} type="error" />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Input
          type="email"
          placeholder="Enter your address email"
          autoComplete="email"
          register={register('email')}
          error={errors.email}
        >
          <EmailIcon />
        </Input>
        <Input
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          register={register('password')}
          error={errors.password}
        >
          <PasswordIcon />
        </Input>
        <CtaBtn type="submit" loader={isLoading} disabled={isLoading} className="mt-3 w-full">
          Access to the application
        </CtaBtn>
        <p className="text-gray-500/90 text-sm flex gap-1">
          Don’t have an account?
          <a className="text-indigo-400 hover:underline" href="/auth/sign-up">
            Sign up
          </a>
        </p>
      </form>
    </>
  )
}
