import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

export interface IOptionsBottomsheetData {
  header?: string;
  message?: string;
  buttons?: IOptionsBottomsheetButton[];
}

export interface IOptionsBottomsheetButton {
  text: string;
  icon?: string;
  handler: () => any;
}

@Component({
  selector: 'app-options-bottomsheet',
  templateUrl: './options-bottomsheet.component.html',
  styleUrls: ['./options-bottomsheet.component.css']
})
export class OptionsBottomsheetComponent implements OnInit {

  constructor(
    public dialogRef: MatBottomSheetRef<OptionsBottomsheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: IOptionsBottomsheetData
  ) { }

  ngOnInit() {
  }

  option(fn) {
    fn();
    this.dialogRef.dismiss();
  }

}
