import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class movimentacaoService {

 

  constructor(private http:HttpClient) { }
  public addmovimentacao(info:any):Observable<any>{
    return this.http.post("http://localhost:3000/rotacao/add",
    {info},
    {observe:'response'})
  }

  public getmovimentacao():Observable<any>{
    return this.http.get('http://localhost:3000/rotacao/buscaTodos',
    {observe:'response'})
  }

}