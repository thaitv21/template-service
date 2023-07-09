import { ModelName } from '../models/ModelName';
import { modelNameRepository } from '../repositories';
import { CreateModelNameUseCase } from './interfaces/CreateModelNameUseCase';
import { CognitoUser } from '../models/CognitoUser';
import { CreateModelNameDto } from '../dto/CreateModelNameDto';

export default class CreateModelNameUseCaseImpl implements CreateModelNameUseCase {
  invoke(currentUser: CognitoUser, createModelNameDto: CreateModelNameDto): Promise<ModelName> {
    const modelName = createModelNameDto as ModelName;
    return modelNameRepository.create(currentUser.tenant, modelName);
  }
}
