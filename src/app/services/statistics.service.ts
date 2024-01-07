import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../models/statistics/statistics';
import { SingleResponseModel } from '../models/singleResponeModel';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  apiUrl = 'https://localhost:7029/api/';

  constructor(private httpClient: HttpClient) {}

  getAllStatistics(): Observable<SingleResponseModel<Statistics>> {
    let newPath = this.apiUrl + 'statistics/getall';
    return this.httpClient.get<SingleResponseModel<Statistics>>(newPath);
  }
}
