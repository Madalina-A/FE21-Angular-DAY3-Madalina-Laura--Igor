import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

}
