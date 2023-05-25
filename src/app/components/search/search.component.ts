import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/clients/client.service';
import { LocationService } from 'src/app/services/locations/location.service';
import { VoitureService } from 'src/app/services/voitures/voiture.service';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/models/Client';
import { Location } from 'src/app/models/location';
import { Voiture } from 'src/app/models/voiture';
import { SearchService } from 'src/app/services/searchs/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  step:number = 1;
  table:string = "";
  champ: string = "";
  allLocations: Location[] = [];
  allClients: Client[] = [];
  allVoitures: Voiture[] = [];
  resultatClients: Client[] = [];
  resultatVoitures: Voiture[] = [];
  resultatLocation: Location[] = [];
  afficherResultatVoitures: boolean = false;
  afficherResultatClients: boolean = false;
  afficherResultatLocations: boolean = false;



  constructor(private clientService: ClientService,private voitureService: VoitureService,private locationService: LocationService,private searchService: SearchService ,private http:HttpClient ) { }
  ngOnInit(): void {
  }

  onSearch(search:{champ: string,table: string,valeur:string}): void{
    if(this.step == 1){
      this.table = search.table;
      this.step = 2;
    }else if(this.step == 2){
      this.champ = search.champ;
      this.step = 3;
    } else if( this.step == 3){
      if(this.table == "clients"){
        this.afficherResultatClients = true;
        this.clientService.fetchClients().subscribe((clients) => {
          this.allClients = clients;
        });
        this.resultatClients = this.searchService.searchFroClients(this.allClients,search.champ,search.valeur);
        
      }else if(this.table == "voitures"){
        this.afficherResultatVoitures = true;
        this.voitureService.fetchVoitures().subscribe((voitures) => {
          this.allVoitures = voitures;
        });
        this.resultatVoitures = this.searchService.searchForVoitures(this.allVoitures,search.champ,search.valeur);
        console.log(this.resultatVoitures);
        
      }else if(this.table == "locations"){
        this.locationService.fetchLocations().subscribe((locations) => {
          this.allLocations = locations;
        });
        for(let i =0;i<this.allLocations.length;i++){
          if(this.champ === "date_debut" ){
            if(String(this.allLocations[i].date_debut) == search.valeur){
              console.log("date_debut = "+this.allLocations[i].date_debut +" search.valeur = "+search.valeur);
              this.resultatLocation.push(this.allLocations[i])
            }
          }else if(this.champ === "date_fin"){
            if(String(this.allLocations[i].date_fin) == search.valeur){
              this.resultatLocation.push(this.allLocations[i])
            }
          }else if(this.champ === "kilometrage_debut"){
            if(String(this.allLocations[i].kilometrage_debut) == search.valeur){
              this.resultatLocation.push(this.allLocations[i])
            }
          }else if(this.champ === "kilometrage_fin"){
            if(String(this.allLocations[i].kilometrage_fin) == search.valeur){
              this.resultatLocation.push(this.allLocations[i])
            }
          }else if(this.champ === "prix"){
            if(String(this.allLocations[i].prix) == search.valeur){
              this.resultatLocation.push(this.allLocations[i])
            }
          }
          

        }
        this.afficherResultatLocations = true;
      }
    }
    

  }
    
}
