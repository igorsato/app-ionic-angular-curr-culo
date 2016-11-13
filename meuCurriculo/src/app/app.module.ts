import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PersonalDetails } from '../pages/personal-details/personal-details';
import { Targets } from '../pages/targets/targets';
import { EducationLevel } from '../pages/education-level/education-level';
import { ProfessionalDetails } from '../pages/professional-details/professional-details';

@NgModule({
  declarations: [
    MyApp,
    PersonalDetails,
    Targets,
    EducationLevel,
    ProfessionalDetails
  ],

  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PersonalDetails,
    Targets,
    EducationLevel,
    ProfessionalDetails
  ],
  
  providers: []
})
export class AppModule {}
