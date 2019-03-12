import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneTemplateComponent } from './phone-template.component';

describe('PhoneTemplateComponent', () => {
  let component: PhoneTemplateComponent;
  let fixture: ComponentFixture<PhoneTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
