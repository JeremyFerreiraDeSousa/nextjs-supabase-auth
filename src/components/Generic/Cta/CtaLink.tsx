import React from 'react'
import Link from 'next/link'

type linkType = 'primary' | 'secondary'

interface LinkProps {
  link: string
  type: linkType
  title: string
  scroll: boolean
  children: React.ReactNode
}

export default function ctaLink({ link, type, title, scroll, children }: LinkProps) {
  const linkType =
    type === 'primary'
      ? 'text-white font-semibold bg-red-400 border-b-4 border-1 border-red-500 hover:bg-red-500'
      : 'text-black font-semibold bg-white border-b-4 border-1 border-gray-200 hover:bg-gray-200'

  return (
    <Link
      href={link}
      title={title}
      type={type}
      scroll={scroll}
      className={`${linkType} w-full h-11 flex items-center justify-center rounded-xl cursor-pointer disabled:cursor-not-allowed transition-all`}
    >
      {children}
    </Link>
  )
}
