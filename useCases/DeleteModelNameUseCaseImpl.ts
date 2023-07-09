import { modelNameRepository } from '../repositories';
import { DeleteModelNameUseCase } from './interfaces/DeleteModelNameUseCase';
import { CognitoUser } from '../models/CognitoUser';

export default class DeleteModelNameUseCaseImpl implements DeleteModelNameUseCase {
  invoke(currentUser: CognitoUser, modelNameId: string): Promise<void> {
    return modelNameRepository.delete(currentUser.tenant, modelNameId);
  }
}
