import { Sequelize } from 'sequelize'
import User from './User.model.js'
import { config } from 'dotenv'

config()

const DATABASE_URL = process.env.DATABASE_URL
export const sequelize = new Sequelize(String(DATABASE_URL), {
  dialect: 'postgres'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = User(sequelize, Sequelize)

export default db
