import { ModelName } from '../../models/ModelName';
import { CognitoUser } from '../../models/CognitoUser';

export interface GetModelNameListUseCase {
  invoke(currentUser: CognitoUser): Promise<Array<ModelName>>,
}
