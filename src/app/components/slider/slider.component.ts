import { serList, serviceList } from './../../core/service-list';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()  serviceList: serList[];

  constructor() {
    this.serviceList = serviceList;
  }
  selectedIndex = 0;

  ngOnInit(): void {
  }

  onPrevClick():void {
    if (this.selectedIndex === 0){
      this.selectedIndex = this.serviceList.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  onNextClick():void {
    if (this.selectedIndex === this.serviceList.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}
