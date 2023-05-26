import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Client } from '../../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  DataBaseLink:string = "you-dataBase-Link";

  constructor(private http: HttpClient) { }

  deleteClient(id:string): void {
    this.http.delete(this.DataBaseLink+"clients/"+id+".json")
    .subscribe( (res)=>{
      console.log(res);
    })
  }
  ajouterUnClient(Client: {nom:string,prenom:string,adresse:string}): void {
    this.http.post<{name: string}>(this.DataBaseLink+"clients.json",Client)
    .subscribe( (res)=>{
      console.log(res);
    })

  }
  fetchClients() {
    return this.http.get<{[key: string]: Client}>(this.DataBaseLink+"clients.json")
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
    this.http.put(this.DataBaseLink+"clients/"+id+".json",value)
    .subscribe();

  }
  
}
