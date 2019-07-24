import Sequelize from 'sequelize'
import { dbName, user, pass, host } from '../config/config'

const db = {}
const sequelize = new Sequelize(dbName, user, pass, {
	host,
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
