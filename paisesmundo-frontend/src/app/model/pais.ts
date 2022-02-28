import { Continente } from './continente';
//import { Pais } from './pais';

export interface  Pais {
  idpais: number;
  capitalpais: string;
  codTel : string;
  iso2 : string;
  iso3 : string;
  continente : Continente;
}
