import type { LoginForm } from '../types/auth'

export const validateForm = (form: LoginForm): boolean => {
  return form.username.length > 0 && form.password.length > 0
} 