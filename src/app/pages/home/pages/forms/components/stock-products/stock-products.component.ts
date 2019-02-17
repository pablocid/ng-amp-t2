import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit, AfterContentInit {

  public stock = 'stock';

  constructor() { }

  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.parent.addControl('stock', new FormArray([
      this.createStock({ product_id: 3, quantity: 50 }),
      this.createStock({ product_id: 4, quantity: 10 }),
      this.createStock({ product_id: 5, quantity: 60 }),
      this.createStock({ product_id: 6, quantity: 100 })
    ]));
  }

  public get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
  public onRemove(group, index) {
    this.removed.emit({ group, index });
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(parseInt(stock.quantity, 10) || 10)
    });
  }

}
