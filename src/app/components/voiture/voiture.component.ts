import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voitures/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  

  
  currentVoitureId:string;
  allVoitures: Voiture[] = [];
  isFetching: boolean= false;
  editMode: boolean = false;
  @ViewChild ('VoituresForm') productForm: NgForm;


  //consturctor
  constructor(private voituresSevice: VoitureService )  {

   }



  

  ngOnInit(): void {
    this.fetchVoitures();
  }

  onVoituresFetch(): void{
    this.fetchVoitures();
    this.editMode = false;
    this.productForm.reset();
  }

  onDeleteVoiture(id: string): void{
    this.voituresSevice.deleteVoiture(id);
    
  }
  onAddVoiture(voiture: {type:string,marque:string,modele:string,puissance:number}): void{
    if(!this.editMode){
      this.voituresSevice.ajouterUneVoiture(voiture);
    }else{
      this.voituresSevice.updateVoiture(this.currentVoitureId,voiture);
    }
  }
  onEditVoiture(id:string): void{
    //get the Voiture based on id
    this.currentVoitureId = id;
    console.log(id);
    let currentVoiture: Voiture = this.allVoitures.find((Voiture) => Voiture.id === id) as Voiture;

    //set the form values
    this.productForm.setValue({
      type: currentVoiture.type,
      marque: currentVoiture.marque,
      modele: currentVoiture.modele,
      puissance: currentVoiture.puissance
    });
    //change the value of the button to say update
    this.editMode = true;

  }
  private fetchVoitures(): void{
    this.isFetching = true;
    this.voituresSevice.fetchVoitures().subscribe((Voitures) => {
      this.isFetching = false;
      this.allVoitures = Voitures;
    });
  }

}
