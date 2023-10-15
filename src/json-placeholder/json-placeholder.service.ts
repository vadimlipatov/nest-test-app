import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { API_URL } from './json-placeholder.constants';
import { JSONPlaceholderResponse } from './json-placeholder.model';

@Injectable()
export class JsonPlaceholderService {
  constructor(private readonly httpService: HttpService) {}

  async getAll(): Promise<AxiosResponse<JSONPlaceholderResponse[]>> {
    const { data } = await this.httpService.axiosRef.get(API_URL.posts);
    return data;
  }

  async getOne(id: number): Promise<AxiosResponse<JSONPlaceholderResponse>> {
    const { data } = await this.httpService.axiosRef.get(API_URL.posts + id);
    return data;
  }
}
