import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, EventEmitter, EmbeddedViewRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Attribute, Config } from '../attribute.component';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public attribute: Attribute;
  public config: Config[];
  public canEdit: boolean;
  public editMode: boolean;
  public label: string;
  public attrOldValue: any;
  public attrValue$ = new BehaviorSubject(undefined);
  public isEntity: boolean;

  public currentEmbeddedViewRef: EmbeddedViewRef<any>;

  constructor() { }

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('listViewTmpl') listViewTmpl: TemplateRef<any>;
  @ViewChild('editViewTmpl') editViewTmpl: TemplateRef<any>;

  ngOnInit() {
    this.label = this.getAttr(this.config, 'label', 'string');

    this._setupOnInit();
    this.setupOnInit();
  }

  protected setupOnInit() { }
  protected _setupOnInit() { }


  public setTemplate(edit) {
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

  async localSave() {
    this.setTemplate(false);
    const currentValue = await this.attrValue$.pipe(take(1)).toPromise();
    this.attrOldValue = currentValue;
    this.save({ value: currentValue, options: {}, entity: this.isEntity });
  }

  async localCancel() {
    this.setTemplate(false);
    this.attrValue$.next(this.attrOldValue);
    this.cancel();
  }

  assessAttr() { this.setTemplate(true); }
  save(value: any) { }
  cancel() { }

  protected getAttr(attrs: any[], id: string, dd: string) {
    // const attr = attrs.find(x => x.id);
    // if (attr) { return attr[dd]; }
    const index = attrs.map(x => x.id).indexOf(id);
    if (index === -1) { return undefined; }
    return attrs[index][dd];
  }

}
