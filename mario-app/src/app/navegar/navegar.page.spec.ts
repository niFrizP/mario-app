import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavegarPage } from './navegar.page';

describe('NavegarPage', () => {
  let component: NavegarPage;
  let fixture: ComponentFixture<NavegarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavegarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
