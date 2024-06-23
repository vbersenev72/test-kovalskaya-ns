import fs from 'fs'
import { sequelize } from '../../models/index.js'

function up() {
  fs.readFile(
    'src/migrations/createInitialUser/createInitialUser.migration.sql',
    'utf8',
    async (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      await sequelize.query(data)
      return
    }
  )
}

export default up
