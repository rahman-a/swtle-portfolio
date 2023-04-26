export type Email = {
  isPrimary: boolean
  email: string
}

export type Country = {
  name: string
  abbr: string
  image: string
}

export type Phone = {
  isPrimary?: boolean
  phone: string
}

export type ExpireAt = {
  identity: string
  passport: string
}
export type VerificationDocument = {
  image: File
}

export type IFDataExisted = {
  username?: string
  emails?: Email[]
  phones?: Phone[]
}

export interface IRegistrationProps {
  username: string
  emails: Email[]
  password: string
  confirmPassword?: string
  isAgreed: boolean
  fullNameInEnglish: string
  fullNameInArabic: string
  company: string
  insideAddress: string
  outsideAddress?: string
  country: Country
  insidePhones: Phone[]
  outsidePhones?: Phone[]
  avatar: File
  'identity-front': VerificationDocument
  'identity-back': VerificationDocument
  passport: VerificationDocument
  expireAt: ExpireAt
}

export type RegistrationContextProps = {
  state: IRegistrationProps
  dispatch: React.Dispatch<RegistrationAction>
}

export type RegistrationProviderProps = {
  children: React.ReactNode
}

export enum RegistrationTypes {
  SET_USERNAME = 'SET_USERNAME',
  SET_EMAILS = 'SET_EMAILS',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD',
  SET_IS_AGREED = 'SET_IS_AGREED',
  SET_FULL_NAME_IN_ENGLISH = 'SET_FULL_NAME_IN_ENGLISH',
  SET_FULL_NAME_IN_ARABIC = 'SET_FULL_NAME_IN_ARABIC',
  SET_COMPANY = 'SET_COMPANY',
  SET_INSIDE_ADDRESS = 'SET_INSIDE_ADDRESS',
  SET_OUTSIDE_ADDRESS = 'SET_OUTSIDE_ADDRESS',
  SET_COUNTRY = 'SET_COUNTRY',
  SET_INSIDE_PHONES = 'SET_INSIDE_PHONES',
  SET_OUTSIDE_PHONES = 'SET_OUTSIDE_PHONES',
  SET_AVATAR = 'SET_AVATAR',
  SET_IDENTITY = 'SET_IDENTITY',
  SET_PASSPORT = 'SET_PASSPORT',
}

export type RegistrationAction =
  | {
      type: RegistrationTypes.SET_USERNAME
      payload: string
    }
  | {
      type: RegistrationTypes.SET_EMAILS
      payload: Email[]
    }
  | {
      type: RegistrationTypes.SET_PASSWORD
      payload: string
    }
  | {
      type: RegistrationTypes.SET_CONFIRM_PASSWORD
      payload: string
    }
  | {
      type: RegistrationTypes.SET_IS_AGREED
      payload: boolean
    }
  | {
      type: RegistrationTypes.SET_FULL_NAME_IN_ENGLISH
      payload: string
    }
  | {
      type: RegistrationTypes.SET_FULL_NAME_IN_ARABIC
      payload: string
    }
  | {
      type: RegistrationTypes.SET_COMPANY
      payload: string
    }
  | {
      type: RegistrationTypes.SET_INSIDE_ADDRESS
      payload: string
    }
  | {
      type: RegistrationTypes.SET_OUTSIDE_ADDRESS
      payload: string
    }
  | {
      type: RegistrationTypes.SET_COUNTRY
      payload: Country
    }
  | {
      type: RegistrationTypes.SET_INSIDE_PHONES
      payload: Phone[]
    }
  | {
      type: RegistrationTypes.SET_OUTSIDE_PHONES
      payload: Phone[]
    }
  | {
      type: RegistrationTypes.SET_AVATAR
      payload: File
    }
  | {
      type: RegistrationTypes.SET_IDENTITY
      payload: VerificationDocument
    }
  | {
      type: RegistrationTypes.SET_PASSPORT
      payload: VerificationDocument
    }
