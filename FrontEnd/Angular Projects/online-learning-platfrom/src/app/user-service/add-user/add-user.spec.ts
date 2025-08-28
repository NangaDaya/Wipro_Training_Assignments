import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUser } from './add-user';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AddUser', () => {
  let component: AddUser;
  let fixture: ComponentFixture<AddUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUser],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
