import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsInVideoComponent } from './keywords-in-video.component';

describe('KeywordsInVideoComponent', () => {
  let component: KeywordsInVideoComponent;
  let fixture: ComponentFixture<KeywordsInVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsInVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsInVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
