import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralContent } from '../../../models/general-content/generalContent';
import { GeneralContentService } from '../../../services/general-content.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-content-update',
  templateUrl: './general-content-update.component.html',
  styleUrl: './general-content-update.component.css',
})
export class GeneralContentUpdateComponent implements OnInit {
  generalContentUpdateForm: FormGroup;
  generalContent: GeneralContent;
  id: number;
  dataLoaded: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private generalContentService: GeneralContentService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['generalContentId'];
      this.getGeneralContentById(params['generalContentId']);
    });
  }

  createGeneralContentUpdateForm() {
    this.generalContentUpdateForm = this.formBuilder.group({
      id: [this.generalContent.id, Validators.required],
      name: [this.generalContent.name, Validators.required],
      type: [this.generalContent.type, Validators.required],
      value: [this.generalContent.value, Validators.required],
      isCritialLevel: [this.generalContent.isCritialLevel, Validators.required],
      imagePath: [this.generalContent.imagePath, Validators.required],
    });
    this.dataLoaded = true;
  }

  update() {
    if (this.generalContentUpdateForm.valid) {
      let generalContentUpdateModel = Object.assign(
        {},
        this.generalContentUpdateForm.value
      );
      this.generalContentService.update(generalContentUpdateModel).subscribe(
        (response) => {
          this.toastrService.success(response.message);
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0;i < responseError.error.ValidationErrors.length;i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getGeneralContentById(id: number) {
    this.generalContentService.getById(id).subscribe((response) => {
      this.generalContent = response.data;
      this.createGeneralContentUpdateForm();
    });
  }
}
