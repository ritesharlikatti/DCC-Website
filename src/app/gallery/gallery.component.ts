import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/animations/route-animations';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [fadeInAnimation],
  standalone: false,
})
export class GalleryComponent implements OnInit {
  galleryId = 'myLightbox';
  items: GalleryItem[] | any;

  constructor(public gallery: Gallery) {}

  ngOnInit() {
    // Load items into gallery with proper thumbnails
    this.items = [
      new ImageItem({
        src: 'assets/images/PastorsGreeting.jpg',
        thumb: 'assets/images/PastorsGreeting.jpg',
      }),
      new ImageItem({
        src: 'assets/images/DCCFullChurch.jpg',
        thumb: 'assets/images/DCCFullChurch.jpg',
      }),
      new ImageItem({
        src: 'assets/images/ChurchFamily.png',
        thumb: 'assets/images/ChurchFamily.png',
      }),
      new ImageItem({
        src: 'assets/images/ChurchFamily2.png',
        thumb: 'assets/images/ChurchFamily2.png',
      }),
      new ImageItem({
        src: 'assets/images/EarlyDCC.jpg',
        thumb: 'assets/images/EarlyDCC.jpg',
      }),
    ];
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}
