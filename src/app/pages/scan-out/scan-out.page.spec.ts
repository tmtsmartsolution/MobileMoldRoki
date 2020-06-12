import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanOutPage } from './scan-out.page';

describe('ScanOutPage', () => {
  let component: ScanOutPage;
  let fixture: ComponentFixture<ScanOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
