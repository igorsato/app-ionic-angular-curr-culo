import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Work } from '../../app/models/work';
import { ProfessionalDetailsService } from '../../app/services/professional-details.service';

@Component({
  selector: 'page-professional-details',
  templateUrl: 'professional-details.html',
  providers: [ProfessionalDetailsService]
})
export class ProfessionalDetails implements OnInit{

  public works: Work[];
 
  constructor(public navCtrl: NavController, public workService: ProfessionalDetailsService) {}

  ngOnInit() {
    this.works = this.workService.getWork();
  }

}
