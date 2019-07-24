import Joi from '@hapi/joi'

export const userLoginValidation = data => {
	return Joi.validate(data, {
		name: Joi.string().min(6).max(50).required(),
		password: Joi.string().min(6).max(100)
	})
}

export const userRegisterValidation = data => {
	return Joi.validate(data, {
		name: Joi.string().min(6).max(50).required(),
		password: Joi.string().min(6).max(100)
	})
}
