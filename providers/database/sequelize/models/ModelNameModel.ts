import {
  Column, CreatedAt, Model, Table, UpdatedAt,
} from 'sequelize-typescript';
import { ModelName } from '../../../../models/ModelName';

@Table({ tableName: 'modelNames' })
export default class ModelNameModel extends Model implements ModelName {
  @Column
    name!: string;

  @CreatedAt
    createdAt!: Date;

  @UpdatedAt
    updatedAt!: Date;

  toEntity = () => {
    const example : ModelName = {
      name: this.name,
    };
    return example;
  };
}
