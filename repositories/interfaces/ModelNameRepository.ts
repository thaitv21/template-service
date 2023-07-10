import { ModelName } from '../../models/ModelName';

export interface ModelNameRepository {
  list(tenantId: string): Promise<Array<ModelName>>,
  create(tenantId: string, modelName: ModelName): Promise<ModelName>,
  get(tenantId: string, id: string): Promise<ModelName | undefined>,
  update(tenantId: string, id: string, modelName: Partial<ModelName>): Promise<ModelName>,
  delete(tenantId: string, id: string): Promise<void>,
  generateId(tenantId: string): Promise<string>,
}
