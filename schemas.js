const Joi = require('joi');

module.exports.productSchema = Joi.object({
	product: Joi.object({
		title: Joi.string().required(),
		image: Joi.string().required(),
		price: Joi.number().required().min(0),
		discount: Joi.number().required().min(0),
		quantity: Joi.number().required().min(0),
		description: Joi.string().required()
	}).required()
});