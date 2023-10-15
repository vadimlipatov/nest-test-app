import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonPlaceholderModule } from './json-placeholder/json-placeholder.module';

@Module({
  imports: [JsonPlaceholderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
