import db from '../models/index.js'
import { Transaction } from 'sequelize'

class UserService {
  async updateBalance(userId, amount) {
    const t = await db.sequelize.transaction({
      isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE
    })

    try {
      const user = await db.users.findOne({ where: { id: userId } })

      if (user.balance + amount < 0 || !user) {
        await t.rollback()
        throw new Error()
      }

      const updateBalance = await db.users.update(
        {
          balance: user.balance + amount
        },
        {
          where: {
            id: userId
          }
        },
        { transaction: t }
      )

      await t.commit()

      return parseInt(user.balance + amount)
    } catch (error) {
      console.log(error)
      await t.rollback()
    }
  }
}

export default new UserService()
