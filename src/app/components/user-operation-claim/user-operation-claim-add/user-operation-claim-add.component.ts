import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserOperationClaimService } from '../../../services/user-operation-claim.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { OperationClaimService } from '../../../services/operation-claim.service';
import { User } from '../../../models/user/user';
import { OperationClaim } from '../../../models/operation-claim/operationClaim';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrl: './user-operation-claim-add.component.css',
})
export class UserOperationClaimAddComponent implements OnInit {
  userOperationClaimAddForm: FormGroup;
  users: User[];
  operationClaims: OperationClaim[];
  dataLoaded: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService,
    private userService: UserService,
    private operationClaimService: OperationClaimService
  ) {}

  ngOnInit(): void {
    this.createUserOperationClaimAddForm();
    this.getUsers();
    this.getOperationClaims();
  }

  createUserOperationClaimAddForm() {
    this.userOperationClaimAddForm = this.formbuilder.group({
      userId: [null, Validators.required],
      operationClaimId: [null, Validators.required],
    });
    this.dataLoaded = true;
  }

  add() {
    if (this.userOperationClaimAddForm.valid) {
      let useroperationClaimModel = Object.assign(
        {},
        this.userOperationClaimAddForm.value
      );
      this.userOperationClaimService.add(useroperationClaimModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Message) {
            this.toastrService.error('Yetkiniz yok');
          }
        }
      );
    } else {
      this.toastrService.error('Kullanıcı ve Rol seçmeden ekleme işlemi yapılmaz');
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  getOperationClaims() {
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
    });
  }
}
