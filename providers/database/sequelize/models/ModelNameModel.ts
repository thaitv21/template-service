import { Column, Model, Table } from 'sequelize-typescript';
import { ModelName } from '../../../../models/ModelName';

@Table({ tableName: 'tours' })
export default class TourModel extends Model implements ModelName {
  @Column
    name!: string;

  @Column
    date!: Date;

  toEntity = () => {
    const example : ModelName = {
      name: this.name,
    };
    return example;
  };
}
