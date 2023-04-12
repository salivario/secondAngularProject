import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Clients } from '../interfaces/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolverService {
  private url: string = "http://localhost:3000/Clients";
  constructor(private http: HttpClient) { }
  getClients(): Observable<Clients []>{
    return this.http.get<Clients []>(this.url);
  }
  deleteclient(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
