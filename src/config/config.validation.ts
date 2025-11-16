import { ValidationPipeOptions } from '@nestjs/common';
import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),

  // Database
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
});

export const validationPipeOptions: ValidationPipeOptions = {
  forbidNonWhitelisted: true,
  whitelist: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};
