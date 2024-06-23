import userService from '../services/user.service.js'
import { updateBalanceSchema } from '../dto/updateBalanceSchema.dto.js'
import { IDSchema } from '../dto/id.dto.js'

class UserController {
  async updateBalanceDown(req, res) {
    try {
      const body = updateBalanceSchema.parse(req.body)
      const userId = IDSchema.parse(parseInt(req.params.userId))

      const updateBalance = await userService.updateBalance(userId, body.amount)

      return res.json({
        status: 'ok',
        message: 'succesfully updated',
        updateBalance
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: 'Can not update balance. Perhaps there are not enough amount',
        error
      })
    }
  }
}

export default new UserController()
