import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourse } from './view-course';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ViewCourse', () => {
  let component: ViewCourse;
  let fixture: ComponentFixture<ViewCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCourse],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
