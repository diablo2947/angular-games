import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.arrRating = Array(this.maxRating).fill(0);
  }

  @Input()
  maxRating: number = 5;
  
  currentRating: number = 0;

  previousRating: number = 0;

  clickedRating: number = 0;

  arrRating: number[] = [];

  handleMouseEnter(index: number) {
    this.currentRating = index + 1;
  }

  handleMouseLeave() {
    this.currentRating = this.clickedRating;
  }

  handleMouseClick(index: number) {
    this.clickedRating = index + 1;
  }
}
