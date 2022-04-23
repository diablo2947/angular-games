import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gameDto } from 'src/app/data/gameDto';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  saveChanges(gameDto: gameDto) {
    console.log(gameDto.title);
    this.router.navigate(['/games']);
  }
}