import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../forms.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  constructor() { }

  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added = new EventEmitter<any>();

  ngOnInit() {
  }

  public onAdd() {
    this.added.emit(this.parent.get('selector').value);
  }

}
