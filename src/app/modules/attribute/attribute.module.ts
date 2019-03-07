import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageToDataUrlModule } from 'ngx-image2dataurl';
import { AttributeComponent } from './attribute.component';
import { BaseComponent } from './base/base.component';
import { SelectionComponent } from './base/selection/selection.component';
import { NumericListComponent } from './base/numeric-list/numeric-list.component';
import { MultipleSelectionComponent } from './base/multiple-selection/multiple-selection.component';
import { NotesComponent } from './base/notes/notes.component';
import { SelectionImgComponent } from './base/selection-img/selection-img.component';
import { ImageCaptureComponent } from './base/image-capture/image-capture.component';
import { ImagePickerComponent } from 'src/app/components/image-picker/image-picker.component';
import { OptionsBottomsheetComponent } from './components/options-bottomsheet/options-bottomsheet.component';

const inputs = [
  BaseComponent, SelectionComponent,
  NumericListComponent, MultipleSelectionComponent,
  NotesComponent, SelectionImgComponent, ImageCaptureComponent,
  OptionsBottomsheetComponent
];

import {
  MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatInputModule, MatListModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatBottomSheetModule, MatGridListModule, MatCardModule, MatDatepickerModule,
  MatNativeDateModule, MatFormFieldModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatSidenavModule, MatStepperModule,
  MatSliderModule, MatChipsModule, MatSlideToggleModule
} from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';
const mat = [
  MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatSlideToggleModule,
  MatInputModule, MatListModule, MatProgressSpinnerModule, MatSnackBarModule, MatBottomSheetModule, MatGridListModule,
  MatCardModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatTabsModule, MatSliderModule, MatFormFieldModule,
  MatAutocompleteModule, MatStepperModule, MatChipsModule, MatSidenavModule
];

@NgModule({
  declarations: [
    AttributeComponent,
    ImagePickerComponent,
    ...inputs
  ],
  imports: [
    CommonModule,
    ImageToDataUrlModule,
    FormsModule,
    ...mat
  ],
  exports: [
    AttributeComponent
  ],
  entryComponents: [
    ...inputs
  ]
})
export class DynamicAttributesFormsModule { }
