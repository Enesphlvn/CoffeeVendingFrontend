import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css',
})
export class NaviComponent implements OnInit {
  loginCheck: boolean = false;
  name: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  check() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      this.loginCheck = true;
    } else {
      return;
    }

    // if (this.loginCheck) {
    //   if (!this.name) {
    //     try {
    //       const decoded: any = 
    //       this.name = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    //     }
    //     catch (error) {}
    //   }

    // }
  }

  homePage() {
    this.router.navigate(['/']);
  }

  aboutUs() {
    this.router.navigate(['aboutUs']);
  }

  coffeeSupplies() {
    this.router.navigate(['generalContents/getall']);
  }

  adminPanel() {
    this.router.navigate(['adminPanel']);
  }
}
