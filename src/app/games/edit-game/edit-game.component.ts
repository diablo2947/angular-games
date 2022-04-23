import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { gameDto } from 'src/app/data/gameDto';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  saveChanges(gameDto: gameDto) {
    console.log(gameDto.title);
    this.router.navigate(['/games']);
  }

  model: gameDto = {
    title: 'default',
    coverUri: '',
    releaseDate: new Date(),
    rating: 0
  };

}
