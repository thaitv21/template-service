import { modelNameRepository } from '../repositories';
import { DeleteModelNameUseCase } from './interfaces/DeleteModelNameUseCase';
import { CognitoUser } from '../models/CognitoUser';

export default class DeleteModelNameUseCaseImpl implements DeleteModelNameUseCase {
  /**
   * Invokes the DeleteModelNameUseCase to delete a modelName.
   *
   * @param currentUser - The current user invoking the use case.
   * @param modelNameId - The ID of the modelName to delete.
   * @returns A Promise that resolves when the deletion is complete.
   */
  invoke(currentUser: CognitoUser, modelNameId: string): Promise<void> {
    return modelNameRepository.delete(currentUser.tenant, modelNameId);
  }
}
