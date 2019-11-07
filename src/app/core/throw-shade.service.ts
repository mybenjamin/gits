import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shade } from './models/shade';

@Injectable({
  providedIn: 'root'
})
export class ThrowShadeService {
  url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
  constructor(private http: HttpClient) { }

  throwShade = () => this.http.get<Shade>(this.url);
}
