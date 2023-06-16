import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtxEditorComponent } from './otx-editor.component';

describe('OtxEditorComponent', () => {
  let component: OtxEditorComponent;
  let fixture: ComponentFixture<OtxEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtxEditorComponent]
    });
    fixture = TestBed.createComponent(OtxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
