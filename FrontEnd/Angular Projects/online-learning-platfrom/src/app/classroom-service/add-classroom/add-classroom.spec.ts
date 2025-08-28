import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassroom } from './add-classroom';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AddClassroom', () => {
  let component: AddClassroom;
  let fixture: ComponentFixture<AddClassroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClassroom],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
