import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

}
