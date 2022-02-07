import { ModelName } from '../../models/ModelName';

export interface CreateModelNameUseCase {
  invoke: (modelName: ModelName) => Promise<ModelName>;
}
