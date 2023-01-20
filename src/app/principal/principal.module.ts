import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reto20Component } from './reto20/reto20.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserintersectorService } from '../services/userintersector.service';



@NgModule({
  declarations: [
    Reto20Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    Reto20Component
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserintersectorService,
      multi: true
    }
  ]
})
export class PrincipalModule { }
