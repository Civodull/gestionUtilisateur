import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

//creation de la classe inscription

export class Inscription{
  constructor(
   public id: string,
   public pseudo: string,
   public nom:string,
   public prenom: string,
   public email:string,
   public adresse:string,
   public telephone: string,
   public password:string,
   public role: string
  ){}
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'custom-search-filter-example';
  searchedKeyword!: string;
closeResult!:string

angForm: FormGroup;
  validateForm: any;
constructor(private fb: FormBuilder,
  private dataService: ApiService,
  private router:Router,
  private httpClient:HttpClient,
  private modalServices:NgbModal) {
this.angForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required],
nom: ['', Validators.required],
telephone: ['', Validators.required],
pseudo:['', Validators.required],
prenom:['', Validators.required],
adresse:['', Validators.required],
role: ['', Validators.required]
});
}

postdata(angForm1: { value: {pseudo:any; nom: any; prenom:any;email: any; password: any;adresse:any;telephone:any; role: any}; })
{
this.dataService.userregistration(
angForm1.value.pseudo,angForm1.value.nom,angForm1.value.prenom,
 // angForm1.value.email, angForm1.value.adresse,angForm1.value.telephone,angForm1.value.password, angForm1.value.role
  )
.pipe(first())
.subscribe(
data => {
this.router.navigate(['connexion']);
},

error => {
});
}

    ngOnInit(): void {
      this.getUser();
    }
  
    //Test avec un tableau 
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
//Recuperer un utilisateur dans la base de donnees
  getUser(){ 
//    this.httpClient.get('http//locahost:3000/user').
//    return
  }
  //Modification d'un utilisateur
  onModifier(){

  }
  //Supression d'un utilisateur'
  onSupprimer(){

  }
//Creer un utilisateur 
open(content:any) {
  this.modalServices.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

onSubmit(form: NgForm) {
  if (this.validateForm(form.value)) {
 //   if (this.data.orderItemIndex == null)
 //     this.orderSevice.orderItems.push(form.value);
 //   else
 //     this.orderSevice.orderItems[this.data.orderItemIndex] = form.value;
 //   this.dialogRef.close();
  }
}

//Fin fonction 
}
