import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from './projects';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit, OnDestroy {
  projectId!: number
  currentIndex = 0;
  slides = [{ picture: 'assets/paper-logo.png', title: 'Stationaries', description: 'Elevate your workplace efficiency with our comprehensive stationery solutions. We supply a diverse range of office essentials, from A4, A3, A5 sheets to laminating pouches' },
  { picture: 'assets/builing-logo.png', title: 'Constructions', description: 'Discover excellence in construction with our dedicated services, encompassing house construction, roof and ceiling installation, building renovation, and meticulous maintenance.' },
  { picture: 'assets/money-logo.png', title: 'Loans', description: 'Embark on a secure financial journey with our exceptional loan service facility, where possibilities know no bounds. Experience unparalleled flexibility with no constraints on the minimum or maximum loan values. ' },
  { picture: 'assets/vehicle-logo.png', title: 'Vehicles', description: 'Revolutionize your vehicle experience with us—an exclusive destination for buying and selling. Explore a vast array of vehicles tailored to your preferences. Sell your vehicle hassle-free seamless process, ensuring fair market value.' },


    // Add more image paths as needed
  ];
  // Interval ID for autoplay
  private autoplayInterval: any;

  // Autoplay interval in milliseconds
  private autoplayIntervalTime = 3000; // Change the duration as needed
  constructor(
    private activatedRouter: ActivatedRoute
  ) {

  }

  currentProject: any;
  projects: any[] = Projects.projects


  ngOnInit(): void {

    this.projectId = this.activatedRouter.snapshot.params['projectId']
    console.log(this.projectId);
    this.startAutoplay();
    this.currentProject = this.getProjectById(this.projectId);


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

  getProjectById(id: number) {

    return this.projects.find(project => {
      return project.id == id
    })

  }

}
