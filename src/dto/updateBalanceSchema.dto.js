import { z } from 'zod'

export const updateBalanceSchema = z.object({
  amount: z.number().refine((value) => {
    return !isNaN(value)
  })
})
