import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss', '../base.component.scss']
})
export class MultipleSelectionComponent extends BaseComponent {
  options$: Promise<any[]>;
  options;
  selected$: Observable<{ id: string, string: string }[]>;
  selectList$;
  constructor() { super(); }

  setupOnInit() {
    this.options = <{ id: string, string: string }[]>this.getAttr(this.config, 'options', 'listOfObj');

    this.selected$ = this.attrValue$.pipe(map(attr => {
      const options = this.getAttr(this.config, 'options', 'listOfObj');
      if (!Array.isArray(attr)) { return []; }
      return options.filter(x => attr.indexOf(x.id) !== -1).map(x => x.string);
    }));

    this.selectList$ = this.attrValue$.pipe(map(attrs => {
      return this.options.map(x => {
        return { ...x, selected: attrs.indexOf(x.id) === -1 ? false : true };
      });
    }));

  }

  async optionChange($event: MatSlideToggleChange, index) {
    console.log($event.checked);
    const option = this.options[index];
    const currentValue = await this.attrValue$.pipe(take(1)).toPromise();
    const i = currentValue.indexOf(option.id);
    if ($event.checked && i === -1) {
      currentValue.push(option.id);
    } else if (!$event.checked && i !== -1) {
      currentValue.splice(i, 1);
    }
    this.attrValue$.next(currentValue);
    // const currentValue = await this.editViewValue.pipe(take(1)).toPromise();
    // console.log('currentValue', currentValue);
    // currentValue[index].selected = $event.checked;
    // this.update({ editValue: currentValue.filter(x => x.selected).map(x => x.id) });
  }

}
