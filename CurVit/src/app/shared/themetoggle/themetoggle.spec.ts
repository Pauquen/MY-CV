import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Themetoggle } from './themetoggle';

describe('Themetoggle', () => {
  let component: Themetoggle;
  let fixture: ComponentFixture<Themetoggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Themetoggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Themetoggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
