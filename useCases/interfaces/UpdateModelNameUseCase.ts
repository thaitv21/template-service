import { ModelName } from '../../models/ModelName';

export interface UpdateModelNameUseCase {
  invoke: (id: string | number, modelName: ModelName) => Promise<ModelName>;
}
