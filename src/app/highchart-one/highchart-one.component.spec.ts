import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartOneComponent } from './highchart-one.component';

describe('HighchartOneComponent', () => {
  let component: HighchartOneComponent;
  let fixture: ComponentFixture<HighchartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
