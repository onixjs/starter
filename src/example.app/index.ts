import {SOAService, Application} from '@onixjs/core';
import {ExampleModule} from './example.module';
/**
 * @class ExampleApp
 * @description A simple example of a SOA Application/Service
 * installing a simple ExampleModule
 */
@SOAService({
  modules: [ExampleModule],
})
export class ExampleApp extends Application {}
