import {Injectable} from '@angular/core';
import {Target} from '../../app/models/target';

@Injectable()
export class TargetService{

  public target: 
    Target = new Target(
        'Desenvolvedor Ruby Jr.',
        '3.000,00',
        '6.500,00'
    );

    getTarget(){
      return this.target;
    }


  }