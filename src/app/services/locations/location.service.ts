import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  DataBaseLink:string = "you-dataBase-Link";

  constructor(private http: HttpClient) { }

  deleteLocation(id:string): void {
    this.http.delete(this.DataBaseLink+"locations/"+id+".json")
    .subscribe( (res)=>{
      console.log(res);
    })
  }
  ajouterUneLocation(location: {date_debut:Date,date_fin:Date, kilometrage_debut:number,kilometrage_fin:number,prix:number,voiture_id:string,client_id:string }): void {
    this.http.post<{name: string}>(this.DataBaseLink+"locations.json",location)
    .subscribe( (res)=>{
      console.log(res);
    })

  }
  fetchLocations() {
    return this.http.get<{[key: string]: Location}>(this.DataBaseLink+"locations.json")
    .pipe(map((responseData) => {
      const LocationsArray :Location[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          LocationsArray.push({...responseData[key],id:key});
        }
      }
      return LocationsArray;
    }))
    

  }
  updateLocation(id:string,value: {date_debut:Date,date_fin:Date, kilometrage_debut:number,kilometrage_fin:number,prix:number,voiture_id:string,client_id:string }): void {
    this.http.put(this.DataBaseLink+"locations/"+id+".json",value)
    .subscribe();

  }
}
