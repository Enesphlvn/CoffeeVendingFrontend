import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css',
})
export class NaviComponent implements OnInit {
  loginCheck: boolean = false;
  name: string = "";
  
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.check();
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.check();
      });
  }

  check() {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded: any = jwtDecode(token);

      if (!this.name && decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']) {
        this.name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      }

      this.loginCheck = true;

    } else {
      this.loginCheck = false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.name = "";
    this.router.navigate(['login']);
    this.toastrService.error('Sistemden çıkış yapıldı');
  }

  login() {
    this.router.navigate(['login']);
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

  userUpdate() {
    this.router.navigate(['userUpdate'])
  }

  passwordUpdate() {
    this.router.navigate(['passwordUpdate']);
  }
}
