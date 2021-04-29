import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from '../app/app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { AuthguardGuard } from './authguard.guard';


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





