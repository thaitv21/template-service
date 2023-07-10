import { helper } from 'core';
import { modelNameRepository } from '../repositories';
import { GetModelNameUseCase } from './interfaces/GetModelNameUseCase';
import { ModelName } from '../models/ModelName';
import { CognitoUser } from '../models/CognitoUser';

export default class GetModelNameUseCaseImpl implements GetModelNameUseCase {
  /**
   * Invokes the GetModelNameUseCase to delete a modelName.
   *
   * @param currentUser - The current user invoking the use case.
   * @param modelNameId - The ID of the source to retrieve.
   * @returns A Promise that resolves to the retrieved source, or undefined if not found.
   */
  async invoke(currentUser: CognitoUser, modelNameId: string): Promise<ModelName | undefined> {
    const modelName = await modelNameRepository.get(currentUser.tenant, modelNameId);
    if (!modelName) return undefined;
    return helper.excludeDataFromObject(modelName) as ModelName;
  }
}
