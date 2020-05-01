import { Component, OnInit } from '@angular/core';
import { DroneService } from '../drone.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  droneList = [];
  constructor(private droneService: DroneService) {}
  ngOnInit() {
    this.droneService.getDrones()
    .subscribe((data) => {
      this.droneList = data;
      console.log(data);
    });
    }
}
