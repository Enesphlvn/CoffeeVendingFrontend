import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user/user';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css',
})
export class UserUpdateComponent implements OnInit {
  userUpdateForm: FormGroup;
  dataLoaded: boolean = false;
  user: User;
  id: number;
  firstname: string;
  lastname: string;
  email: string;

  constructor(
    private toastrService: ToastrService,
    private authService: AuthService,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.check();
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formbuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
    });
    this.dataLoaded = true;
  }

  update() {
    if (this.userUpdateForm.valid) {
      let userUpdateModel = {
        id: this.id,
        email: this.email,
        ...this.userUpdateForm.value,
      };

      this.userService.update(userUpdateModel).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.warningMessage();
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getByMail(email: string) {
    this.authService.getByMail(email).subscribe((response) => {
      if (response) {
        const value = {
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        };
        this.userUpdateForm.patchValue(value);

        this.id = response.data.id;
      } else {
        this.toastrService.error('Bilgiler okunamadı');
      }
    });
  }

  check() {
    const token = localStorage.getItem('token');

    if (token) {
      if (!this.email) {
        const decoded: any = jwtDecode(token);
        this.email = decoded['email'];
      }
    }

    this.getByMail(this.email);
  }

  warningMessage() {
    localStorage.removeItem('token');
    this.toastrService.info(
      'Değişikliklerinizin kayıt olmasını istiyorsanız lütfen hesabınızdan çıkış yapıp tekrar giriniz.',
      'Tekrar Giriş Yapın',
      {
        timeOut: 12000,
        extendedTimeOut: 12000,
        progressBar: true,
      }
    );
  }
}
