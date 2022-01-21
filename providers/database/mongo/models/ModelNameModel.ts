import { model, Schema } from 'mongoose';
import { ModelName } from '../../../../models/ModelName';

const schema = new Schema<ModelName>({
  name: { type: String, required: true },
});

const ModelNameModel = model<ModelName>('ModelName', schema);

export default ModelNameModel;
