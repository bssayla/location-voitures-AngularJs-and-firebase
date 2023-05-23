import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  deleteLocation(id:string): void {
    this.http.delete("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/locations/"+id+".json")
    .subscribe( (res)=>{
      console.log(res);
    })
  }
  ajouterUneLocation(location: {date_debut:Date,date_fin:Date, kilometrage_debut:number,kilometrage_fin:number,prix:number,voiture_id:string,client_id:string }): void {
    this.http.post<{name: string}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/locations.json",location)
    .subscribe( (res)=>{
      console.log(res);
    })

  }
  fetchLocations() {
    return this.http.get<{[key: string]: Location}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/locations.json")
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
    this.http.put("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/locations/"+id+".json",value)
    .subscribe();

  }
}
