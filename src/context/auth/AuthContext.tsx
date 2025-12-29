'use client'

import { createContext } from 'react'

export interface AuthContextValue {
  email: string | null
}

export const AuthContext = createContext<AuthContextValue | null>(null)
