import { workBranding, brandingList } from './../../core/work.branding-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  workBranding : brandingList []
  constructor() {
    this.workBranding = workBranding;
   }

  ngOnInit(): void {
  }

}
