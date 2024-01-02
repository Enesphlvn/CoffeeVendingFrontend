import { Component, OnInit } from '@angular/core';
import { UserOperationClaimService } from '../../services/user-operation-claim.service';
import { UserOperationClaim } from '../../models/user-operation-claim/userOperationClaim';

@Component({
  selector: 'app-user-operation-claim',
  templateUrl: './user-operation-claim.component.html',
  styleUrl: './user-operation-claim.component.css',
})
export class UserOperationClaimComponent implements OnInit {
  userOperationClaims: UserOperationClaim[];
  dataLoaded: boolean = false;

  constructor(private userOperationClaimService: UserOperationClaimService) {}

  ngOnInit(): void {
    this.getUserOperationClaims();
  }

  getUserOperationClaims() {
    this.userOperationClaimService.getUserOperationClaims().subscribe((response) => {
      this.userOperationClaims = response.data;
      this.dataLoaded = true;
      });
  }
}
