import { ModelName } from '../models/ModelName';
import { modelNameRepository } from '../repositories';
import { GetModelNameListUseCase } from './interfaces/GetModelNameListUseCase';

export default class GetModelNameListUseCaseImpl implements GetModelNameListUseCase {
  invoke = async () => modelNameRepository.list();
}
