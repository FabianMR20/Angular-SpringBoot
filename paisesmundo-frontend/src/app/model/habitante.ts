//import { Habitante } from './habitante';
import { Pais } from './pais';


export interface Habitante {
  idhabitante: number;
  usuario : string;
  contraseña : string;
  fechanac : string;
  nombre : string;
  apellido : string;
  telefono : string;
  idpais : Pais;
}
