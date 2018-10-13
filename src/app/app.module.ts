import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './Service/appareil.Service';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    AppareilComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
