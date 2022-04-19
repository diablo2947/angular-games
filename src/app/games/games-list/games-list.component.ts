import { Component, OnInit, Input } from '@angular/core';
import { gameDto } from 'src/app/data/gameDto';
import { GenericListComponent } from 'src/app/utilities/generic-list/generic-list.component';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  games: gameDto[];
  
  remove(index: number) {
    this.games.splice(index,1)
  }

}
