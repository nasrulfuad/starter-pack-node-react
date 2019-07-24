import Sequelize from 'sequelize'

const db = {}
const sequelize = new Sequelize('node_task', 'root', '`', {
	host: 'localhost',
	dialect: 'mysql',
	// operatorsAliases: false,
	pool: {
		max: 5, min: 0, acquire: 30000, idle: 10000
	}
})
/* Connect to db
sequelize
	.authenticate()
	.then(_ => console.log('Connected'))
	.catch(err => console.log(err))
*/

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
