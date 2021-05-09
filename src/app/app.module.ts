import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FinanceComponent } from './finance/finance.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormateurComponent } from './formateur/formateur.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {NgxPaginationModule} from 'ngx-pagination'


var firebaseConfig = {
  apiKey: "AIzaSyCKlCKbf71ttSq-ipE1lvx_vqQbC2Jjx8w",
  authDomain: "angular-4fabc.firebaseapp.com",
  projectId: "angular-4fabc",
  storageBucket: "angular-4fabc.appspot.com",
  messagingSenderId: "595567013160",
};
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ConnexionComponent,
    InscriptionComponent,
    FinanceComponent,
    EtudiantComponent,
    FormateurComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule
//    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InscriptionComponent]
})
export class AppModule { }
