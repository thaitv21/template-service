import { ModelName } from '../../models/ModelName';
import { CognitoUser } from '../../models/CognitoUser';
import { CreateModelNameDto } from '../../dto/CreateModelNameDto';

export interface CreateModelNameUseCase {
  invoke(currentUser: CognitoUser, createModelNameDto: CreateModelNameDto): Promise<ModelName>,
}
