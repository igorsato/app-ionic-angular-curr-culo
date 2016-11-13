import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Target } from '../../app/models/target';
import { TargetService } from '../../app/services/targets.service';

@Component({
  selector: 'page-targets',
  templateUrl: 'targets.html',
  providers: [TargetService]
})
export class Targets implements OnInit{

    public target: Target;

  constructor(public navCtrl: NavController, public t: TargetService) {}

  ngOnInit() {
    this.target = this.t.getTarget();
  }

}
