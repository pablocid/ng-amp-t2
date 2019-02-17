import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, EventEmitter, EmbeddedViewRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Attribute } from '../attribute.component';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public attribute$: Observable<Attribute>;
  public attribute: Attribute;
  public edit: boolean;
  public canEdit: boolean;
  public editMode: boolean;
  // public subject: BehaviorSubject<any>;
  // public value: Observable<any>;
  public label: Observable<any>;
  public attrValue: any;
  public attrOldValue: any;
  public description: Observable<string>;
  // public listViewLabel: Observable<any>;
  public listViewValue: Observable<any>;
  public editViewValue: Observable<any>;
  // public updateOptios: BehaviorSubject<{ push?: boolean, delete?: boolean, pop?: boolean, partial?: any }>;
  public valueIsSet$: Observable<boolean>;

  public currentEmbeddedViewRef: EmbeddedViewRef<any>;

  constructor() {
    // this.subject = new BehaviorSubject(undefined);
    // this.updateOptios = new BehaviorSubject({});
    // this.value = this.subject.asObservable();
  }


  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('listViewTmpl') listViewTmpl: TemplateRef<any>;
  @ViewChild('editViewTmpl') editViewTmpl: TemplateRef<any>;

  ngOnInit() {
    // this.setTemplate();
    // this.subject.next(this.attr.value);
    // this.subject = new BehaviorSubject(this.attr.value);
    this.description = this.attribute$.pipe(map(x => x.config)).pipe(map(config => {
      return this.getAttr(config, 'label', 'string');
    }));
    this.valueIsSet$ = this.attribute$.pipe(map(x => x.value)).pipe(map(value => {
      if (value === undefined || value === null) {
        return false;
      } else {
        return true;
      }
    }));

    this._setupOnInit();
    this.setupOnInit();
  }

  protected setupOnInit() { }
  protected _setupOnInit() { }


  public setTemplate(edit) {
    this.edit = edit;
    if (this.currentEmbeddedViewRef) { this.currentEmbeddedViewRef.destroy(); }
    if (edit === true) {
      try {
        this.currentEmbeddedViewRef = this.entry.createEmbeddedView(this.editViewTmpl);
        this.editMode = true;
      } catch (e) { console.log('Error: No existe template cardView'); }
    } else {
      try {
        this.currentEmbeddedViewRef = this.entry.createEmbeddedView(this.listViewTmpl);
        this.editMode = false;
      } catch (e) { console.log('Error: No existe el template listView'); }
    }
  }

  // updateNewValue(newValue, options) {
  //   if (!this.update) { console.log('update variable is no set'); return; }
  //   this.update({ value: newValue, editValue: undefined });
  //   this.attrValue = newValue;
  // }

  update(newValue) {
    this.attrValue = newValue;
  }

  localSave() {
    this.setTemplate(false);
    this.save('OK');
  }

  assessAttr() {
    this.setTemplate(true);
  }
  async save($event): Promise<boolean> { return; }

  protected getAttr(attrs: any[], id: string, dd: string) {
    // const attr = attrs.find(x => x.id);
    // if (attr) { return attr[dd]; }
    const index = attrs.map(x => x.id).indexOf(id);
    if (index === -1) { return undefined; }
    return attrs[index][dd];
  }

}
