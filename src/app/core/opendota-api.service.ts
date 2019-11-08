import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './models/player';
import { RecentMatch } from './models/recent';
import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})
export class OpendotaApiService {
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
  constructor(private http: HttpClient) { }

  getPlayerData = (id: number) => this.http.get<Player>(`${this.url}/players/${id}`);
  getPlayers = () => this.players;
  getHeroes = () => this.http.get<Array<Hero>>('https://api.opendota.com/api/heroes');
  getRecentMatches = (playerId: number) => this.http.get<Array<RecentMatch>>(`${this.url}/players/${playerId}/recentMatches?`);
}
