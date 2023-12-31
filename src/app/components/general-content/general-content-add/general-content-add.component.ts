import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralContentService } from '../../../services/general-content.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-content-add',
  templateUrl: './general-content-add.component.html',
  styleUrl: './general-content-add.component.css',
})
export class GeneralContentAddComponent implements OnInit {
  generalContentAddForm: FormGroup;
  isCritialLevel: boolean = false;
  dataLoaded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private generalContentService: GeneralContentService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createGeneralContentAddForm();
  }

  createGeneralContentAddForm() {
    this.generalContentAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      value: ['', Validators.required],
      isCritialLevel: [this.isCritialLevel, Validators.required],
      imagePath: ['', Validators.required],
    });
    this.dataLoaded = true;
  }

  add() {
    if (this.generalContentAddForm.valid) {
      let generalContentModel = Object.assign({}, this.generalContentAddForm.value);
      this.generalContentService.add(generalContentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.adminPanel();
        },
        (responseError) => {
          if (responseError.error.Message) {
            this.toastrService.error('Yetkiniz yok');
          }
          else if(responseError.error.message){
            this.toastrService.error(responseError.error.message, 'Hata');
          }
          else if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  adminPanel() {
    this.router.navigate(['adminPanel']);
  }
}
