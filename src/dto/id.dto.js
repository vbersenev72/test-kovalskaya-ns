import { z } from 'zod'

export const IDSchema = z.number().refine(
  (value) => {
    return !isNaN(value) && value > 0
  },
  {
    message: 'ID должен быть положительным числом, не NaN'
  }
)
