import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { PasswordUpdate } from '../../models/user/passwordUpdate';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.css',
})
export class PasswordUpdateComponent implements OnInit {
  passwordUpdateForm: FormGroup;
  password: PasswordUpdate;
  email: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.check();
    this.createPasswordUpdateForm();
  }

  createPasswordUpdateForm() {
    this.passwordUpdateForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      secondNewPassword: ['', Validators.required],
    });
  }

  update() {
    if (this.passwordUpdateForm.valid) {
      let passwordUpdateModel = Object.assign({}, this.passwordUpdateForm.value);

      if (passwordUpdateModel.newPassword !== passwordUpdateModel.secondNewPassword) {
        this.toastrService.error('Yeni şifre tekrarı hatalı', 'Hata');
        return;
      }
      const request = {
        email: this.email,
        oldPassword: passwordUpdateModel.oldPassword,
        newPassword: passwordUpdateModel.newPassword
      }

      this.userService.passwordUpdate(request).subscribe((response) => {
        this.warningMessage();
      },
      (responseError) => {
        if (responseError.error.message) {
          this.toastrService.error(responseError.error.message, 'Hata');
        }
        else if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');         
          }
        }
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  check() {
    const token = localStorage.getItem('token');

    if (token) {
      if (!this.email) {
        const decoded: any = jwtDecode(token);
        this.email = decoded['email'];
      }
    }
  }

  warningMessage() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.toastrService.success(
      'Lütfen tekrar giriş yapınız.', 'Şifre güncellendi',
      {
        timeOut: 5000,
        extendedTimeOut: 5000,
      }
    );
  }
}
