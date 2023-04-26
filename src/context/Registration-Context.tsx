import { createContext, useContext, useReducer } from 'react'
import {
  IRegistrationProps,
  RegistrationAction,
  RegistrationProviderProps,
  RegistrationContextProps,
  RegistrationTypes as types,
} from './types/Registration-types'

const RegistrationContext = createContext<RegistrationContextProps>(
  {} as RegistrationContextProps
)

const registrationReducer = (
  state: IRegistrationProps,
  action: RegistrationAction
) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return { ...state, username: action.payload }
    case types.SET_EMAILS:
      return { ...state, emails: action.payload }
    case types.SET_PASSWORD:
      return { ...state, password: action.payload }
    case types.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload }
    case types.SET_IS_AGREED:
      return { ...state, isAgreed: action.payload }
    case types.SET_FULL_NAME_IN_ENGLISH:
      return { ...state, fullNameInEnglish: action.payload }
    case types.SET_FULL_NAME_IN_ARABIC:
      return { ...state, fullNameInArabic: action.payload }
    case types.SET_COMPANY:
      return { ...state, company: action.payload }
    case types.SET_INSIDE_ADDRESS:
      return { ...state, insideAddress: action.payload }
    case types.SET_OUTSIDE_ADDRESS:
      return { ...state, outsideAddress: action.payload }
    case types.SET_COUNTRY:
      return { ...state, country: action.payload }
    case types.SET_INSIDE_PHONES:
      return { ...state, insidePhones: action.payload }
    case types.SET_OUTSIDE_PHONES:
      return { ...state, outsidePhones: action.payload }
    case types.SET_AVATAR:
      return { ...state, avatar: action.payload }
    case types.SET_IDENTITY:
      return { ...state, identity: action.payload }
    case types.SET_PASSPORT:
      return { ...state, passport: action.payload }
    default:
      return state
  }
}

export const useRegistrationContext = () => useContext(RegistrationContext)

export default function RegistrationProvider({
  children,
}: RegistrationProviderProps) {
  const [state, dispatch] = useReducer(
    registrationReducer,
    {} as IRegistrationProps
  )

  return (
    <RegistrationContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistrationContext.Provider>
  )
}
