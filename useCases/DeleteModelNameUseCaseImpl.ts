import { modelNameRepository } from "../repositories";
import { DeleteModelNameUseCase } from "./interfaces/DeleteModelNameUseCase";

export default class DeleteModelNameUseCaseImpl implements DeleteModelNameUseCase {
  invoke = async (id: string | number) => modelNameRepository.delete(id);

}