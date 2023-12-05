import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {



  slides = [{picture:'assets/paper-logo.png',title:'Stationary',description:'Elevate your workplace efficiency with our comprehensive stationery solutions. We supply a diverse range of office essentials, from A4, A3, A5 sheets to laminating pouches'},
              {picture:'assets/builing-logo.png',title:'Construction',description:'Discover excellence in construction with our dedicated services, encompassing house construction, roof and ceiling installation, building renovation, and meticulous maintenance.'},
              {picture:'assets/money-logo.png',title:'Loan',description:'Embark on a secure financial journey with our exceptional loan service facility, where possibilities know no bounds. Experience unparalleled flexibility with no constraints on the minimum or maximum loan values. '},
              {picture:'assets/vehicle-logo.png',title:'Vehicles',description:'Revolutionize your vehicle experience with us—an exclusive destination for buying and selling. Explore a vast array of vehicles tailored to your preferences. Sell your vehicle hassle-free with our seamless process, ensuring fair market value.'},
 
    // Add more image paths as needed
  ];

  // Current index of the active slide
  currentIndex = 0;

  // Interval ID for autoplay
  private autoplayInterval: any;

  // Autoplay interval in milliseconds
  private autoplayIntervalTime = 3000; // Change the duration as needed

  constructor(config: NgbCarouselConfig) {
    // Customize NgbCarouselConfig to enable pause on hover
    config.pauseOnHover = true;
  }

  ngOnInit() {
    // Start autoplay when the component is initialized
    this.startAutoplay();
  }

  ngOnDestroy() {
    // Clear the autoplay interval when the component is destroyed to avoid memory leaks
    this.stopAutoplay();
  }

  // Method to show the specified slide
  showSlide(index: number) {
    this.currentIndex = index;
  }

  // Method to show the next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Method to show the previous slide
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Method to start the autoplay
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoplayIntervalTime);
  }

  // Method to stop the autoplay
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
  


  
    
  }
 
    
  


  
