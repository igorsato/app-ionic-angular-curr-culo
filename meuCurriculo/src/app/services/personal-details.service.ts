import {Injectable} from '@angular/core';
import {Person} from '../../app/models/person';

@Injectable()
export class PersonalDetailsService{

  public person: 
    Person = new Person(
        'Igor de Oliveira Sato', 
        'October 27, 1989',
        'igor.sato@outlook.com',
        '(11) 97980-1015',
        'Campo Grande, São Paulo - SP', 
    );

    getPerson(){
      return this.person;
    }


  }