import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  players: Player[] = [
    new Player("Joe Kramer", "PF", 25, 10, 1),
    new Player("Aaron Hanan", "PG", 17, 5, 2),
    new Player("Max Tilden", "C", 8, 14, 3),
    new Player("Drew Moreland", "SG", 5, 7, 4)
  ];

  goToPlayerPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
