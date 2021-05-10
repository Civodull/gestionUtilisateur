import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connexion/connexion.component';
import { AppComponent } from '../app/app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';
//import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: '', component: ConnectionComponent },
  { path: 'login', component: ConnectionComponent },
  { path: 'home', component: AppComponent },
  { path: 'registration', component: InscriptionComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'formateur', component: FormateurComponent }
  //{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





