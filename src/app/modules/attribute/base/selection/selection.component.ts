import { Component, AfterContentInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
// tslint:disable-next-line:max-line-length
import { IOptionsDialogData, OptionsDialogComponent, IOptionsDialogButton } from 'src/app/components/options-dialog/options-dialog.component';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss', '../base.component.scss']
})
export class SelectionComponent extends BaseComponent implements AfterContentInit {
  protected options: { id: string, string: string }[];

  constructor(
    protected bottomSheet: MatBottomSheet
  ) { super(); }

  public options$: Observable<any>;

  public attrViewValue: Observable<string>;

  protected _setupOnInit() {
    this.attrViewValue = this.attrValue$.pipe(map(x => this.getOptionValue(x)));
    this.options = this.getAttr(this.config, 'options', 'listOfObj');
  }

  getOptionValue(attrValue: string): string {
    try {
      const opts = <{ id: string, string: string }[]>this.getAttr(this.attribute.config, 'options', 'listOfObj');
      return opts.find(x => x.id === attrValue)['string'];
    } catch (e) {
      return '';
    }
  }

  ngAfterContentInit() {
    this.automaticOptionShow();
  }

  automaticOptionShow() {
    if (this.edit) {
      this.presentActionSheet();
    }
  }

  localAssessAttr() {
    this.presentActionSheet();
    this.assessAttr();
  }

  buttons(): IOptionsDialogButton[] {
    const buttons = this.options.map(o => {
      return {
        text: o.string,
        icon: 'chevron_right',
        handler: () => {
          this.attrValue$.next(o.id);
        }
      };
    });

    buttons.push({
      text: 'Cancel',
      icon: 'close',
      handler: () => {
        console.log('Cancel');
      }
    });
    return buttons;
  }


  async presentActionSheet() {
    const data: IOptionsDialogData = {};
    data.header = this.label;
    data.buttons = await this.buttons();
    this.bottomSheet.open(OptionsDialogComponent, { data });
  }


}
