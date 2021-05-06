import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';

const routes: Routes = [
  {path:'formateur',component:FormateurComponent},
  {path:'etudiant',component:EtudiantComponent}
];
=======
import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from '../app/app.component';
import { InscriptionComponent } from './inscription/inscription.component';
//import { AuthguardGuard } from './authguard.guard';

>>>>>>> ff13d0ef9b5f10244c7a5ba78d731f9d11e57ef3

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'home', component: AppComponent },
  { path: 'registration', component: InscriptionComponent },
  //{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





