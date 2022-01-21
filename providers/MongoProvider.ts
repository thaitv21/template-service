import mongoose, { Model } from 'mongoose';
import { ModelName } from '../models/ModelName';
import ModelNameModel from './database/mongo/models/ModelNameModel';

interface Models {
  ModelNameModel: Model<ModelName>
}

export default class MongoProvider {
  models: Models;

  constructor() {
    this.models = {
      ModelNameModel,
    };
  }

  connect = async () => {
    await mongoose.connect(process.env.MONGO_ENDPOINT || '');
  };
}
