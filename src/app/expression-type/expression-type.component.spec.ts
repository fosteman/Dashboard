import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionTypeComponent } from './expression-type.component';

describe('ExpressionTypeComponent', () => {
  let component: ExpressionTypeComponent;
  let fixture: ComponentFixture<ExpressionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
