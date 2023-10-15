import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonplaceholderService } from './json-placeholder/json-placeholder.service';
import { JsonplaceholderModule } from './json-placeholder/json-placeholder.module';
import { HttpService } from '@nestjs/axios';

@Module({
  imports: [JsonplaceholderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
