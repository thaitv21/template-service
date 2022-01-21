import { ModelName } from '../models/ModelName';
import { ModelNameRepository } from './interfaces/ModelNameRepository';

export default class ModelNameRepositoryImpl implements ModelNameRepository {
  list = async () => {
    throw new Error('Method not implemented!');
  };

  get = async (id: string | number) => {
    console.log(id);
    throw new Error('Method not implemented!');
  };

  create = async (modelName: ModelName) => {
    console.log(modelName);
    throw new Error('Method not implemented!');
  };

  update = async (id: string | number, modelName: ModelName) => {
    console.log(id, modelName);
    throw new Error('Method not implemented!');
  };

  delete = async (id: string | number) => {
    console.log(id);
    throw new Error('Method not implemented!');
  };
}
