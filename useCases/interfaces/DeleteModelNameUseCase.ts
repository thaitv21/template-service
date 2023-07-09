import { CognitoUser } from '../../models/CognitoUser';

export interface DeleteModelNameUseCase {
  invoke(currentUser: CognitoUser, modelNameId: string): Promise<void>,
}
