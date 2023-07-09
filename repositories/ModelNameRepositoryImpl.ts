import { ModelName } from '../models/ModelName';
import { ModelNameRepository } from './interfaces/ModelNameRepository';

export default class ModelNameRepositoryImpl implements ModelNameRepository {
  list(tenantId: string): Promise<ModelName[]> {
    throw new Error('Method not implemented');
  }

  get(tenantId: string, id: string): Promise<ModelName> {
    throw new Error('Method not implemented!');
  }

  create(tenantId: string, modelName: ModelName): Promise<ModelName> {
    throw new Error('Method not implemented!');
  }

  update(tenantId: string, id: string, modelName: Partial<ModelName>): Promise<ModelName> {
    throw new Error('Method not implemented!');
  }

  delete(tenantId: string, id: string): Promise<void> {
    throw new Error('Method not implemented!');
  }
}
