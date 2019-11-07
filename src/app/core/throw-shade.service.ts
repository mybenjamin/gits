import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deaths } from './models/shade';

@Injectable({
  providedIn: 'root'
})
export class ThrowShadeService {
  url = 'https://api.opendota.com/api/players/';
  constructor(private http: HttpClient) { }

  mostDeaths = (id: number) => this.http.get<Deaths>(`${this.url}${id}/matches?sort=deaths&limit=1`);
}