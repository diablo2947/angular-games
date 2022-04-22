import { Component, OnInit } from '@angular/core';
import { gameDto } from '../data/gameDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void{
    this.gamesReleasedThisYear = [
      {
        title : "God Of war",
        coverUri: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
        rating: 5,
        releaseDate: new Date("2018-04-01")
      },
      {
        title : "Witcher",
        coverUri: "https://m.media-amazon.com/images/M/MV5BMTBlMDk3MDktZTFkZC00YjkzLTkwMWUtYmRlNjYwMzJmNzRmXkEyXkFqcGdeQXVyOTQxNzM2MjY@._V1_.jpg",
        rating: 5,
        releaseDate: new Date("2015-04-01")
      }
    ];

    this.gamesComingSoon = [
      
    ]
  }
  title: string;

  titleChange(event: EventTarget) {
    this.title = (event as HTMLTextAreaElement).value;
  }

  gamesReleasedThisYear : gameDto[];
  gamesComingSoon : gameDto[];

}
