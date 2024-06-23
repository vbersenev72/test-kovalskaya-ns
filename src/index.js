import express from 'express'
import { config } from 'dotenv'
import { sequelize } from './models/index.js'
import router from './routers/index.js'
import createInitialUser from './migrations/createInitialUser/createInitialUser.migration.js'
import { expressSwaggerJsDoc } from './internalModules/ExpressSwaggerJsDoc.js'
import * as path from 'path'
import { fileURLToPath } from 'url'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use('/api', router)

app.listen(PORT, async () => {
  try {
    console.log(`STARTED ON 127.0.0.1:${PORT}`)
    await sequelize
      .sync({ alter: true })
      .then(async () => {
        createInitialUser()
        console.log('Таблицы созданы')
      })
      .catch((error) => {
        console.error('Ошибка при создании таблиц:', error)
      })
    expressSwaggerJsDoc(path.join(__dirname, 'routers', '**/*.js'))(app)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})
