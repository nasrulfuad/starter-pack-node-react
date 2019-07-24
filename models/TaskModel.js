import Sequelize from 'sequelize'
import db from '../database/db'

export default db.sequelize.define(
	'tasks', {
		id: {
			type: Sequelize.INTEGER(5),
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(50)
		}
	},
	{
		timestamps: false
	}
)
