import cors from 'cors';
import express, { Request, Response } from 'express';
import compression from 'compression';
import { createModelNameUseCase, deleteModelNameUseCase, getModelNameListUseCase, getModelNameUseCase, updateModelNameUseCase } from './useCases';
import wrapResponse from './utils/wrapResponse';
import { FAILED, SUCCESS } from './utils/constants';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  try {
    const modelNames = await getModelNameListUseCase.invoke();
    res.json(wrapResponse(SUCCESS, modelNames));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.post('/', async (req: Request, res: Response) => {
  try {
    // TODO: Validate request body if needed
    const modelName = await createModelNameUseCase.invoke(req.body);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    // TODO: Convert the `id` to integer if needed
    const modelName = await getModelNameUseCase.invoke(id);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    // TODO: Convert the `id` to integer if needed
    // TODO: Validate request body if needed
    const modelName = await updateModelNameUseCase.invoke(id, req.body);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    // TODO: Convert the `id` to integer if needed
    await deleteModelNameUseCase.invoke(id);
    res.json(wrapResponse(SUCCESS, {}));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

export default app;
