import { gallery, galleryList } from './../../core/work-gallery-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gallery: galleryList[];
  constructor() {
    this.gallery = gallery;
   }

  ngOnInit(): void {
  }

}
