import {
  Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterContentInit, Input, Output, EventEmitter,
  ComponentRef, ChangeDetectionStrategy, OnDestroy
} from '@angular/core';
import { BaseComponent } from './base/base.component';
import { SelectionComponent } from './base/selection/selection.component';
import { NumericListComponent } from './base/numeric-list/numeric-list.component';
import { MultipleSelectionComponent } from './base/multiple-selection/multiple-selection.component';
import { SelectionImgComponent } from './base/selection-img/selection-img.component';
import { NotesComponent } from './base/notes/notes.component';
import { ImageCaptureComponent } from './base/image-capture/image-capture.component';
import { BehaviorSubject } from 'rxjs';
// import { NumericListComponent } from './base/numeric-list/numeric-list.component';
// import { ImageCaptureComponent } from './base/image-capture/image-capture.component';
// import { ObservationsComponent } from './observations/observations.component';

export interface Attribute {
  id: string;
  value: any;
  config: Config[];
  updateOptions: { push?: boolean, delete?: boolean, pop?: boolean, partial?: any };
  editValue: any;
}

export interface Config {
  id: string;
  string: string;
  number: number;
  list: string[];
  listOfObj: { id: string, string: string }[];
  date: Date;
  boolean: Boolean;
  value: any;
}
@Component({
  selector: 'app-attribute',
  template: '<ng-template #entry></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeComponent implements OnInit, AfterContentInit, OnDestroy {
  public entity: boolean;
  constructor(
    private _resolver: ComponentFactoryResolver
  ) { }

  component: ComponentRef<BaseComponent>;

  @Input() attribute: Attribute;
  @Input() canEdit: boolean;
  @Input() editMode: boolean;
  @Output() save = new EventEmitter<{ value: string, options: { delete: boolean, push: boolean, pop: boolean }, entity: boolean }>();
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  private checkForHexRegExp = /^[0-9a-fA-F]{24}$/;

  private attributesComponentList = [
    { id: '580c082b12e1240010cd9d64', name: 'vigor', component: SelectionComponent },
    { id: '5851a7fc0cb9af001119793a', name: 'cluster_size', component: SelectionComponent },
    { id: '5851a6970cb9af0011197939', name: 'cluster_looseness', component: SelectionComponent },
    { id: '5851a9240cb9af001119793b', name: 'rachis_thickness', component: SelectionComponent },
    { id: '5851aa520cb9af001119793c', name: 'grape_flavor', component: SelectionComponent },
    { id: '5851ab960cb9af001119793d', name: 'grape_texture', component: SelectionComponent },
    { id: '5851984a0cb9af0011197937', name: 'Apirenia', component: SelectionImgComponent },
    { id: '580c0caf90cc2700100db1d2', name: 'forma_baya', component: SelectionImgComponent },
    { id: '580c121390cc2700100db1d3', name: 'cluster_shape', component: SelectionImgComponent },
    { id: '585185360cb9af0011197935', name: 'cluster_color', component: SelectionImgComponent },
    { id: '5851a35c0cb9af0011197938', name: 'calibre', component: NumericListComponent },
    { id: '5808de89832db50010d3192c', name: 'observations', component: MultipleSelectionComponent },
    { id: '581a356c5c0eac001077ad6e', name: 'images', component: ImageCaptureComponent },
    { id: '57c8a0cca774d31000b71cd4', name: 'field_notes', component: NotesComponent },
    { id: '5bd14b4bd71ef20014e4b327', name: 'selection_status', component: SelectionComponent, entity: true },
    { id: '57feb94b179c960010e41f65', name: 'fructification_habit', component: SelectionComponent },
    { id: '5808d1e9d48d17001006e43c', name: 'cluster_number', component: NumericListComponent },
    { id: '57c84628ab66902c2208a855', name: 'brix_degree', component: NumericListComponent }
  ];

  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.component) { this.component.destroy(); }
  }

  ngAfterContentInit() {
    this.setComponentFactoryById(this.attribute.id);
  }

  private setComponentFactoryById(id: string) {
    if (!id || !this.checkForHexRegExp.test(id)) {
      throw new Error('id for attribute: ' + id);
    }
    const component = this.getAttr(this.attributesComponentList, id, 'component');
    if (!component) {
      // throw new Error('El id ' + id + ' no tiene componente');
      return;
    }
    this.entity = this.getAttr(this.attributesComponentList, id, 'entity');
    this.component = this.entry.createComponent(this._resolver.resolveComponentFactory(component));

    // setup component
    this.component.instance.config = this.attribute.config;
    this.component.instance.attribute$ = new BehaviorSubject(this.attribute);
    this.component.instance.isEntity = this.entity;
    this.component.instance.attribute = this.attribute;
    this.component.instance.attrValue = this.attribute.value;
    this.component.instance.attrValue$.next(this.attribute.value);
    this.component.instance.attrOldValue = this.attribute.value;
    this.component.instance.setTemplate(this.editMode);
    this.component.instance.canEdit = this.canEdit;
    this.component.instance.save = async ($event) => {
      console.log('OnSave', $event);

      // console.log('On Save', {
      //   $event,
      //   attrOldValue: this.component.instance.attrOldValue,
      //   valueEmitted: { value: this.component.instance.attrValue, options: $event.options, entity: this.entity }
      // });
      // // this.component.instance.attrOldValue = this.component.instance.attrValue;
      // this.save.emit({ value: this.component.instance.attrValue, options: $event.options, entity: this.entity });
      return true;
    };
    this.component.instance.cancel = () => {
      console.log('Canceled');
    };
  }

  // public async saveAndGoBack() {
  //   this.goBack.emit();
  //   console.log('saveAndGoBack');
  //   // const attrActive = this.attrQ.getActive();
  //   // await this.attrS.updateActiveAttr(attrActive.editValue, attrActive.updateOptions, this.entity);
  //   // this.component.instance.updateNewValue(attrActive.editValue, attrActive.updateOptions);
  // }

  // public async deleteAndGoBack() {
  //   this.goBack.emit();
  //   console.log('deleteAndGoBack');
  //   // const attrActive = this.attrQ.getActive();
  //   // await this.attrS.updateActiveAttr(attrActive.value, { delete: true }, this.entity);
  //   // this.component.instance.updateNewValue(undefined, { delete: true });
  // }

  // public async saveFromComponent($event) {
  //   console.log('$event save', $event);
  //   console.log('saveFromComponent');
  //   // await this.attrS.updateActiveAttr($event.value, $event.options, this.entity);
  //   // this.component.instance.updateNewValue($event.value, $event.options);
  // }

  private getAttr(attrs: any[], id: string, dd: string) {
    // const attr = attrs.find(x => x.id);
    // if (attr) { return attr[dd]; }
    const index = attrs.map(x => x.id).indexOf(id);
    if (index === -1) { return undefined; }
    return attrs[index][dd];
  }

}
