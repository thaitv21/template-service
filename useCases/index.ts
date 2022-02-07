// TODO: Declare use cases which can be used in this service here

import CreateModelNameUseCaseImpl from './CreateModelNameUseCaseImpl';
import DeleteModelNameUseCaseImpl from './DeleteModelNameUseCaseImpl';
import GetModelNameListUseCaseImpl from './GetModelNameListUseCaseImpl';
import GetModelNameUseCaseImpl from './GetModelNameUseCaseImpl';
import { CreateModelNameUseCase } from './interfaces/CreateModelNameUseCase';
import { DeleteModelNameUseCase } from './interfaces/DeleteModelNameUseCase';
import { GetModelNameListUseCase } from './interfaces/GetModelNameListUseCase';
import { GetModelNameUseCase } from './interfaces/GetModelNameUseCase';
import { UpdateModelNameUseCase } from './interfaces/UpdateModelNameUseCase';
import UpdateModelNameUseCaseImpl from './UpdateModelNameUseCaseImpl';

interface UseCases {
  getModelNameListUseCase: GetModelNameListUseCase,
  createModelNameUseCase: CreateModelNameUseCase,
  getModelNameUseCase: GetModelNameUseCase,
  updateModelNameUseCase: UpdateModelNameUseCase,
  deleteModelNameUseCase: DeleteModelNameUseCase,
}

const useCases : UseCases = {
  getModelNameListUseCase: new GetModelNameListUseCaseImpl(),
  createModelNameUseCase: new CreateModelNameUseCaseImpl(),
  getModelNameUseCase: new GetModelNameUseCaseImpl(),
  updateModelNameUseCase: new UpdateModelNameUseCaseImpl(),
  deleteModelNameUseCase: new DeleteModelNameUseCaseImpl(),
};

export const {
  getModelNameListUseCase,
  createModelNameUseCase,
  getModelNameUseCase,
  updateModelNameUseCase,
  deleteModelNameUseCase,
} = useCases;
