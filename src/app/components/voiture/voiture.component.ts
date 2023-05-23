import { Component } from '@angular/core';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  id : number = 0;
  type : string = "";
  marque : string = "";
  modele : string = "";
  puissance : number = 0;

  //getter and setter
  get id_(): number {
    return this.id;
  }
  set id_(id: number) {
    this.id = id;
  }
  get type_(): string {
    return this.type;
  }
  set type_(type: string) {
    this.type = type;
  }
  get marque_(): string {
    return this.marque;
  }
  set marque_(marque: string) {
    this.marque = marque;
  }
  get modele_(): string {
    return this.modele;
  }
  set modele_(modele: string) {
    this.modele = modele;
  }
  get puissance_(): number {
    return this.puissance;
  }
  set puissance_(puissance: number) {
    this.puissance = puissance;
  }
  

}
