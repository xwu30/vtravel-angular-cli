import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgMaterialModule} from './ngmaterial.module';


import { AppComponent } from './app.component';
import { UserFormComponent } from './components/userform.component';


@NgModule({
  declarations: [
    AppComponent,UserFormComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserFormComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
