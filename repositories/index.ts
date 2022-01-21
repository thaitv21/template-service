// TODO: Declare repository objects which can be used in this service here

import ModelNameRepositoryImpl from "./ModelNameRepositoryImpl";
import { ModelNameRepository } from "./interfaces/ModelNameRepository";

interface Repositories {
  modelNameRepository: ModelNameRepository,
}

const repositories : Repositories = {
  modelNameRepository: new ModelNameRepositoryImpl(),
}

export const {
  modelNameRepository,
} = repositories;