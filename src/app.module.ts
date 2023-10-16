import { Module } from '@nestjs/common';
import { JsonPlaceholderModule } from './json-placeholder/json-placeholder.module';

@Module({
  imports: [JsonPlaceholderModule],
})
export class AppModule {}
