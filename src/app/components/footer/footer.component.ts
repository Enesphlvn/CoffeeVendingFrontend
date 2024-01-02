import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  dataLoaded: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  aboutUs() {
    this.router.navigate(['aboutUs']);
  }

  homePage() {
    this.router.navigate(['/']);
  }

  communication() {
    this.router.navigate(['communication']);
  }
}
