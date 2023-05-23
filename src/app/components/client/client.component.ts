import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from 'src/app/services/clients/client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  
  currentClientId:string;
  allClients: Client[] = [];
  isFetching: boolean= false;
  editMode: boolean = false;
  @ViewChild ('clientsForm') productForm: NgForm;


  //consturctor
  constructor(private clientsSevice: ClientService )  {

   }



  

  ngOnInit(): void {
    this.fetchClients();
  }

  onClientsFetch(): void{
    this.fetchClients();
    this.editMode = false;
    this.productForm.reset();
  }

  onDeleteClient(id: string): void{
    this.clientsSevice.deleteClient(id);
    
  }
  onAddClient(client: {nom:string,prenom:string,adresse:string}): void{
    if(!this.editMode){
      this.clientsSevice.ajouterUnClient(client);
    }else{
      this.clientsSevice.updateClient(this.currentClientId,client);
    }
  }
  onEditClient(id:string): void{
    //get the client based on id
    this.currentClientId = id;
    console.log(id);
    let currentClient: Client = this.allClients.find((client) => client.id === id) as Client;

    //set the form values
    this.productForm.setValue({
      nom: currentClient.nom,
      prenom: currentClient.prenom,
      adresse: currentClient.adresse
    });
    //change the value of the button to say update
    this.editMode = true;

  }
  private fetchClients(): void{
    this.isFetching = true;
    this.clientsSevice.fetchClients().subscribe((clients) => {
      this.isFetching = false;
      this.allClients = clients;
    });
  }
}
