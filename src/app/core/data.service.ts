import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Player } from './models/match';
import { RecentMatch } from './models/recent';
import { Deaths } from './models/shade';
import { Hero } from './models/hero';

// Services
import { LocalstorageService } from './localstorage.service';
import { tap } from 'rxjs/operators';

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

  playerList: Array<Player> = [];

  constructor(private http: HttpClient, private storage: LocalstorageService) { }

  getPlayerProfile = (accountID: number) => {
    const playerProfile = localStorage.getItem(`${accountID}-player`);
    if (playerProfile) { return this.storage.retrieve(`${accountID}-player`); }

    return this.http.get<Player>(`${this.url}/players/${accountID}`)
      .pipe(tap(data => this.storage.save(`${accountID}-player`, data)));
  }

  getRecentMatches = (accountID: number) => {
    const recentMatches = localStorage.getItem(`${accountID}-matches`);
    if (recentMatches) { return this.storage.retrieve(`${accountID}-matches`); }

    return this.http.get<Array<RecentMatch>>(`${this.url}/players/${accountID}/recentMatches?`)
      .pipe(tap(data => this.storage.save(`${accountID}-matches`, data)));
  }

  getMatchWithMostDeaths = (accountID: number) => this.http.get<Deaths[]>(`${this.url}/players/${accountID}/matches?sort=deaths&limit=1`);
  getAllHeroes = () => this.http.get<Array<Hero>>('https://api.opendota.com/api/heroes');
}
