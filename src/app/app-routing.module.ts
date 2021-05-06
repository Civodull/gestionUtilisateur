import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';

const routes: Routes = [
  {path:'formateur',component:FormateurComponent},
  {path:'etudiant',component:EtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
