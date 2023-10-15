import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonplaceholderModule } from './json-placeholder/json-placeholder.module';

@Module({
  imports: [JsonplaceholderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
