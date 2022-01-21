import { ModelName } from "../models/ModelName";
import { modelNameRepository } from "../repositories";
import { GetModelNameUseCase } from "./interfaces/GetModelNameUseCase";

export default class GetModelNameUseCaseImpl implements GetModelNameUseCase {
  invoke = (id: string | number) => modelNameRepository.get(id);
}