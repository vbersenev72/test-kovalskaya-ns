import { Router } from 'express'
import userController from '../controllers/user.controller.js'

const userRouter = Router()

/**
 * @openapi
 *  components:
 *   schemas:
 *     UpdateBalanceDto:
 *       type: object
 *       required:
 *         - amount
 *       properties:
 *         amount:
 *          type: number
 *          example: -300
 *
 *     ReturnUpdateBalanceDto:
 *       type: object
 *       properties:
 *         amount:
 *          type: number
 *          example: 9700

 * /user/balance/{userId}:
 *   patch:
 *     description: "Обновить баланс. Положительный amount - пополнение баланса"
 *     tags: [Balance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBalanceDto'
 *     responses:
 *       201:
 *         description: Return status
 *         content:
 *          application/json:
 *            schema:
 *             $ref: '#/components/schemas/ReturnUpdateBalanceDto'
 */
userRouter.patch('/balance/:userId', userController.updateBalanceDown)

export default userRouter
