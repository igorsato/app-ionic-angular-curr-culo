import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../app/models/person';
import { PersonalDetailsService } from '../../app/services/personal-details.service';

@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
  providers: [PersonalDetailsService]
})
export class PersonalDetails implements OnInit{

  public person: Person;

  constructor(public navCtrl: NavController, public pdService: PersonalDetailsService) {}

  ngOnInit() {
    this.person = this.pdService.getPerson();
  }

}
