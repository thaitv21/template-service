import { modelNameRepository } from '../repositories';
import { GetModelNameListUseCase } from './interfaces/GetModelNameListUseCase';
import { ModelName } from '../models/ModelName';
import { CognitoUser } from '../models/CognitoUser';

export default class GetModelNameListUseCaseImpl implements GetModelNameListUseCase {
  invoke(currentUser: CognitoUser): Promise<Array<ModelName>> {
    return modelNameRepository.list(currentUser.tenant);
  }
}
