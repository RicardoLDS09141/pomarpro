import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PomarCadService {

 

  constructor(private http:HttpClient) { }
  public addmaterial(info:any):Observable<any>{
    return this.http.post("http://localhost:3000/pomarcad/add",
    {info},
    {observe:'response'})
  }

  public getMaterial():Observable<any>{
    return this.http.get('http://localhost:3000/pomarcad/buscaTodos',
    {observe:'response'})
  }

}
