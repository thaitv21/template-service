import { helper } from 'core';
import { ModelName } from '../models/ModelName';
import { modelNameRepository } from '../repositories';
import { CreateModelNameUseCase } from './interfaces/CreateModelNameUseCase';
import { CognitoUser } from '../models/CognitoUser';
import { CreateModelNameDto } from '../dto/CreateModelNameDto';

export default class CreateModelNameUseCaseImpl implements CreateModelNameUseCase {
  /**
   * Invokes the CreateModelNameUseCase to create a modelName.
   *
   * @param currentUser - The current user invoking the use case.
   * @param createModelNameDto - The DTO (data transfer object) containing the data for
   * creating the modelName.
   * @returns A Promise that resolves to the created modelName.
   */
  async invoke(
    currentUser: CognitoUser,
    createModelNameDto: CreateModelNameDto,
  ): Promise<ModelName> {
    const dataToCreate = await this.buildModelName({ currentUser, createModelNameDto });
    const modelName = await modelNameRepository.create(currentUser.tenant, dataToCreate);
    return helper.excludeDataFromObject(modelName) as ModelName;
  }

  /**
   * Builds the modelName object using the provided options.
   *
   * @param options - The options for building the modelName.
   * @returns A Promise that resolves to the built modelName.
   */
  private async buildModelName(options: {
    currentUser: CognitoUser,
    createModelNameDto: CreateModelNameDto,
  }): Promise<ModelName> {
    const now = Date.now();
    const { currentUser, createModelNameDto } = options;
    return {
      code: await modelNameRepository.generateId(currentUser.tenant),
      name: createModelNameDto.name,
      createdAt: now,
      updatedAt: now,
    };
  }
}
