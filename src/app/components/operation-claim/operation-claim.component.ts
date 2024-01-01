import { Component, OnInit } from '@angular/core';
import { OperationClaim } from '../../models/operation-claim/operationClaim';
import { OperationClaimService } from '../../services/operation-claim.service';

@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrl: './operation-claim.component.css',
})
export class OperationClaimComponent implements OnInit {
  operationClaims: OperationClaim[];
  dataLoaded: boolean = false;

  constructor(private operationClaimService: OperationClaimService) {}

  ngOnInit(): void {
    this.getOperationClaims();
  }

  getOperationClaims() {
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
      this.dataLoaded = true;
    });
  }
}
