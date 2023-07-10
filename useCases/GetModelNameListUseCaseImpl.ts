import { modelNameRepository } from '../repositories';
import { GetModelNameListUseCase } from './interfaces/GetModelNameListUseCase';
import { ModelName } from '../models/ModelName';
import { CognitoUser } from '../models/CognitoUser';

export default class GetModelNameListUseCaseImpl implements GetModelNameListUseCase {
  /**
   * Invokes the GetModelNameListUseCase to delete a modelName.
   *
   * @param currentUser - The current user invoking the use case.
   * @returns A Promise that resolves to an array of modelNames.
   */
  invoke(currentUser: CognitoUser): Promise<Array<ModelName>> {
    return modelNameRepository.list(currentUser.tenant);
  }
}
