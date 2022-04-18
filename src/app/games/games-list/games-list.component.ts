import { Component, OnInit, Input } from '@angular/core';
import { gameDto } from 'src/app/data/gameDto';

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
  games : [gameDto];

}
