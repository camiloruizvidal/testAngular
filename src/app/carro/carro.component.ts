import { CarrosService } from './../services/carros.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {



  public color: string = "rojo";
  public capacidadPasajeros: Number = 5;
  public pasajerosABordo: Array<{_id:string, nombrePasajeros: string}> = [];

  public nombrePasajero: string = '';

  constructor(private carroService: CarrosService) { }

  ngOnInit(): void {
    this.listarPasajeros();
  }

  siEnciendeMotor(): boolean {
    return true;
  }

  registrarNombrePasajero(): void {
    this.carroService.guardarPasajero(this.nombrePasajero)
      .subscribe(response =>{
        this.nombrePasajero = '';
        this.listarPasajeros();
      })
  }

  listarPasajeros(): void {
    this.carroService.listarPasajeros()
      .subscribe(response => {
        this.pasajerosABordo = response;
      })
  }

}
