export default (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    balance: {
      type: Sequelize.INTEGER
    }
  })

  return User
}
