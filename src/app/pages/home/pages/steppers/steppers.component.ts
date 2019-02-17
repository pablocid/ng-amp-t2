import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss']
})
export class SteppersComponent implements OnInit {
  firstFormGroup;
  secondFormGroup;
  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      emailCtrl: new FormControl()
    });

    this.secondFormGroup = new FormGroup({
      messageCtrl: new FormControl()
    });
  }

}
