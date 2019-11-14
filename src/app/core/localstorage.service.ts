import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  save = (key: string, value: object) => localStorage.setItem(key, JSON.stringify(value));
  retrieve = (key: string) => of(JSON.parse(localStorage.getItem(key)));
  clear = () => localStorage.clear();
}
