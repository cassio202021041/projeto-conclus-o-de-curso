import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAlunoComponent } from './edit-aluno.component';



describe('EditAlunoComponent', () => {
  let component: EditAlunoComponent;
  let fixture: ComponentFixture<EditAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAlunoComponent]
    });
    fixture = TestBed.createComponent(EditAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
