import CtaLink from '@/components/Generic/Cta/CtaLink'

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mx-auto max-w-4xl px-6 pt-14 lg:px-8 text-center">
      <h1 className="md:text-6xl text-3xl font-semibold tracking-tight text-balance text-gray-900">
        Password-Based authentication with Supabase
      </h1>
      <p className="max-w-xl text-gray-600 md:text-lg text-md text-pretty">
        Demonstrating a simple, effective password-based sign in and sign up system using Supabase
        with Next.js
      </p>
      <div className="flex items-center justify-center gap-x-3 md:gap-x-6 w-80 mt-4">
        <CtaLink link="/auth/sign-in" type="primary" title="Sign in" scroll={true}>
          Sign in
        </CtaLink>
        <CtaLink link="/auth/sign-up" type="secondary" title="Sign up" scroll={true}>
          Sign up
        </CtaLink>
      </div>
    </div>
  )
}
