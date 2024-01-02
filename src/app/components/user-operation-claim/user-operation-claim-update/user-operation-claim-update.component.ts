import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserOperationClaimUpdate } from '../../../models/user-operation-claim/userOperationClaimUpdate';
import { OperationClaimService } from '../../../services/operation-claim.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserOperationClaimService } from '../../../services/user-operation-claim.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user/user';
import { OperationClaim } from '../../../models/operation-claim/operationClaim';

@Component({
  selector: 'app-user-operation-claim-update',
  templateUrl: './user-operation-claim-update.component.html',
  styleUrl: './user-operation-claim-update.component.css'
})
export class UserOperationClaimUpdateComponent {
  userOperationClaimUpdateForm: FormGroup;
  userOperationClaim: UserOperationClaimUpdate;
  users: User[];
  operationClaims: OperationClaim[];
  dataLoaded: boolean = false;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private operationClaimService: OperationClaimService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['userOperationClaimId'];
      this.getUserOperationClaimById(params['userOperationClaimId']);
    });
    this.getOperationClaims();
    this.getUsers();
  }

  createUserOperationClaimUpdateForm() {
    this.userOperationClaimUpdateForm = this.formBuilder.group({
      id: [this.userOperationClaim.id, Validators.required],
      userId: [this.userOperationClaim.userId, Validators.required],
      operationClaimId: [this.userOperationClaim.operationClaimId, Validators.required],
    });
    this.dataLoaded = true;
  }

  update() {
    if (this.userOperationClaimUpdateForm.valid) {
      let userOperationClaimUpdateModel = Object.assign({},this.userOperationClaimUpdateForm.value);
      this.userOperationClaimService.update(userOperationClaimUpdateModel).subscribe(
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

  getUserOperationClaimById(id: number) {
    this.userOperationClaimService.getById(id).subscribe((response) => {
      this.userOperationClaim = response.data;
      this.createUserOperationClaimUpdateForm();
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
    });
  }
}
