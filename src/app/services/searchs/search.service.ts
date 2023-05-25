import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Voiture } from 'src/app/models/voiture';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchFroClients(allClients: Client[], champ: string, valeur: string): Client[] {
      let resultatClients: Client[] = [];
      for(let i =0;i<allClients.length;i++){
        if(champ === "nom" ){
         if(allClients[i].nom == valeur){
            resultatClients.push(allClients[i])
          }
        }else if(champ === "prenom"){
          if(allClients[i].prenom == valeur){
            resultatClients.push(allClients[i])
          }
        }else if(champ === "adresse"){
          if(allClients[i].adresse == valeur){
            resultatClients.push(allClients[i])
          }
        }
      

      }
      return resultatClients;
    }
    searchForVoitures(allVoitures: Voiture[], champ: string, valeur: string): Voiture[] {
      let resultatVoitures: Voiture[] = [];
      for(let i =0;i<allVoitures.length;i++){
        if(champ === "marque" ){
          if(allVoitures[i].marque === valeur){
            resultatVoitures.push(allVoitures[i])
          }
        }else if(champ === "modele"){
          if(allVoitures[i].modele === valeur){
            resultatVoitures.push(allVoitures[i])
          }
        }else if(champ === "type"){
          if(allVoitures[i].type === valeur){
            console.log("type");
            resultatVoitures.push(allVoitures[i])
          }
        }else if(champ === "puissance"){
          if(String(allVoitures[i].puissance) === valeur){
            resultatVoitures.push(allVoitures[i])
          }
        }
        

      }
      return resultatVoitures;
    
    }
  
  }

