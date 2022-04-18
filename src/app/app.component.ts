import { Component} from '@angular/core';
import { gameDto } from './data/gameDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void{
    this.gamesReleasedThisYear = [
      {
        title : "God Of war",
        coverUri: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
        rating: 5,
        releaseDate: new Date("2022-04-01")
      }
    ];
  }
  gamesReleasedThisYear : [gameDto];
  gamesComingSoon : [gameDto];
}
