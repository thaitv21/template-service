import { ModelName } from '../models/ModelName';
import { modelNameRepository } from '../repositories';
import { UpdateModelNameUseCase } from './interfaces/UpdateModelNameUseCase';

export default class UpdateModelNameUseCaseImpl implements UpdateModelNameUseCase {
  invoke = (id: string | number, modelName: ModelName) => modelNameRepository.update(id, modelName);
}
