import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationClaimService } from '../../../services/operation-claim.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from '../../../models/operation-claim/operationClaim';

@Component({
  selector: 'app-operation-claim-update',
  templateUrl: './operation-claim-update.component.html',
  styleUrl: './operation-claim-update.component.css',
})
export class OperationClaimUpdateComponent implements OnInit {
  operationClaimUpdateForm: FormGroup;
  operationClaim: OperationClaim;
  dataLoaded: boolean = false;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['operationClaimId'];
      this.getOperationClaimById(params['operationClaimId']);
    });
  }

  createOperationClaimUpdateForm() {
    this.operationClaimUpdateForm = this.formBuilder.group({
      id: [this.operationClaim.id, Validators.required],
      name: [this.operationClaim.name, Validators.required],
    });
    this.dataLoaded = true;
  }
 
  update() {
    if (this.operationClaimUpdateForm.valid) {
      let operationClaimUpdateModel = Object.assign(
        {},
        this.operationClaimUpdateForm.value
      );
      this.operationClaimService.update(operationClaimUpdateModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
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

  getOperationClaimById(id: number) {
    this.operationClaimService.getById(id).subscribe((response) => {
      this.operationClaim = response.data;
      this.createOperationClaimUpdateForm();
    });
  }
}
