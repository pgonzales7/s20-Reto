import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  
  apireto20=environment.apireto20

 
  getre20mostrar():Observable<any>{
    return this.http.get(this.apireto20,{observe:"response"})
  }
}
