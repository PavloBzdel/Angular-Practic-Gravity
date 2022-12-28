import { profile, profList } from './../../core/profile-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() profile: profList[];
  constructor() {
    this.profile = profile;
   }

   selectedIndex = 0
  ngOnInit(): void {
  }
  onPrevClick():void {
    if (this.selectedIndex === 0){
      this.selectedIndex = this.profile.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void {
    if (this.selectedIndex === this.profile.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
