import cors from 'cors';
import { getCurrentUserInfo } from 'decode-token';
import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import {
  createModelNameUseCase, deleteModelNameUseCase, getModelNameListUseCase, getModelNameUseCase,
  updateModelNameUseCase,
} from './useCases';
import wrapResponse from './utils/wrapResponse';
import { FAILED, SUCCESS } from './utils/constants';
import validate, { createModelNameValidator, updateModelNameValidator } from './utils/validator';
import logger from './utils/logger';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', ['*']);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.log(`Request to ${req.method}: ${req.url}`);
  next();
});

app.get('/modelNames', async (req: Request, res: Response) => {
  try {
    const currentUser = getCurrentUserInfo(req.headers.authorization!);
    const modelNames = await getModelNameListUseCase.invoke(currentUser);
    res.json(wrapResponse(SUCCESS, modelNames));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.post('/modelNames', createModelNameValidator(), async (req: Request, res: Response) => {
  try {
    validate(req);
    const currentUser = getCurrentUserInfo(req.headers.authorization!);
    const modelName = await createModelNameUseCase.invoke(currentUser, req.body);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.get('/modelNames/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const currentUser = getCurrentUserInfo(req.headers.authorization!);
    const modelName = await getModelNameUseCase.invoke(currentUser, id);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.put('/modelNames/:id', updateModelNameValidator(), async (req: Request, res: Response) => {
  try {
    validate(req);
    const { id } = req.params;
    const currentUser = getCurrentUserInfo(req.headers.authorization!);
    const modelName = await updateModelNameUseCase.invoke(currentUser, id, req.body);
    res.json(wrapResponse(SUCCESS, modelName));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

app.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const currentUser = getCurrentUserInfo(req.headers.authorization!);
    await deleteModelNameUseCase.invoke(currentUser, id);
    res.json(wrapResponse(SUCCESS, {}));
  } catch {
    res.json(wrapResponse(FAILED, undefined));
  }
});

export default app;
