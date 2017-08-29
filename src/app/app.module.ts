import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdCardModule, MdDialogModule, MdGridListModule, MdTabsModule , MdInputModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";
// import 'aos';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './customer/customer.component';
import { TermpageComponent } from './termpage/termpage.component';
import { DialogComponent } from './termpage/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,

    CustomerComponent,
    TermpageComponent,
    DialogComponent    
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,


    ReactiveFormsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdToolbarModule,
    MdMenuModule, 
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    MdGridListModule,
    MdTabsModule,
    MdInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
