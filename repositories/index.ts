// TODO: Declare repository objects which can be used in this service here

import ModelNameRepositoryImpl from './ModelNameRepositoryImpl';
import { ModelNameRepository } from './interfaces/ModelNameRepository';

interface Repositories {
  modelNameRepository: ModelNameRepository,
}

const repositories : Repositories = {
  modelNameRepository: new ModelNameRepositoryImpl(),
};

// TODO: Remove below line if there are two or more repository
// eslint-disable-next-line import/prefer-default-export
export const {
  modelNameRepository,
} = repositories;
