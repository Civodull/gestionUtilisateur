import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from '../app/app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { FinanceComponent } from './finance/finance.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'home', component: AppComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'formateur', component: FormateurComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'admin', component: AdminComponent }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





