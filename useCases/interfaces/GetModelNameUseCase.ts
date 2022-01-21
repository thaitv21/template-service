import { ModelName } from "../../models/ModelName";

export interface GetModelNameUseCase {
  invoke: (id: string | number) => Promise<ModelName>;
}