import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { API_URL } from './json-placeholder.constants';
import { JsonPlaceholderResponseDto } from './dto/json-placeholder.dto';

@Injectable()
export class JsonPlaceholderService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<AxiosResponse<JsonPlaceholderResponseDto[]>> {
    const { data } = await this.httpService.axiosRef.get(API_URL.posts);
    return data;
  }

  async findOne(
    id: number,
  ): Promise<AxiosResponse<JsonPlaceholderResponseDto>> {
    const { data } = await this.httpService.axiosRef.get(API_URL.posts + id);
    return data;
  }
}
