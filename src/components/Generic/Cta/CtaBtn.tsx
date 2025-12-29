import React from 'react'
import CtaLoader from '@/components/Generic/Ui/Loader/CtaLoader'

type btnType = 'button' | 'submit' | 'reset'

interface ButtonProps {
  type: btnType
  disabled?: boolean
  loader?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

export default function CtaBtn({
  type,
  disabled,
  loader,
  children,
  onClick,
  className
}: ButtonProps) {
  return (
    <button
      type={type}
      role="button"
      disabled={disabled}
      onClick={onClick}
      className={`h-11 rounded-xl cursor-pointer text-white font-semibold px-4 bg-red-400 border-b-4 border-1 border-red-500 hover:bg-red-500 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed transition-all ${className}`}
    >
      {loader ? <CtaLoader /> : children}
    </button>
  )
}
