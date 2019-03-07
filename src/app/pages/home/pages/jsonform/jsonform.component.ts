import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.scss']
})
export class JsonformComponent implements OnInit {
  data;
  constructor() { }

  exampleJsonObject = {
    'first_name': 'Jane', 'last_name': 'Doe', 'age': 25, 'is_company': false,
    'address': {
      'street_1': '123 Main St.', 'street_2': null,
      'city': 'Las Vegas', 'state': 'NV', 'zip_code': '89123'
    },
    'phone_numbers': [
      { 'number': '702-123-4567', 'type': 'cell' },
      { 'number': '702-987-6543', 'type': 'work' }
    ], 'notes': ''
  };

  form = {
    'schema': {
      'type': 'object',
      'properties': {
        'first_name': { 'type': 'string' },
        'last_name': { 'type': 'string' },
        'address': {
          'type': 'object',
          'properties': {
            'street_1': { 'type': 'string' },
            'street_2': { 'type': 'string' },
            'city': { 'type': 'string' },
            'state': {
              'type': 'string',
              'enum': ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE',
                'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA',
                'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS',
                'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD',
                'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
            },
            'zip_code': { 'type': 'string' }
          }
        },
        'birthday': { 'type': 'string' },
        'notes': { 'type': 'string' },
        'phone_numbers': {
          'type': 'array',
          'items': {
            'type': 'object',
            'properties': {
              'type': { 'type': 'string', 'enum': ['cell', 'home', 'work'] },
              'number': { 'type': 'string' }
            },
            'required': ['type', 'number']
          }
        }
      },
      'required': ['last_name']
    },
    'layout': [
      { 'type': 'flex', 'flex-flow': 'row wrap', 'items': ['first_name', 'last_name'] },
      { 'key': 'address.street_1', 'title': 'Address', 'placeholder': 'Street' },
      { 'key': 'address.street_2', 'notitle': true },
      {
        'type': 'div',
        'display': 'flex',
        'flex-direction': 'row',
        'items': [
          {
            'key': 'address.city', 'flex': '3 3 150px',
            'notitle': true, 'placeholder': 'City'
          },
          {
            'key': 'address.state', 'flex': '1 1 50px',
            'notitle': true, 'placeholder': 'State'
          },
          {
            'key': 'address.zip_code', 'flex': '2 2 100px',
            'notitle': true, 'placeholder': 'Zip Code'
          }
        ]
      },
      { 'key': 'birthday', 'type': 'date' },
      {
        'key': 'phone_numbers',
        'type': 'array',
        'listItems': 3,
        'items': [{
          'type': 'div',
          'displayFlex': true,
          'flex-direction': 'row',
          'items': [
            {
              'key': 'phone_numbers[].type', 'flex': '1 1 50px',
              'notitle': true, 'placeholder': 'Type'
            },
            {
              'key': 'phone_numbers[].number', 'flex': '4 4 200px',
              'notitle': true, 'placeholder': 'Phone Number'
            }
          ]
        }]
      },
      {
        'type': 'section',
        'title': 'Notes',
        'expandable': true,
        'expanded': false,
        'items': [{ 'key': 'notes', 'type': 'textarea', 'notitle': true }]
      }
    ],
    // 'data': {
    //   'first_name': 'Jane',
    //   'last_name': 'Doe',
    //   'address': {
    //     'street_1': '123 Main St.',
    //     'city': 'Las Vegas',
    //     'state': 'NV',
    //     'zip_code': '89123'
    //   },
    //   'birthday': '1999-09-09',
    //   'phone_numbers': [
    //     { 'type': 'cell', 'number': '702-123-4567' },
    //     { 'type': 'work', 'number': '702-987-6543' }
    //   ],
    //   'notes': '(This is an example of an uninteresting note.)'
    // }
  };
  form_ = {
    'schema': {
      'title': 'Who\'s your favorite captain?',
      'description': 'Demonstrates different ways to create select controls from a list of values.',
      'type': 'object',
      'properties': {
        'captain1': {
          'title': 'Favorite captain 1',
          'description': 'enum array in schema (JSON Schema v1+)',
          'type': 'string',
          'enum': ['William Shatner',
            'Patrick Stewart',
            'John Barrowman',
            'Nathan Fillion']
        },
        'captain2': {
          'title': 'Favorite captain 2',
          'description': 'oneOf array with enum items in schema (JSON Schema v4+)',
          'type': 'string',
          'oneOf': [
            { 'title': 'James T. Kirk', 'enum': ['William Shatner'] },
            { 'title': 'Jean-Luc Picard', 'enum': ['Patrick Stewart'] },
            { 'title': 'Jack Harkness', 'enum': ['John Barrowman'] },
            { 'title': 'Malcolm Reynolds', 'enum': ['Nathan Fillion'] }
          ]
        },
        'captain3': {
          'title': 'Favorite captain 3',
          'description': 'oneOf array with const items in schema (JSON Schema v6+)',
          'type': 'string',
          'oneOf': [
            { 'title': 'James T. Kirk', 'const': 'William Shatner' },
            { 'title': 'Jean-Luc Picard', 'const': 'Patrick Stewart' },
            { 'title': 'Jack Harkness', 'const': 'John Barrowman' },
            { 'title': 'Malcolm Reynolds', 'const': 'Nathan Fillion' }
          ]
        },
        'captain4': {
          'title': 'Favorite captain 4',
          // tslint:disable-next-line:max-line-length
          'description': 'titleMap array in layout (<a href="http://schemaform.io/examples/bootstrap-example.html#/65b7b86938bddeb30b149d47bd595f56">Angular Schema Form</a>)',
          'type': 'string'
        },
        'captain5': {
          'title': 'Favorite captain 5',
          // tslint:disable-next-line:max-line-length
          'description': 'enum + enumNames in schema (<a href="https://mozilla-services.github.io/react-jsonschema-form/">React jsonschema form</a>)',
          'type': 'string',
          'enum': ['William Shatner',
            'Patrick Stewart',
            'John Barrowman',
            'Nathan Fillion'],
          'enumNames': ['James T. Kirk',
            'Jean-Luc Picard',
            'Jack Harkness',
            'Malcolm Reynolds']
        },
        'captain6': {
          'title': 'Favorite captain 6',
          // tslint:disable-next-line:max-line-length
          'description': 'titleMap object in layout (<a href="http://ulion.github.io/jsonform/playground/?example=fields-select">JSON Form</a>)',
          'type': 'string'
        },
        'captain7': {
          'title': 'Favorite captain 7',
          'description': 'flat titleMap array with groups in layout',
          'type': 'string'
        },
        'captain8': {
          'title': 'Favorite captain 8',
          'description': 'hierarchical titleMap array in layout',
          'type': 'string'
        },
        'captain9': {
          'title': 'Favorite captain 9',
          'description': 'oneOf array with <strong>title: "group: name"</strong> in schema',
          'type': 'string',
          'oneOf': [
            { 'title': 'Star Trek: James T. Kirk', 'const': 'William Shatner' },
            { 'title': 'Star Trek: Jean-Luc Picard', 'const': 'Patrick Stewart' },
            { 'title': 'Torchwood: Jack Harkness', 'const': 'John Barrowman' },
            { 'title': 'Firefly: Malcolm Reynolds', 'const': 'Nathan Fillion' }
          ]
        }
      }
    },
    'layout': [
      { 'widget': 'message', 'message': '<h3>Values only</h3>' },
      'captain1',
      { 'widget': 'message', 'message': '<h3>Names &amp; Values</h3>' },
      'captain2',
      'captain3',
      {
        'key': 'captain4',
        'titleMap': [
          { 'name': 'James T. Kirk', 'value': 'William Shatner' },
          { 'name': 'Jean-Luc Picard', 'value': 'Patrick Stewart' },
          { 'name': 'Jack Harkness', 'value': 'John Barrowman' },
          { 'name': 'Malcolm Reynolds', 'value': 'Nathan Fillion' }
        ]
      },
      'captain5',
      {
        'key': 'captain6',
        'titleMap': {
          'William Shatner': 'James T. Kirk',
          'Patrick Stewart': 'Jean-Luc Picard',
          'John Barrowman': 'Jack Harkness',
          'Nathan Fillion': 'Malcolm Reynolds'
        }
      },
      { 'widget': 'message', 'message': '<h3>Groups, Names, &amp; Values</h3>' },
      {
        'key': 'captain7',
        'titleMap': [
          { 'group': 'Star Trek', 'name': 'James T. Kirk', 'value': 'William Shatner' },
          { 'group': 'Star Trek', 'name': 'Jean-Luc Picard', 'value': 'Patrick Stewart' },
          { 'group': 'Torchwood', 'name': 'Jack Harkness', 'value': 'John Barrowman' },
          { 'group': 'Firefly', 'name': 'Malcolm Reynolds', 'value': 'Nathan Fillion' }
        ]
      },
      {
        'key': 'captain8',
        'titleMap': [
          {
            'group': 'Star Trek',
            'items': [{ 'name': 'James T. Kirk', 'value': 'William Shatner' },
            { 'name': 'Jean-Luc Picard', 'value': 'Patrick Stewart' }]
          },
          {
            'group': 'Torchwood',
            'items': [{ 'name': 'Jack Harkness', 'value': 'John Barrowman' }]
          },
          {
            'group': 'Firefly',
            'items': [{ 'name': 'Malcolm Reynolds', 'value': 'Nathan Fillion' }]
          }
        ]
      },
      'captain9'
    ]
  };
  form__ = {
    'schema': {
      'type': 'object',
      'title': 'Comment',
      'properties': {
        'name': {
          'title': 'Name',
          'type': 'string'
        },
        'email': {
          'title': 'Email',
          'type': 'string',
          'pattern': '^\\S+@\\S+$',
          'description': 'Email will be used for evil.'
        },
        'comment': {
          'title': 'Comment',
          'type': 'string',
          'maxLength': 20,
          'validationMessage': 'Don\'t be greedy!'
        }
      },
      'required': [
        'name',
        'email',
        'comment'
      ]
    },
    'form': [
      {
        'type': 'help',
        'helpvalue': '<div class="alert alert-info">Grid it up with bootstrap</div>'
      },
      {
        'type': 'section',
        'htmlClass': 'row',
        'items': [
          {
            'type': 'section',
            'htmlClass': 'col-xs-6',
            'items': [
              'name'
            ]
          },
          {
            'type': 'section',
            'htmlClass': 'col-xs-6',
            'items': [
              'email'
            ]
          }
        ]
      },
      {
        'key': 'comment',
        'type': 'textarea',
        'placeholder': 'Make a comment'
      },
      {
        'type': 'submit',
        'style': 'btn-info',
        'title': 'OK'
      }
    ]
  };

  ngOnInit() {
  }

  yourOnSubmitFn($event) {
    console.log($event);
    this.data = $event;
  }

  get code() {
    return JSON.stringify(this.data, null, 2);
  }

  set code(v) {
    try {
      this.data = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }

}
