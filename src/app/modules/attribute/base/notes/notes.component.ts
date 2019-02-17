import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../base.component';
// import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent extends BaseComponent {
  // editViewValueStatic: Promise<any>;
  constructor(
    // public cdr: ChangeDetectorRef
  ) { super(); }

  // public textareaValue: string;

  _setupOnInit() {
    // this.textareaValue = this.attrValue;
    // this.listViewValue = this.attribute$.pipe(map(attr => attr.value));
    // this.editViewValue = this.attribute$.pipe(map(attr => attr.editValue));
    // this.editViewValueStatic = this.editViewValue.pipe(take(1)).toPromise();
    // this.editViewValueStatic.then(x => {
    //   this.textareaValue = x;
    //   this.cdr.detectChanges();
    // });
  }

  // onTAChange(event) {
  //   console.log('update', this.textareaValue);
  //   // this.update(this.textareaValue);
  //   // this.attrValue = this.textareaValue;
  // }

}
