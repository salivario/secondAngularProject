import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from '../interfaces/gallery';

@Injectable({
  providedIn: 'root'
})
export class GetGalleryService {
  url: string = "http://localhost:3000/photos";
  constructor(private http: HttpClient) { }
  getPhotoss(){
    return this.http.get<Gallery []>(this.url);
  }
}
