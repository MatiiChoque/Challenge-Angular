export class Doctor {
  id: number;
  nombre: string;
  email: string;
  ubicacion: string;
  empresa: string;
  estadoDePago: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.email = '';
    this.ubicacion = '';
    this.empresa = '';
    this.estadoDePago = '';
  }
}
