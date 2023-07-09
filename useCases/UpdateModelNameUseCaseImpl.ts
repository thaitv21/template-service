import { ModelName } from '../models/ModelName';
import { UpdateModelNameUseCase } from './interfaces/UpdateModelNameUseCase';
import { UpdateModelNameDto } from '../dto/UpdateModelNameDto';
import { modelNameRepository } from '../repositories';
import { CognitoUser } from '../models/CognitoUser';

export default class UpdateModelNameUseCaseImpl implements UpdateModelNameUseCase {
  invoke(
    currentUser: CognitoUser,
    modelNameId: string,
    updateModelNameDto: UpdateModelNameDto,
  ): Promise<ModelName> {
    return modelNameRepository.update(currentUser.tenant, modelNameId, updateModelNameDto);
  }
}
