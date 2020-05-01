import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import { AppService } from '../app.service';
import { MissionDetailPage } from './mission-detail/mission-detail.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  missions: any[] = [];
  constructor(private appService: AppService,
              public modalController: ModalController,
              private router: Router,
              private loadingController: LoadingController) { }
  ngOnInit() {
    this.appService.fetchMissions()
    .subscribe(data => {
      console.log('missions will arrive .....');
      console.log(data);
      this.missions = data;
    });

}
async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    duration: 200
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}
async presentModal(mission: any) {

  const modal = await this.modalController.create({
    component: MissionDetailPage,
    componentProps:  {
      missionInfo: mission
    }
  });
  return await modal.present();
}
goToMap(missionId: string) {
  console.log(missionId);
  this.router.navigateByUrl('map/' + missionId);
}
}