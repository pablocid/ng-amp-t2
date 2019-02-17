import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatInputModule, MatListModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatBottomSheetModule, MatGridListModule, MatCardModule, MatDatepickerModule,
  MatNativeDateModule, MatFormFieldModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatSidenavModule, MatStepperModule,
  MatSliderModule, MatChipsModule, MatSlideToggleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
const mat = [
  FlexLayoutModule, MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatDialogModule, MatSlideToggleModule,
  MatInputModule, MatListModule, MatProgressSpinnerModule, MatSnackBarModule, MatBottomSheetModule, MatGridListModule,
  MatCardModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatTabsModule, MatSliderModule, MatFormFieldModule,
  MatAutocompleteModule, MatStepperModule, MatChipsModule, MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat
  ],
  exports: [
    ...mat
  ]
})
export class MaterialModule { }
