import { modelNameRepository } from '../repositories';
import { GetModelNameUseCase } from './interfaces/GetModelNameUseCase';
import { ModelName } from '../models/ModelName';

export default class GetModelNameUseCaseImpl implements GetModelNameUseCase {
  invoke(tenantId: string, modelNameId: string): Promise<ModelName> {
    return modelNameRepository.get(tenantId, modelNameId);
  }
}
