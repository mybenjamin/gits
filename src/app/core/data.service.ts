import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Player } from './models/match';
import { RecentMatch } from './models/recent';
import { Deaths } from './models/shade';
import { Hero } from './models/hero';

// Services
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://api.opendota.com/api';
  players = [
    { id: 146655393, name: 'Benjee' },
    { id: 134484246, name: 'Mellow' },
    { id: 175322242, name: 'ZOID' },
    { id: 103359047, name: 'UdieMonkey' },
    { id: 91262453, name: 'i_also_use_hax' },
    { id: 117730952, name: 'AWdC' },
    { id: 107039798, name: '[Æ]Vortex' }
  ];

  constructor(private http: HttpClient, private storage: LocalstorageService) { }

  getPlayerProfile = (accountID: number) => {
    const playerProfile = this.storage.retrieve(`${accountID}-player`);
    if (playerProfile) { return playerProfile; }
    this.http.get<Player>(`${this.url}/players/${accountID}`).subscribe(res => this.storage.save(`${accountID}-player`, res));
    return this.storage.retrieve(`${accountID}-player`);
  }
  getRecentMatches = (accountID: number) => {
    this.http.get<Array<RecentMatch>>(`${this.url}/players/${accountID}/recentMatches?`);
  }
  getMatchWithMostDeaths = (accountID: number) => this.http.get<Deaths[]>(`${this.url}/players/${accountID}/matches?sort=deaths&limit=1`);
  getAllHeroes = () => this.http.get<Array<Hero>>('https://api.opendota.com/api/heroes');
}
