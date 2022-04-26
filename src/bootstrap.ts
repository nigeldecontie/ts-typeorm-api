import 'dotenv/config';
import 'reflect-metadata';

// console.log('why god');
// console.log(__dirname);
// console.log(process.cwd());
// console.log(process.env.NODE_PATH);

import { App } from './web/application';

export async function bootstrap() {
  new App();
}

bootstrap();
