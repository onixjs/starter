import 'reflect-metadata';
import {HostBoot} from '@onixjs/core';
import {WSAdapter} from '@onixjs/core/dist/src/adapters/ws.adapter';
import * as path from 'path';
const config = require('../onixjs.config.json');
// Create a new HostBoot instance for our OnixJS Config
const boot: HostBoot = new HostBoot(config, {
  cwd: path.join(process.cwd(), 'dist'),
  port: 9000,
  adapters: {
    websocket: WSAdapter,
  },
});
// Run our OnixJS Context
boot.run().then(() => console.log('LOADED'), e => console.log(e));
