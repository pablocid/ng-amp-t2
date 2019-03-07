import { Component } from '@angular/core';
import { SelectionComponent } from '../selection/selection.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-selection-img',
  templateUrl: './selection-img.component.html',
  styleUrls: ['./selection-img.component.scss', '../base.component.scss']
})
export class SelectionImgComponent extends SelectionComponent {
  imgOpts;
  public attrViewImg$: Observable<string>;
  public listViewImg: Observable<any>;
  imgOptions$: Observable<any>;

  constructor(
    protected bottomSheet: MatBottomSheet
  ) { super(bottomSheet); }

  protected _setupOnInit() {

    this.attrViewValue = this.attrValue$.pipe(map(x => this.getOptionValue(x)));
    this.attrViewImg$ = this.attrValue$.pipe(map(x => this.getOptionImgValue(x)));
    this.options = this.getAttr(this.config, 'options', 'listOfObj');
    this.imgOpts = this.getAttr(this.config, 'optionImages', 'listOfObj');

  }

  public onImageTouch(imgOpt) {
    this.attrValue$.next(imgOpt.id);
  }

  getOptionImgValue(attrValue: string): string {
    try {
      const opts = <{ id: string, string: string }[]>this.getAttr(this.attribute.config, 'optionImages', 'listOfObj');
      return opts.find(x => x.id === attrValue)['string'];
    } catch (e) {
      return '';
    }
  }

}
