// Generated by https://quicktype.io

export interface Match {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: null;
  cluster: number;
  cosmetics: null;
  dire_score: null;
  dire_team_id: null;
  draft_timings: null;
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: null;
  picks_bans: null;
  positive_votes: number;
  radiant_gold_adv: null;
  radiant_score: null;
  radiant_team_id: null;
  radiant_win: boolean;
  radiant_xp_adv: null;
  skill: null;
  start_time: number;
  teamfights: null;
  tower_status_dire: number;
  tower_status_radiant: number;
  version: null;
  players: Player[];
  patch: number;
  region: number;
}

export interface Player {
  match_id: number;
  player_slot: number;
  ability_targets: null;
  ability_upgrades_arr: null;
  ability_uses: null;
  account_id: number | null;
  actions: null;
  additional_units: null;
  assists: number;
  backpack_0: null;
  backpack_1: null;
  backpack_2: null;
  buyback_log: null;
  camps_stacked: null;
  connection_log: null;
  creeps_stacked: null;
  damage: null;
  damage_inflictor: null;
  damage_inflictor_received: null;
  damage_taken: null;
  damage_targets: null;
  deaths: number;
  denies: number;
  dn_t: null;
  firstblood_claimed: null;
  gold: null;
  gold_per_min: number;
  gold_reasons: null;
  gold_spent: null;
  gold_t: null;
  hero_damage: null;
  hero_healing: null;
  hero_hits: null;
  hero_id: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  item_uses: null;
  kill_streaks: null;
  killed: null;
  killed_by: null;
  kills: number;
  kills_log: null;
  lane_pos: null;
  last_hits: number;
  leaver_status: number;
  level: number;
  lh_t: null;
  life_state: null;
  max_hero_hit: null;
  multi_kills: null;
  obs: null;
  obs_left_log: null;
  obs_log: null;
  obs_placed: null;
  party_id: null;
  party_size: null;
  performance_others: null;
  permanent_buffs: null;
  pings: null;
  pred_vict: null;
  purchase: null;
  purchase_log: null;
  randomed: null;
  repicked: null;
  roshans_killed: null;
  rune_pickups: null;
  runes: null;
  runes_log: null;
  sen: null;
  sen_left_log: null;
  sen_log: null;
  sen_placed: null;
  stuns: null;
  teamfight_participation: null;
  times: null;
  tower_damage: null;
  towers_killed: null;
  xp_per_min: number;
  xp_reasons: null;
  xp_t: null;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  cluster: number;
  lobby_type: number;
  game_mode: number;
  is_contributor: boolean;
  patch: number;
  region: number;
  isRadiant: boolean;
  win: number;
  lose: number;
  total_gold: number;
  total_xp: number;
  kills_per_min: number;
  kda: number;
  abandons: number;
  rank_tier: null;
  cosmetics: any[];
  benchmarks: Benchmarks;
  personaname?: string;
  name?: null;
  last_login?: null | string;
}

export interface Benchmarks {
  gold_per_min: { [key: string]: number };
  xp_per_min: { [key: string]: number };
  kills_per_min: { [key: string]: number };
  last_hits_per_min: { [key: string]: number };
  hero_damage_per_min: { [key: string]: number };
  hero_healing_per_min: { [key: string]: number };
  tower_damage: Lhten;
  stuns_per_min: { [key: string]: number };
  lhten: Lhten;
}

export interface Lhten {
  data: string;
}
