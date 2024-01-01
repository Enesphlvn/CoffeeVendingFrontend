import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralContentService } from '../../../services/general-content.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService
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
        },
        (responseError) => {
          if(responseError.error.message){
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
}
