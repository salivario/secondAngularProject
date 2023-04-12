import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../interfaces/clients';


@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/Clients";
  submitForm(data: Clients) {
    return this.http.post(this.url, data);
  }
}
