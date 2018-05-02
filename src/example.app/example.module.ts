import {Module} from '@onixjs/core';
import {ExampleComponent} from './example.component';
import {ExampleModel} from './example.model';
/**
 * @class ExampleModule
 * @description A simple example of a module installing
 * an example component and model.
 */
@Module({
  components: [ExampleComponent],
  models: [ExampleModel],
  services: [],
  renderers: [],
})
export class ExampleModule {}
