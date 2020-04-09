import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FileviewerPage } from './fileviewer.page';

describe('FileviewerPage', () => {
  let component: FileviewerPage;
  let fixture: ComponentFixture<FileviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileviewerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FileviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
