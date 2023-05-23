import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Voiture } from 'src/app/models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  deleteVoiture(id:string): void {
    this.http.delete("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/voitures/"+id+".json")
    .subscribe( (res)=>{
      console.log(res);
    })
  }
  ajouterUneVoiture(voiture: {type:string,marque:string,modele:string,puissance:number}): void {
    this.http.post<{name: string}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/voitures.json",voiture)
    .subscribe( (res)=>{
      console.log(res);
    })

  }
  fetchVoitures() {
    return this.http.get<{[key: string]: Voiture}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/voitures.json")
    .pipe(map((responseData) => {
      const VoituresArray :Voiture[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          VoituresArray.push({...responseData[key],id:key});
        }
      }
      return VoituresArray;
    }))
    

  }
  updateVoiture(id:string,value: {type:string,marque:string,modele:string,puissance:number}): void {
    this.http.put("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/voitures/"+id+".json",value)
    .subscribe();

  }
}
