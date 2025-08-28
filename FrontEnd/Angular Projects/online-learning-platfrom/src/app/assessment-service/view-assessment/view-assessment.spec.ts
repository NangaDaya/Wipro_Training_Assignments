import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssessment } from './view-assessment';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ViewAssessment', () => {
  let component: ViewAssessment;
  let fixture: ComponentFixture<ViewAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAssessment],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssessment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
