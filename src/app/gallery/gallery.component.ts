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
    // Load items into gallery
    this.items = [
      new ImageItem({
        src: 'assets/images/PastorsGreeting.jpg',
        thumb: 'IMAGE_THUMBNAIL_URL',
      }),
      new ImageItem({
        src: 'assets/images/DCCFullChurch.jpg',
        thumb: 'IMAGE_THUMBNAIL_URL',
      }),
      // ... more items
    ];
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}
