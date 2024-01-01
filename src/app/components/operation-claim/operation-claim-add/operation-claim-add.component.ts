import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationClaimService } from '../../../services/operation-claim.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-operation-claim-add',
  templateUrl: './operation-claim-add.component.html',
  styleUrl: './operation-claim-add.component.css',
})
export class OperationClaimAddComponent implements OnInit {
  operationClaimAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperationClaimAddForm();
  }

  createOperationClaimAddForm() {
    this.operationClaimAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.operationClaimAddForm.valid) {
      let operationClaimModel = Object.assign({}, this.operationClaimAddForm.value);
      this.operationClaimService.add(operationClaimModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.message) {
            this.toastrService.error(responseError.error.message, 'Hata');
          } else if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
