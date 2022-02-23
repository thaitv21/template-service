import { ModelName } from '../../models/ModelName';

export interface ModelNameRepository {
  list: () => Promise<Array<ModelName>>
  create: (modelName: ModelName) => Promise<ModelName>
  get: (id: string | number) => Promise<ModelName>
  update: (id: string | number, modelName: ModelName) => Promise<ModelName>
  delete: (id: string | number) => Promise<void>
}
