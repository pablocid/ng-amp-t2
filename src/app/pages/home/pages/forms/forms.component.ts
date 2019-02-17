import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/modules/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/modules/dynamic-form/models/field-config.interface';

export interface Product {
  id: number;
  price: number;
  name: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder
  ) { }
  public basicForm: FormGroup;

  public products: Product[] = [
    { id: 1, price: 100, name: 'laptop1' },
    { id: 2, price: 200, name: 'laptop2' },
    { id: 3, price: 300, name: 'laptop3' },
    { id: 4, price: 400, name: 'laptop4' },
    { id: 5, price: 500, name: 'laptop5' },
    { id: 6, price: 600, name: 'laptop6' },
    { id: 7, price: 700, name: 'laptop7' },
  ];




  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Last Name',
      name: 'lastname',
      placeholder: 'Enter your lastname',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'Cars',
      name: 'car',
      options: ['Audi', 'BMW', 'Mazda', 'Mercedez Benz'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];
  data = { name: 'Pablo', lastname: 'Cid', food: 'Coffee', car: 'BMW' };

  ngOnInit() {

    this.basicForm = this.fb.group({
      store: this.fb.group({
        branch: '',
        code: ''
      }),
      selector: this.createStock({}),
      // stock: this.fb.array([
      //   this.createStock({ product_id: 3, quantity: 50 }),
      //   this.createStock({ product_id: 4, quantity: 10 }),
      //   this.createStock({ product_id: 5, quantity: 60 })
      // ])
    });
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: parseInt(stock.quantity, 10) || 10
    });
  }

  onSubmit($event) {
    console.log(this.basicForm.value);
  }

  addStock(stock) {
    const control = this.basicForm.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup, index: number }) {
    const control = this.basicForm.get('stock') as FormArray;
    control.removeAt(index);
  }

  ngAfterViewInit() {
    // let previousValid = this.form.valid;
    // this.form.changes.subscribe(() => {
    //   if (this.form.valid !== previousValid) {
    //     previousValid = this.form.valid;
    //     this.form.setDisabled('submit', !previousValid);
    //   }
    // });

    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

}
