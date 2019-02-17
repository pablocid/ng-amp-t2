import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidforms',
  templateUrl: './cidforms.component.html',
  styleUrls: ['./cidforms.component.scss']
})
export class CidformsComponent implements OnInit {

  attr1 = {
    config: [
      { id: 'name', string: 'field_notes' },
      { id: 'datatype', string: 'string' },
      { id: 'description', string: 'Anotaciones de campo' },
      { id: 'input', reference: '57c3202cc8307cd5b82f4465' },
      { id: 'keys', listOfObj: [{ string: 'string', id: 'shortName' }, { string: 'string', id: 'label' }] },
      { id: 'shortName', string: 'notas' },
      { id: 'label', string: 'Notas de campo' },
    ],
    id: '57c8a0cca774d31000b71cd4',
    value: 'A very good note'
  };

  attr2 = {
    config: [
      { id: 'name', string: 'selection_status' },
      { id: 'description', string: 'Estatus de selección de la planta' },
      { id: 'keys', listOfObj: [{ string: 'string', id: 'label' }, { string: 'listOfObj', id: 'options' }] },
      { id: 'input', reference: '57fe942a45be360010073dbc' },
      { id: 'label', string: 'Estatus de selección' },
      {
        id: 'options', listOfObj: [
          { string: 'Planta seleccionada', id: 'selected' },
          { string: 'Planta descartada', id: 'no_selected' },
          { string: ' Planta en observación', id: 'observation' },
        ]
      },
      { id: 'datatype', string: 'string' },
    ],
    id: '5bd14b4bd71ef20014e4b327',
    value: 'observation'
  };

  constructor() { }

  ngOnInit() {
  }

  assessAttr($event) {
    console.log('assessAttr', $event);
  }

  saveAttr($event) {
    console.log($event);
  }

}
