import { Component,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Gallery } from 'src/app/interfaces/gallery';
import { GetGalleryService } from 'src/app/services/get-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{
  constructor(private GetGalleryService: GetGalleryService){}
  photos$!:Observable<Gallery[]>;
  ngOnInit(): void {
    this.photos$ = this.GetGalleryService.getPhotoss();
  }
}
