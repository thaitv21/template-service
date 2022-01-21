export interface DeleteModelNameUseCase {
  invoke: (id: string | number) => Promise<void>;
}