import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedDBExampleComponent } from './indexed-dbexample.component';

describe('IndexedDBExampleComponent', () => {
  let component: IndexedDBExampleComponent;
  let fixture: ComponentFixture<IndexedDBExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexedDBExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedDBExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
