import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { API_URL } from './json-placeholder.constants';
import { JSONPlaceholderResponse } from './json-placeholder.model';

@Injectable()
export class JsonplaceholderService {
  constructor(private readonly httpService: HttpService) {}

  getAll(): Observable<AxiosResponse<JSONPlaceholderResponse[]>> {
    return this.httpService.get(API_URL.posts);
  }

  getOne(id: number): Observable<AxiosResponse<JSONPlaceholderResponse>> {
    return this.httpService.get(API_URL.posts + id);
  }
}
