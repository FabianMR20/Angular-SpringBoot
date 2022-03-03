import { Pais } from './pais';

export class Habitante {
  idhabitante: number;
  usuario: string;
  contraseña: string;
  fechanac: string;
  nombre: string;
  apellido: string;
  telefono: string;
  idpais: Pais;
}
