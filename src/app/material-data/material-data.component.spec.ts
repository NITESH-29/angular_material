import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDataComponent } from './material-data.component';

describe('MaterialDataComponent', () => {
  let component: MaterialDataComponent;
  let fixture: ComponentFixture<MaterialDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
