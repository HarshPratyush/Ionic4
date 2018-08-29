import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProfilePage } from './health-profile.page';

describe('HealthProfilePage', () => {
  let component: HealthProfilePage;
  let fixture: ComponentFixture<HealthProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
