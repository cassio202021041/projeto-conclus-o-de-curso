import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCursoComponent } from './add-curso.component';



describe('AddCursoComponent', () => {
  let component: AddCursoComponent;
  let fixture: ComponentFixture<AddCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCursoComponent]
    });
    fixture = TestBed.createComponent(AddCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
