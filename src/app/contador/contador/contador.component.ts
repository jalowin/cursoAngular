import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <span>{{ numero }}</span>
    <br>
    <button (click)="acumular(base)">+{{base}}</button>
    <button (click)="acumular(-base)">-{{base}}</button>
  `
})

export class ContadorComponent {

  title: string = 'Contador App';

  numero: number = 10;

  base: number = 5;


  acumular( valor: number){
    this.numero += valor;
  }

}
