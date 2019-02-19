import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:max-line-length
const rawAttrs = { '57c42f77c8307cd5b82f4486': { 'id': '57c42f77c8307cd5b82f4486', 'value': '57a8d8dcef4496137751cf1f', 'config': [{ 'id': 'name', 'string': 'reference' }, { 'id': 'datatype', 'string': 'reference' }, { 'id': 'input', 'reference': '57c431d5c8307cd5b82f448a' }, { 'id': 'description', 'string': 'Referencia entre un registro y una unidad experimental a través del ObjectID' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'shortName' }, { 'string': 'reference', 'id': 'schema_reference' }, { 'string': 'reference', 'id': 'identifyByAttrId' }] }, { 'id': 'shortName', 'string': 'plant code' }, { 'id': 'schema_reference', 'reference': '57a4e02ec830e2bdff1a1608' }, { 'id': 'identifyByAttrId', 'reference': '57c3583bc8307cd5b82f447d' }] }, '580c082b12e1240010cd9d64': { 'id': '580c082b12e1240010cd9d64', 'value': 'medio', 'config': [{ 'id': 'name', 'string': 'vigor' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Vigor de la planta' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'label', 'string': 'Vigor de la planta' }, { 'id': 'shortName', 'string': 'vigor' }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Vigor alto', 'id': 'alto' }, { 'string': 'Vigor medio', 'id': 'medio' }, { 'string': 'Vigor bajo', 'id': 'bajo' }] }] }, '580c121390cc2700100db1d3': { 'id': '580c121390cc2700100db1d3', 'value': 'conical', 'config': [{ 'id': 'name', 'string': 'forma_racimo' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Forma de racimo' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'listOfObj', 'id': 'options' }, { 'string': 'string', 'id': 'formType' }] }, { 'id': 'label', 'string': 'Forma de racimo' }, { 'id': 'shortName', 'string': 'racimo' }, { 'id': 'options', 'listOfObj': [{ 'string': 'racimo cilíndrico', 'id': 'cylindrical' }, { 'string': 'racimo alado', 'id': 'winged' }, { 'string': 'racimo cónico', 'id': 'conical' }, { 'string': 'racimo globoso', 'id': 'spherical' }, { 'string': 'otra forma', 'id': 'other_choice' }] }, { 'id': 'optionImages', 'listOfObj': [{ 'string': 'https://s3.amazonaws.com/vinetracker-images/cylindrical.png', 'id': 'cylindrical' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/winged.png', 'id': 'winged' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/conical.png', 'id': 'conical' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/spherical.png', 'id': 'spherical' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/other_choice.png', 'id': 'other_choice' }] }, { 'id': 'formType', 'string': 'imageList' }] }, '5851a6970cb9af0011197939': { 'id': '5851a6970cb9af0011197939', 'value': 'loose', 'config': [{ 'id': 'name', 'string': 'soltura_racimo' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Soltura o Densidad de racimo' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'label', 'string': 'Soltura de racimo' }, { 'id': 'shortName', 'string': 'soltura' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Muy suelto', 'id': 'very_loose' }, { 'string': 'Suelto', 'id': 'loose' }, { 'string': 'Mediano', 'id': 'medium' }, { 'string': 'Denso', 'id': 'dense' }, { 'string': 'Muy denso', 'id': 'very_dense' }] }] }, '5851a7fc0cb9af001119793a': { 'id': '5851a7fc0cb9af001119793a', 'value': 'medium', 'config': [{ 'id': 'name', 'string': 'tamano_racimo' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Tamaño del racimo' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'label', 'string': 'Tamaño del racimo' }, { 'id': 'shortName', 'string': 'tamaño' }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Muy pequeño', 'id': 'very_small' }, { 'string': 'Pequeño', 'id': 'small' }, { 'string': 'Mediano', 'id': 'medium' }, { 'string': 'grande', 'id': 'large' }, { 'string': 'Muy grande', 'id': 'very_large' }] }] }, '5851a9240cb9af001119793b': { 'id': '5851a9240cb9af001119793b', 'value': 'medium', 'config': [{ 'id': 'name', 'string': 'grosor_raquis' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Grosor del raquis' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'shortName', 'string': 'raquis' }, { 'id': 'label', 'string': 'Grosor del raquis' }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Delgado', 'id': 'small' }, { 'string': 'Medio', 'id': 'medium' }, { 'string': 'Grueso', 'id': 'large' }] }] }, '585185360cb9af0011197935': { 'id': '585185360cb9af0011197935', 'value': 'green', 'config': [{ 'id': 'name', 'string': 'color_racimo' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Color del racimo' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'listOfObj', 'id': 'options' }, { 'string': 'string', 'id': 'formType' }] }, { 'id': 'label', 'string': 'Color de racimo' }, { 'id': 'shortName', 'string': 'color' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Racimo color negro', 'id': 'black' }, { 'string': 'Racimo color rosado oscuro', 'id': 'dark_pink' }, { 'string': 'Racimo color rosado', 'id': 'pink' }, { 'string': 'Racimo color rojo', 'id': 'red' }, { 'string': 'Racimo color ambar', 'id': 'amber' }, { 'string': 'Racimo color verde', 'id': 'green' }] }, { 'id': 'optionImages', 'listOfObj': [{ 'string': 'https://s3.amazonaws.com/vinetracker-images/black.png', 'id': 'black' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/dark_pink.png', 'id': 'dark_pink' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/pink.png', 'id': 'pink' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/red.png', 'id': 'red' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/amber.png', 'id': 'amber' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/green.png', 'id': 'green' }] }, { 'id': 'formType', 'string': 'imageList' }] }, '580c0caf90cc2700100db1d2': { 'id': '580c0caf90cc2700100db1d2', 'value': 'other_choice', 'config': [{ 'id': 'name', 'string': 'forma_baya' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Forma de baya' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'listOfObj', 'id': 'options' }, { 'string': 'string', 'id': 'formType' }] }, { 'id': 'label', 'string': 'Forma de baya' }, { 'id': 'shortName', 'string': 'baya' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Baya alargada', 'id': 'oblong' }, { 'string': 'Baya elíptica', 'id': 'elliptic' }, { 'string': 'Baya redonda', 'id': 'round' }, { 'string': 'Baya ovoide', 'id': 'ovate' }, { 'string': 'Otra forma', 'id': 'other_choice' }] }, { 'id': 'optionImages', 'listOfObj': [{ 'string': 'https://s3.amazonaws.com/vinetracker-images/oblong.png', 'id': 'oblong' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/elliptic.png', 'id': 'elliptic' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/round.png', 'id': 'round' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/ovate.png', 'id': 'ovate' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/other_choice.png', 'id': 'other_choice' }] }, { 'id': 'formType', 'string': 'imageList' }] }, '5851a35c0cb9af0011197938': { 'id': '5851a35c0cb9af0011197938', 'value': 15, 'config': [{ 'id': 'name', 'string': 'calibre' }, { 'id': 'datatype', 'string': 'number' }, { 'id': 'description', 'string': 'Calibre de baya' }, { 'id': 'input', 'reference': '5808d0fdd48d17001006e43b' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'label' }, { 'string': 'number', 'id': 'maxVal' }, { 'string': 'number', 'id': 'minVal' }, { 'string': 'string', 'id': 'unit' }] }, { 'id': 'shortName', 'string': 'calibre' }, { 'id': 'label', 'string': 'Calibre de baya' }, { 'id': 'maxVal', 'number': 40 }, { 'id': 'minVal', 'number': 5 }, { 'id': 'unit', 'string': 'mm' }] }, '5851aa520cb9af001119793c': { 'id': '5851aa520cb9af001119793c', 'value': 'none', 'config': [{ 'id': 'name', 'string': 'sabor_baya' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Sabor de la baya' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'label', 'string': 'Sabor de la baya' }, { 'id': 'shortName', 'string': 'sabor' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Insípido', 'id': 'none' }, { 'string': 'Sabor moscatel', 'id': 'muscat' }, { 'string': 'Sabor foxy', 'id': 'foxy' }, { 'string': 'Otro sabor', 'id': 'other' }] }] }, '5851ab960cb9af001119793d': { 'id': '5851ab960cb9af001119793d', 'value': 'soft', 'config': [{ 'id': 'name', 'string': 'textura_baya' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Textura de la baya' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'formType' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'formType', 'string': 'optionsList' }, { 'id': 'label', 'string': 'Textura de la baya' }, { 'id': 'shortName', 'string': 'textura' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Blanda', 'id': 'soft' }, { 'string': 'Media', 'id': 'medium' }, { 'string': 'Firme', 'id': 'firm' }] }] }, '5851984a0cb9af0011197937': { 'id': '5851984a0cb9af0011197937', 'value': 'small_rudiment', 'config': [{ 'id': 'name', 'string': 'semilla' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Clasificación de rudimentos de semilla' }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }, { 'string': 'listOfObj', 'id': 'options' }, { 'string': 'string', 'id': 'formType' }] }, { 'id': 'label', 'string': 'Clasificación de semilla' }, { 'id': 'shortName', 'string': 'semilla' }, { 'id': 'formType', 'string': 'imageList' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Semilla lignificada', 'id': 'lignified_seed' }, { 'string': 'Rudimento grande', 'id': 'large_rudiment' }, { 'string': 'Rudimento mediano', 'id': 'medium_rudiment' }, { 'string': 'Rudimento pequeño', 'id': 'small_rudiment' }, { 'string': 'Apirenia', 'id': 'seedless' }] }, { 'id': 'optionImages', 'listOfObj': [{ 'string': 'https://s3.amazonaws.com/vinetracker-images/lignified_seed.png', 'id': 'lignified_seed' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/large_rudiment.png', 'id': 'large_rudiment' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/medium_rudiment.png', 'id': 'medium_rudiment' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/small_rudiment.png', 'id': 'small_rudiment' }, { 'string': 'https://s3.amazonaws.com/vinetracker-images/seedless.png', 'id': 'seedless' }] }] }, '5808de89832db50010d3192c': { 'id': '5808de89832db50010d3192c', 'value': ['browning', 'nonuniform_berry_size'], 'config': [{ 'id': 'name', 'string': 'observaciones' }, { 'id': 'datatype', 'string': 'list' }, { 'id': 'description', 'string': 'Lista de características presentes en la planta' }, { 'id': 'input', 'reference': '5808dc55832db50010d3192b' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'listOfObj', 'id': 'options' }, { 'string': 'string', 'id': 'label' }, { 'string': 'string', 'id': 'shortName' }] }, { 'id': 'options', 'listOfObj': [{ 'string': 'planta en desarrollo', 'id': 'under_development' }, { 'string': 'bayas con paredeamiento', 'id': 'browning' }, { 'string': 'bayas con russet', 'id': 'russet' }, { 'string': 'bayas con cracking', 'id': 'cracking' }, { 'string': 'racimos con millarandaje', 'id': 'millerandage' }, { 'string': 'racimos con corredura', 'id': 'coloure' }, { 'string': 'fácil separación baya pedúnculo', 'id': 'pedicel_detachment' }, { 'string': 'racimos con color no uniforme', 'id': 'nonuniform_bunch_color' }, { 'string': 'racimos con calibre no uniforme', 'id': 'nonuniform_berry_size' }] }, { 'id': 'label', 'string': 'Observaciones' }, { 'id': 'shortName', 'string': 'observaciones' }] }, '581a356c5c0eac001077ad6e': { 'id': '581a356c5c0eac001077ad6e', 'value': ['8c0028fb-c734-4b07-8cef-8aafc8d825c1.jpg'], 'config': [{ 'id': 'name', 'string': 'fotos_individuos' }, { 'id': 'datatype', 'string': 'list' }, { 'id': 'description', 'string': 'Fotos de plantas durante la temporada' }, { 'id': 'input', 'reference': '581a34e95c0eac001077ad6d' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'label' }, { 'string': 'number', 'id': 'quality' }, { 'string': 'number', 'id': 'width' }, { 'string': 'number', 'id': 'numOfPics' }, { 'string': 'string', 'id': 'picUrl' }] }, { 'id': 'shortName', 'string': 'fotos' }, { 'id': 'label', 'string': 'Fotografías' }, { 'id': 'quality', 'number': 80 }, { 'id': 'width', 'number': 1000 }, { 'id': 'numOfPics', 'number': 3 }, { 'id': 'picUrl', 'string': 'https://s3-sa-east-1.amazonaws.com/pmgv-files/' }], 'editValue': ['8c0028fb-c734-4b07-8cef-8aafc8d825c1.jpg'] }, '5bd14b4bd71ef20014e4b327': { 'id': '5bd14b4bd71ef20014e4b327', 'value': null, 'config': [{ 'id': 'name', 'string': 'selection_status' }, { 'id': 'description', 'string': 'Estatus de selección de la planta' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'label' }, { 'string': 'listOfObj', 'id': 'options' }] }, { 'id': 'input', 'reference': '57fe942a45be360010073dbc' }, { 'id': 'label', 'string': 'Estatus de selección' }, { 'id': 'options', 'listOfObj': [{ 'string': 'Planta seleccionada', 'id': 'selected' }, { 'string': 'Planta descartada', 'id': 'no_selected' }, { 'string': ' Planta en observación', 'id': 'observation' }] }, { 'id': 'datatype', 'string': 'string' }] }, '57c8a0cca774d31000b71cd4': { 'id': '57c8a0cca774d31000b71cd4', 'value': null, 'config': [{ 'id': 'name', 'string': 'field_notes' }, { 'id': 'datatype', 'string': 'string' }, { 'id': 'description', 'string': 'Anotaciones de campo' }, { 'id': 'input', 'reference': '57c3202cc8307cd5b82f4465' }, { 'id': 'keys', 'listOfObj': [{ 'string': 'string', 'id': 'shortName' }, { 'string': 'string', 'id': 'label' }] }, { 'id': 'shortName', 'string': 'notas' }, { 'id': 'label', 'string': 'Notas de campo' }] } };

@Component({
  selector: 'app-cidforms',
  templateUrl: './cidforms.component.html',
  styleUrls: ['./cidforms.component.scss']
})
export class CidformsComponent implements OnInit {
  public attributes = Object.keys(rawAttrs).map(x => rawAttrs[x]);
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



