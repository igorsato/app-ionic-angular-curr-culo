import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Course } from '../../app/models/course';
import { EducationLevelService } from '../../app/services/education-level.service';

@Component({
  selector: 'page-education-level',
  templateUrl: 'education-level.html',
  providers: [EducationLevelService]
})
export class EducationLevel implements OnInit{

  public courses: Course[];

  constructor(public navCtrl: NavController, public courseService: EducationLevelService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
