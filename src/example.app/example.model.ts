import {Model, IModel, Property} from '@onixjs/core';
import {MongooseDatasource} from './mongo.datasource';
/**
 * @class ExampleModel
 * @description A simple model implementing a mongoose
 * datasource.
 */
@Model({
  datasource: MongooseDatasource,
})
export class ExampleModel implements IModel {
  /**
   * @prop text
   * @description A property passing mongoose specific
   * configurations through the @Property decorator.
   */
  @Property({
    type: String,
    require: true,
  })
  text: string;
}
