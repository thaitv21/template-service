import { Sequelize, ModelCtor } from 'sequelize-typescript';
import ModelNameModel from './database/sequelize/models/ModelNameModel';

interface Models {
  ModelNameModel: ModelCtor<ModelNameModel>
}

export default class SequelizeProvider {
  models: Models;

  sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USERNAME || '', process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialect: 'mysql',
      dialectOptions: {
        requestTimeout: 3000,
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
    this.models = { ModelNameModel };
    this.sequelize.addModels(Object.values(this.models));
  }

  connect = async () => {
    await this.sequelize.authenticate();
    await this.sequelize.sync();
  };
}
