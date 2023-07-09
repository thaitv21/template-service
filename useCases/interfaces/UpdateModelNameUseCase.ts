import { ModelName } from '../../models/ModelName';
import { UpdateModelNameDto } from '../../dto/UpdateModelNameDto';
import { CognitoUser } from '../../models/CognitoUser';

export interface UpdateModelNameUseCase {
  invoke(
    currentUser: CognitoUser,
    modelNameId: string,
    updateModelNameDto: UpdateModelNameDto,
  ): Promise<ModelName>,
}
