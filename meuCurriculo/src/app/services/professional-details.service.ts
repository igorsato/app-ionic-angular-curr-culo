import {Injectable} from '@angular/core';
import {Work} from '../../app/models/work';

@Injectable()
export class ProfessionalDetailsService{

  public works: 
    Work[] = [
        new Work(
            'Axpe Consulting',
            'Analista de Dados',
            '08/2016',
            'Atual'
        ),
        new Work(
            'Spread Tecnologia',
            'Assistente de Projetos',
            '04/2015',
            '07/2016'
        ),
        new Work(
            'Banco Santander Brasil S/A',
            'Caixa',
            '08/2010',
            '01/2015'
        ),
        new Work(
            'Ledier Storer Corretora de Seguros Ltda',
            'Estagiário',
            '04/2009',
            '04/2010'
        )
    ];

    getWork(){
      return this.works;
    }


  }