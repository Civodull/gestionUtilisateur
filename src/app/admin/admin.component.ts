import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { InscriptionComponent } from '../inscription/inscription.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'custom-search-filter-example';
  searchedKeyword!: string;

  constructor(
//      private dialog:MatDialog, 
  //    private dialogRef:MatDialogRef<T,don=any>
  ) { }
  
    ngOnInit(): void {
    }
  
    onCreate(){ 
  //    this.dialog.open(InscriptionComponent)
    }
  filterResultDataSet = [
    {
      pseudo: 'Pourtgal',
      nom: 'Ronaldo',
      prenom: 'Cristiano',
      email:'ludo@gmail.com',
      adresse:'Ouest Foire',
      telephone: '+221771816807',
      role: 'Etudiant'
    },
    {
      pseudo: 'Leo',
      nom: 'Eboue',
      prenom: 'Leonel',
      email:'eboue@gmail.com',
      adresse:'Yaounde',
      telephone: '771816807',
      role: 'Etudiant'
    },
    {
      pseudo: 'mendo',
      nom: 'Mendo',
      prenom: 'Louis',
      email:'louis@gmail.com',
      adresse:'Ocean',
      telephone: '+221771816807',
      role: 'Admin'
    },
    {
      pseudo: 'dady9',
      nom: 'Engono',
      prenom: 'LeoDady',
      email:'dady@gmail.com',
      adresse:'Tambacounda',
      telephone: '331816807',
      role: 'Financier'
    },
    {
      pseudo: 'ouica',
      nom: 'Toundou',
      prenom: 'Ambassi',
      email:'toundou@gmail.com',
      adresse:'Medina',
      telephone: '+221761816807',
      role: 'Admin'
    },
    {
      pseudo: 'tige',
      nom: 'Toure',
      prenom: 'Tidiane',
      email:'tige@gmail.com',
      adresse:'Yembeul',
      telephone: '+221771888807',
      role: 'Etudiant'
    },
    {
      pseudo: 'Babs',
      nom: 'Mbaye',
      prenom: 'Ababacar',
      email:'babs@gmail.com',
      adresse:'Nord Foire',
      telephone: '+221771436807',
      role: 'Formateur'
    }
  ]

}
