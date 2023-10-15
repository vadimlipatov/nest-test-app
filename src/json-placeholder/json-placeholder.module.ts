import { Module } from '@nestjs/common';
import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [JsonPlaceholderService],
  imports: [HttpModule],
  exports: [JsonPlaceholderService],
})
export class JsonPlaceholderModule {}
