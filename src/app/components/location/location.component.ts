import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/models/Client';
import { Location } from 'src/app/models/location';
import { Voiture } from 'src/app/models/voiture';
import { ClientService } from 'src/app/services/clients/client.service';
import { LocationService } from 'src/app/services/locations/location.service';
import { VoitureService } from 'src/app/services/voitures/voiture.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  
  currentLocationId:string;
  allLocations: Location[] = [];
  allClients: Client[] = [];
  allVoitures: Voiture[] = [];
  isFetching: boolean= false;
  editMode: boolean = false;
  @ViewChild ('locationsForm') productForm: NgForm;


  //consturctor
  constructor(private locationSevice: LocationService,private clientsSevice: ClientService,private voituresSevice: VoitureService )  {

   }



  

  ngOnInit(): void {
    this.fetchLocations();
    this.fetchClients();
    this.fetchVoitures();
  }

  onLocationsFetch(): void{
    this.fetchLocations();
    this.editMode = false;
    this.productForm.reset();

  }
  fetchClients():void {
    this.clientsSevice.fetchClients().subscribe((clients) => {
      this.allClients = clients;
    });
  }
  fetchVoitures():void {
    this.voituresSevice.fetchVoitures().subscribe((voitures) => {
      this.allVoitures = voitures;
    });
  }
  onDeleteLocation(id: string): void{
    this.locationSevice.deleteLocation(id);
    
  }
  onAddLocation(location: {date_debut:Date,date_fin:Date, kilometrage_debut:number,kilometrage_fin:number,prix:number,voiture_id:string,client_id:string }): void{
    if(!this.editMode){
      this.locationSevice.ajouterUneLocation(location);
    }else{
      this.locationSevice.updateLocation(this.currentLocationId,location);
    }
  }
  onEditLocation(id:string): void{
    //get the location based on id
    this.currentLocationId = id;
    console.log(id);
    let currentLocation: Location = this.allLocations.find((location) => location.id === id) as Location;

    //set the form values
    this.productForm.setValue({
      date_debut: currentLocation.date_debut,
      date_fin: currentLocation.date_fin,
      kilometrage_debut: currentLocation.kilometrage_debut,
      kilometrage_fin: currentLocation.kilometrage_fin,
      prix: currentLocation.prix,
      voiture_id: currentLocation.voiture_id,
      client_id: currentLocation.client_id

      
    });
    //change the value of the button to say update
    this.editMode = true;

  }
  private fetchLocations(): void{
    this.isFetching = true;
    this.locationSevice.fetchLocations().subscribe((locations) => {
      this.isFetching = false;
      this.allLocations = locations;
    });
  }
  


}
