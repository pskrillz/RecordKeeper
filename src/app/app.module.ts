import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccesshubComponent } from './features/accesshub/accesshub.component';
import { NavbarheaderComponent } from './features/navbarheader/navbarheader.component';
import { TableViewComponent } from './features/resourceLibrary/table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccesshubComponent,
    NavbarheaderComponent,
    TableViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }