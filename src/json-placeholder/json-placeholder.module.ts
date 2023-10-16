import { Module } from '@nestjs/common';
import { JsonPlaceholderService } from './json-placeholder.service';
import { HttpModule } from '@nestjs/axios';
import { JsonPlaceholderController } from './json-placeholder.controller';

@Module({
  providers: [JsonPlaceholderService],
  imports: [HttpModule],
  controllers: [JsonPlaceholderController],
})
export class JsonPlaceholderModule {}
