import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychurchAdminComponent } from './mychurch-admin.component';

describe('MychurchAdminComponent', () => {
  let component: MychurchAdminComponent;
  let fixture: ComponentFixture<MychurchAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychurchAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychurchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
