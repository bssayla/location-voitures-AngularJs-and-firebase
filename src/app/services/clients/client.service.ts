import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Client } from '../../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  deleteClient(id:string): void {
    this.http.delete("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/clients/"+id+".json")
    .subscribe( (res)=>{
      console.log(res);
    })
  }
  ajouterUnClient(Client: {nom:string,prenom:string,adresse:string}): void {
    this.http.post<{name: string}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/clients.json",Client)
    .subscribe( (res)=>{
      console.log(res);
    })

  }
  fetchClients() {
    return this.http.get<{[key: string]: Client}>("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/clients.json")
    .pipe(map((responseData) => {
      const ClientsArray :Client[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          ClientsArray.push({...responseData[key],id:key});
        }
      }
      return ClientsArray;
    }))
    

  }
  updateClient(id:string,value: {nom:string,prenom:string,adresse:string}): void {
    this.http.put("https://projet-java-location-voitures-default-rtdb.europe-west1.firebasedatabase.app/clients/"+id+".json",value)
    .subscribe();

  }
}
