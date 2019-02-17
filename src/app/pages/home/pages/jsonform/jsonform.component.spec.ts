import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonformComponent } from './jsonform.component';

describe('JsonformComponent', () => {
  let component: JsonformComponent;
  let fixture: ComponentFixture<JsonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
