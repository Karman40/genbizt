import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyugdijComponent } from './nyugdij.component';

describe('NyugdijComponent', () => {
  let component: NyugdijComponent;
  let fixture: ComponentFixture<NyugdijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyugdijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyugdijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
