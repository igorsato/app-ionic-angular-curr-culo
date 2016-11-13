import {Injectable} from '@angular/core';
import {Course} from '../../app/models/course';

@Injectable()
export class EducationLevelService{

  public courses: 
    Course[] = [
        new Course(
            'Tecnologia em Análise e Desenvolvimento de Sistemas',
            'Superior Tecnólogo',
            'SENAC',
            '12/2017'
        ),
        new Course(
            'Administração de Empresas',
            'Superior Bacharelado',
            'UNIP',
            '12/2012'
        ),
        new Course(
            'Java e Orientação a Objetos',
            'Curso Livre',
            'CAELUM',
            '08/2016'
        ),
        new Course(
            'Introdução à Lógica de Programação',
            'Curso Livre',
            'Impacta',
            '09/2015'
        ),
        new Course(
            'Excel Nível II',
            'Curso Livre',
            'Impacta',
            '07/2015'
        )
    ];
    
    getCourses(){
      return this.courses;
    }


  }