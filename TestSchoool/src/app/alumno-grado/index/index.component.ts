import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlumnoGrado } from '../alumno-grado';
import { AlumnoGradoService } from 'src/app/Service/alumno-grado.service';
@Component({
  selector: 'ng-modal-confirm',
  template: `
    <div class="modal-header">
      <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
      <button
        type="button"
        class="btn close"
        aria-label="Close button"
        aria-describedby="modal-title"
        (click)="modal.dismiss('Cross click')"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to delete?</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        (click)="modal.dismiss('cancel click')"
      >
        CANCEL
      </button>
      <button
        type="button"
        ngbAutofocus
        class="btn btn-success"
        (click)="modal.close('Ok click')"
      >
        OK
      </button>
    </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) {}
}
const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponentAlumnoGrado implements OnInit {
  closeResult = '';
  alumnoGrados: AlumnoGrado[] = [];
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private alumnoGradoService: AlumnoGradoService
  ) {}

  ngOnInit(): void {
    this.getAllAlumnoGrado();
  }
  AddAlumnoGrado() {
    this.router.navigate(['AddAlumnoGrado']);
  }
  deleteAlumnoGradoConfirmation(grado: any) {
    this.modalService
      .open(MODALS['deleteModal'], {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.deleteAlumnoGradoById(grado);
        },
        (reason) => {}
      );
  }
  async getAllAlumnoGrado() {
    this.alumnoGradoService.getAll().subscribe((data: AlumnoGrado[]) => {
      this.alumnoGrados = data;
    });
  }
  deleteAlumnoGradoById(id: number) {
    this.alumnoGradoService.delete(id).subscribe((res) => {
      this.alumnoGrados = this.alumnoGrados.filter(
        (item) => item.idAlumnoGrado !== id
      );
      this.getAllAlumnoGrado();
    });
  }
}
