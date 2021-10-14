import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;

  checkOutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private CS: CartService) { }

  ngOnInit(): void {
    this.items = this.CS.getItems();
  }

  onSubmit (cData: any) {
    console.log('Your order has been submitted!', cData);
    this.items = this.CS.clearCart();
    this.checkOutForm.reset();
  }

}
