import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) {}

  public getInfo = param => {
      return this.http.get<string>(`/url?param=${param}`);
  }
}
