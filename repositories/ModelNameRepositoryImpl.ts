import { dynamoProvider, helper } from 'core';
import { getAwsSecretValue } from 'get-env';
import { ModelName } from '../models/ModelName';
import { ModelNameRepository } from './interfaces/ModelNameRepository';
import { MODEL_NAME_COUNTER_INDEX, MODEL_NAME_INDEX, TENANT_INDEX } from '../utils/constants';

export default class ModelNameRepositoryImpl implements ModelNameRepository {
  /**
   * Lists all modelNames for the specified tenant.
   *
   * @param tenantId - The ID of the tenant.
   * @returns A Promise that resolves to an array of modelNames.
   */
  async list(tenantId: string): Promise<ModelName[]> {
    return dynamoProvider.query({
      TableName: await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      KeyConditionExpression: 'pk = :pk',
      ExpressionAttributeValues: {
        ':pk': `${TENANT_INDEX}#${tenantId}#${MODEL_NAME_INDEX}`,
      },
    });
  }

  /**
   * Retrieves a modelName by its ID and tenant ID.
   *
   * @param tenantId - The ID of the tenant.
   * @param id - The ID of the modelName.
   * @returns A Promise that resolves to the retrieved modelName, or undefined if not found.
   */
  async get(tenantId: string, id: string): Promise<ModelName | undefined> {
    return dynamoProvider.getItem<ModelName>(
      await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      `${TENANT_INDEX}#${tenantId}#${MODEL_NAME_INDEX}`,
      id,
    );
  }

  /**
   * Creates a new modelName for the specified tenant.
   *
   * @param tenantId - The ID of the tenant.
   * @param modelName - The modelName object to create.
   * @returns A Promise that resolves to the created modelName.
   */
  async create(tenantId: string, modelName: ModelName): Promise<ModelName> {
    await dynamoProvider.putItem(
      await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      `${TENANT_INDEX}#${tenantId}#${MODEL_NAME_INDEX}`,
      `${modelName.code}`, // TODO: Change this sk
      modelName,
    );
    return modelName;
  }

  /**
   * Updates a modelName for the specified tenant.
   *
   * @param tenantId - The ID of the tenant.
   * @param id - The ID of the modelName to update.
   * @param modelName - The partial modelName object with the updated fields.
   * @returns A Promise that resolves to the updated modelName.
   */
  async update(tenantId: string, id: string, modelName: Partial<ModelName>): Promise<ModelName> {
    const expressionNamesAndValues = helper.generateUpdateExpressionNamesAndValues(modelName);
    const result = await dynamoProvider.rawUpdateItem({
      TableName: await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      Key: {
        pk: `${TENANT_INDEX}#${tenantId}#${MODEL_NAME_INDEX}`,
        sk: `${id}`,
      },
      UpdateExpression: helper.generateUpdateExpression(modelName),
      ReturnValues: 'ALL_NEW',
      ExpressionAttributeValues: expressionNamesAndValues.values,
      ExpressionAttributeNames: expressionNamesAndValues.names,
    });
    return result.Attributes as ModelName;
  }

  /**
   * Deletes a modelName for the specified tenant.
   *
   * @param tenantId - The ID of the tenant.
   * @param id - The ID of the modelName to delete.
   * @returns A Promise that resolves when the deletion is complete.
   */
  async delete(tenantId: string, id: string): Promise<void> {
    await dynamoProvider.deleteItem(
      await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      `${TENANT_INDEX}#${tenantId}#${MODEL_NAME_INDEX}`,
      `${id}`,
    );
  }

  /**
   * Generates a modelName code for the specified tenant.
   *
   * @param tenantId - The ID of the tenant.
   * @returns A Promise that resolves to the generated modelName code.
   */
  async generateId(tenantId: string): Promise<string> {
    const code = await helper.generateCode(
      await getAwsSecretValue('DYNAMO_TRAVEL_TABLE'),
      `${TENANT_INDEX}#${tenantId}`,
      MODEL_NAME_COUNTER_INDEX,
    );
    return code.toString();
  }
}
