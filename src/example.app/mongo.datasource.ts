import {DataSource, IDataSource, IModelRegister} from '@onixjs/core';
import {Mongoose} from 'mongoose';
/**
 * @class MongooseDatasource
 * @description A simple datasource example, integrating
 * Mongoose ORM.
 */
@DataSource()
export class MongooseDatasource implements IDataSource {
  /**
   * @prop mongoose
   * @description A mongoose instance accessible within the
   * MongooseDatasource Class Instance.
   */
  private mongoose: Mongoose = new Mongoose();
  /**
   * @method connect
   * @description A simple example to connect to a MongoDB
   * database, uses whatever the ORM states in their documentation.
   */
  async connect() {
    return this.mongoose.connect('mongodb://user:pass@127.0.0.1:27017/db');
  }
  /**
   * @method disconnect
   * @description A simple example to discconnect from a MongoDB
   * database, uses whatever the ORM states in their documentation.
   */
  async disconnect() {
    return this.mongoose.disconnect();
  }
  /**
   * @method register
   * @param Class
   * @param model
   * @param schema
   * @description This method will register a given model,
   * each model using this datasource will be passed through this
   * method. Create the instance according the ORM documentation.
   */
  async register(register: IModelRegister) {
    register.model = this.mongoose.model(register.class.name, register.schema);
    return register;
  }
}
