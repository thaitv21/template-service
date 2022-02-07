import { ModelName } from '../../models/ModelName';

export interface GetModelNameListUseCase {
  invoke: () => Promise<Array<ModelName>>;
}
