import {Component, IComponent, AllowEveryone, RPC, Stream} from '@onixjs/core';
import {EventEmitter} from 'events';
/**
 * @class ExampleComponent
 * @description The following is a basic example
 * of an example component
 */
@Component({
  acl: [AllowEveryone],
})
export class ExampleComponent implements IComponent {
  /**
   * @prop emitter
   * @description Example event emmiter to demostrate
   * how to stream data in real-time.
   * HINT: Not for production purposes, use redis or mongodb
   * pubsub instead of EventEmitter.
   */
  private emmiter: EventEmitter = new EventEmitter();
  /**
   * @method init
   * @description The init method will be executed
   * when the framework is ready.
   */
  init(): void {
    this.emmiter.setMaxListeners(0);
    console.log('Example Component is Alive');
  }
  /**
   * @method destroy
   * @description The destroy method will be executed
   * when the framework is about to stop.
   */
  destroy(): void {
    this.emmiter.removeAllListeners();
  }
  /**
   * @method endpoint
   * @description A simple RPC Method that will return
   * the received payload
   */
  @RPC()
  async endpoint(payload) {
    this.emmiter.emit('data', payload);
    return payload;
  }
  /**
   * @method streamer
   * @description A simple stream method that will stream
   * the data collected from the exposed endpoint
   */
  @Stream()
  async streamer(stream) {
    this.emmiter.on('data', stream);
  }
}
