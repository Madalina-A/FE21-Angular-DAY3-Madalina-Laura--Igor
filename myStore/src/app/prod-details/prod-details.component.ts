import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart(prod: any) {
    alert('The product has been added to the cart!');
    this.CS.addToCart(prod)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let i: any = params.get('id');
      this.product = products[i]
    });
  }

}
