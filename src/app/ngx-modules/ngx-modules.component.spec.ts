import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxModulesComponent } from './ngx-modules.component';

describe('NgxModulesComponent', () => {
  let component: NgxModulesComponent;
  let fixture: ComponentFixture<NgxModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
