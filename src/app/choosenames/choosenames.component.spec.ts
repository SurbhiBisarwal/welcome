import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenamesComponent } from './choosenames.component';

describe('ChoosenamesComponent', () => {
  let component: ChoosenamesComponent;
  let fixture: ComponentFixture<ChoosenamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
