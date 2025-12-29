import { useReducer } from 'react'

interface AuthState {
  email: string | null
}

export type AuthAction = { type: 'SIGN_IN'; payload: { email: string } } | { type: 'SIGN_OUT' }

const initialState: AuthState = {
  email: null
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SIGN_IN':
      return { email: action.payload.email }
    case 'SIGN_OUT':
      return { email: null }
    default:
      return state
  }
}

export function useAuthStore() {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return { state, dispatch }
}
