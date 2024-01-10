import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  dataLoaded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.dataLoaded = true;
  }

  register(){
    if (this.registerForm.valid){
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe((response) => {
        this.toastrService.success('Bize katıldığınız için teşekkür ederiz');
        localStorage.setItem('token', response.data.token);
        this.homePage();
      },
      (responseError) => {
        console.log(responseError);
        if (responseError.error.Message) {
          this.toastrService.error('Bu mailde zaten bir kullanıcı var');
        }
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');         
          }
        }
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat')
    }
  }

  login(){
    this.router.navigate(['login']);
  }

  homePage() {
    this.router.navigate(['']);
  }
}
