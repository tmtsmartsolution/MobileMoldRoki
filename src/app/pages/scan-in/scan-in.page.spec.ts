import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanInPage } from './scan-in.page';

describe('ScanInPage', () => {
  let component: ScanInPage;
  let fixture: ComponentFixture<ScanInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
