import strings from 'locale/en'

export const hasFormError = (formErrors: Record<string, string>): boolean => {
  return !!Object.keys(formErrors).find((errorkey) => formErrors[errorkey])
}
const { validationMessages } = strings

export const validateUsername = (username: string): string => {
  const { required } = validationMessages.userName

  if (!username) {
    return required
  } else {
    return ''
  }
}

export const validateRequired = (value: string): string => {
  const { required } = validationMessages.field

  if (!value) {
    return required
  } else {
    return ''
  }
}

export const validatePassword = (password: string): string => {
  const { required } = validationMessages.password
  if (!password) {
    return required
  } else {
    return ''
  }
}

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string => {
  const { confirmPasswordRequired, nonMatch } = validationMessages.password
  if (!confirmPassword) {
    return confirmPasswordRequired
  } else if (password !== confirmPassword) {
    return nonMatch
  } else {
    return ''
  }
}

export const validateEmail = (email: string): string => {
  const { required, invalid } = validationMessages.email
  if (!email) {
    return required
  } else {
    let lastAtPos = email.lastIndexOf('@')
    let lastDotPos = email.lastIndexOf('.')
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf('@@') == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      return invalid
    } else {
      return ''
    }
  }
}

export const validatePhone = (phone: string): string => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const { required, numberOnly, invalid } = validationMessages.phone
  if (!phone) {
    return required
  } else if (!phone.match(/^[0-9\b]+$/)) {
    return numberOnly
  } else if (!phone.match(phoneRegExp) || phone.length !== 10) {
    return invalid
  } else {
    return ''
  }
}

export const validateYear = (value: string): string => {
  const {
    field: { required },
    date: { academicYearInvalid }
  } = validationMessages

  if (!value) return required

  const regExp = /^(19|20)\d{2}$/
  return !value.match(regExp) ? academicYearInvalid : ''
}

export const validateDateOfBirth = (value: string): string => {
  const { dob } = validationMessages
  const pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/
  return pattern.test(value) ? '' : dob
}

export const validateAadhar = (aadhar: string): string => {
  const AadharRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const { required, numberOnly, invalid } = validationMessages.aahar
  if (!aadhar) {
    return required
  } else if (!aadhar.match(/^[0-9\b]+$/)) {
    return numberOnly
  } else if (!aadhar.match(AadharRegExp) || aadhar.length !== 12) {
    return invalid
  } else {
    return ''
  }
}