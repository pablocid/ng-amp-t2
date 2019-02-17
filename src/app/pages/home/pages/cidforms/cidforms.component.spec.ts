import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidformsComponent } from './cidforms.component';

describe('CidformsComponent', () => {
  let component: CidformsComponent;
  let fixture: ComponentFixture<CidformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
