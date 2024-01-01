import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user/user';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrl: './order-add.component.css',
})
export class OrderAddComponent implements OnInit {
  orderAddForm: FormGroup;
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createOrderAddForm();
    this.getUsers();
  }

  createOrderAddForm() {
    this.orderAddForm = this.formBuilder.group({
      userId: [null, Validators.required],
      productId: [null, Validators.required],
      amountPaid: [null, Validators.required],
      refundPaid: [null, Validators.required],
    });
  }

  add() {
    if (this.orderAddForm.valid) {
      let orderModel = Object.assign({}, this.orderAddForm.value);
      this.orderService.add(orderModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }
}
