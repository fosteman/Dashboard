import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBarsComponent } from './keyword-bars.component';

describe('KeywordBarsComponent', () => {
  let component: KeywordBarsComponent;
  let fixture: ComponentFixture<KeywordBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
