import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecards } from './homecards';

describe('Homecards', () => {
  let component: Homecards;
  let fixture: ComponentFixture<Homecards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homecards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
