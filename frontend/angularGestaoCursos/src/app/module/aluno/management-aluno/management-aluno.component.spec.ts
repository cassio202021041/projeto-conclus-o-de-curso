import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementAlunoComponent } from './management-aluno.component';


describe('ManagementAlunoComponent', () => {
  let component: ManagementAlunoComponent;
  let fixture: ComponentFixture<ManagementAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementAlunoComponent]
    });
    fixture = TestBed.createComponent(ManagementAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
