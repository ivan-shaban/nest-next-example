import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const dev = true;
// const dev = process.env.NODE_ENV === 'development';

console.log(
  `>> dev ${JSON.stringify(process.env.NODE_ENV === 'development', null, 4)}`,
);

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev }),
      /* null means that nest-next
              should look for pages in root dir */
      { viewsDir: null },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
