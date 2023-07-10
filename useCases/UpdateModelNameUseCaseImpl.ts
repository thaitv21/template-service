import { helper } from 'core';
import { ModelName } from '../models/ModelName';
import { UpdateModelNameUseCase } from './interfaces/UpdateModelNameUseCase';
import { UpdateModelNameDto } from '../dto/UpdateModelNameDto';
import { modelNameRepository } from '../repositories';
import { CognitoUser } from '../models/CognitoUser';

export default class UpdateModelNameUseCaseImpl implements UpdateModelNameUseCase {
  /**
   * Invokes the UpdateModelNameUseCase to update a modelName.
   *
   * @param currentUser - The current user invoking the use case.
   * @param modelNameId - The ID of the modelName to update.
   * @param updateModelNameDto - The DTO (data transfer object) containing the
   * updated modelName data.
   * @returns A Promise that resolves to the updated modelName.
   * @throws Error if the modelName with the specified ID is not found.
   */
  async invoke(
    currentUser: CognitoUser,
    modelNameId: string,
    updateModelNameDto: UpdateModelNameDto,
  ): Promise<ModelName> {
    const currentModelName = await modelNameRepository.get(currentUser.tenant, modelNameId);
    if (!currentModelName) throw new Error(`Could not found modelName ${modelNameId}`);
    const dataToUpdate = await this.buildDataToUpdate({
      currentModelName, currentUser, modelNameId, updateModelNameDto,
    });
    const modelName = await modelNameRepository.update(
      currentUser.tenant,
      modelNameId,
      dataToUpdate,
    );
    return helper.excludeDataFromObject(modelName) as ModelName;
  }

  /**
   * Builds the data to update based on the provided options.
   *
   * @param options - The options for building the data to update.
   * @returns A Promise that resolves to the partial modelName data to update.
   */
  async buildDataToUpdate(options: {
    currentUser: CognitoUser,
    modelNameId: string,
    currentModelName: ModelName,
    updateModelNameDto: UpdateModelNameDto,
  }): Promise<Partial<ModelName>> {
    const { currentModelName, updateModelNameDto } = options;
    const now = Date.now();
    let dataToUpdate: Partial<ModelName> = {};
    const props = Object.keys(updateModelNameDto);
    props.forEach((key) => {
      const prop = key as keyof UpdateModelNameDto;
      if (currentModelName[prop] !== updateModelNameDto[prop]) {
        dataToUpdate = { ...dataToUpdate, [prop]: updateModelNameDto[prop] };
      }
    });
    dataToUpdate.updatedAt = now;

    return dataToUpdate;
  }
}
