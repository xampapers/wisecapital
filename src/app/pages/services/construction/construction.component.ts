import { Component } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent {

  images = [
    { src: '/home/kekulu/Desktop/angualr-project-1/project-1/src/assets/Screenshot from 2023-11-07 09-03-16.png', alt: 'Image 1', details: 'Details about Image 1' },
    { src: '/home/kekulu/Desktop/angualr-project-1/project-1/src/assets/Screenshot from 2023-11-08 09-26-03.png', alt: 'Image 2', details: 'Details about Image 2' },
    // Add more images as needed
  ];

  activeImage = this.images[0];

}
