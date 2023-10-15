import { Module } from '@nestjs/common';
import { JsonplaceholderService } from './json-placeholder.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  providers: [JsonplaceholderService],
  imports: [HttpModule],
  exports: [JsonplaceholderService],
})
export class JsonplaceholderModule {}
