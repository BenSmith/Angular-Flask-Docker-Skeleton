import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Hands } from "../hands";
import { HandService } from "../hand.service";


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  players: Players = [
    {id: 0, name: 'Alice', hand: 'a'},
    {id: 1, name: 'Bob', hand: 'b'},
    ];
  hands: Hands;
  winner: number = -1;
  constructor(private handService: HandService) { }

  setHands(newhands): void {
    console.debug(newhands);
    this.winner = newhands.winner;
    this.players[0].hand = newhands.hands[0];
    this.players[1].hand = newhands.hands[1];
  }
  getHands(): void {
    this.handService.getHands()
      .subscribe(newhands => this.setHands(newhands));
  }

  getNewHand(): void {
    this.getHands();
  }

  ngOnInit() {
    this.getHands();
  }

}
type Players = Array<Player>;
