import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-numeric-list',
  templateUrl: './numeric-list.component.html',
  styleUrls: ['./numeric-list.component.scss', '../base.component.scss']
})
export class NumericListComponent extends BaseComponent {
  public min: number;
  public max: number;
  public step: number;
  public unit: string;
  constructor() { super(); }

  protected _setupOnInit() {
    try {
      this.min = !isNaN(this.getAttr(this.config, 'minVal', 'number')) ? this.getAttr(this.config, 'minVal', 'number') : 0;
    } catch (error) { this.min = 1; }
    try {
      this.max = !isNaN(this.getAttr(this.config, 'maxVal', 'number')) ? this.getAttr(this.config, 'maxVal', 'number') : 10;
    } catch (error) { this.max = 10; }
    try {
      this.step = !isNaN(this.getAttr(this.config, 'step', 'number')) ? this.getAttr(this.config, 'step', 'number') : 1;
    } catch (error) { this.step = 1; }
    try {
      this.unit = this.getAttr(this.config, 'unit', 'string');
    } catch (error) { this.unit = 'u'; }
  }

  onChangeValue($event) {
    this.attrValue$.next($event.value);
  }
}
