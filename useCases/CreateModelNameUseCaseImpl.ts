import { ModelName } from "../models/ModelName";
import { modelNameRepository } from "../repositories";
import { CreateModelNameUseCase } from "./interfaces/CreateModelNameUseCase";

export default class CreateModelNameUseCaseImpl implements CreateModelNameUseCase {
  invoke = async (modelName: ModelName) => modelNameRepository.create(modelName);
}
