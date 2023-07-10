import { ModelName } from '../../models/ModelName';
import { CognitoUser } from '../../models/CognitoUser';

export interface GetModelNameUseCase {
  invoke(currentUser: CognitoUser, modelNameId: string): Promise<ModelName | undefined>,
}
