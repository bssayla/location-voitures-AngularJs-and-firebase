import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  date_debut : Date = new Date();
  date_fin : Date = new Date();
  kilometrage_debut : number = 0;
  kilometrage_fin : number = 0;
  prix : number = 0;


  //getter and setter
  get date_debut_(): Date {
    return this.date_debut;
  }
  set date_debut_(date_debut: Date) {
    this.date_debut = date_debut;
  }
  get date_fin_(): Date {
    return this.date_fin;
  }
  set date_fin_(date_fin: Date) {
    this.date_fin = date_fin;
  }
  get kilometrage_debut_(): number {
    return this.kilometrage_debut;
  }
  set kilometrage_debut_(kilometrage_debut: number) {
    this.kilometrage_debut = kilometrage_debut;
  }
  get kilometrage_fin_(): number {
    return this.kilometrage_fin;
  }
  set kilometrage_fin_(kilometrage_fin: number) {
    this.kilometrage_fin = kilometrage_fin;
  }
  get prix_(): number {
    return this.prix;
  }
  set prix_(prix: number) {
    this.prix = prix;
  }
  


}
