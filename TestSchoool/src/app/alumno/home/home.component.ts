import { DatePipe } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from '../alumno';
import { AlumnoService } from '../../Service/alumno.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  closeResult = '';
  alumnos: Alumno[] = [];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.getAllAlumno();
  }

  AddAlumno() {
    this.router.navigate(['AddAlumno']);
  }

  deleteAlumnoConfirmation(alumno: any) {
    this.modalService
      .open(MODALS['deleteModal'], {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.deleteAlumnoById(alumno);
        },
        (reason) => {}
      );
  }
  async getAllAlumno() {
    this.alumnoService.getAll().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }
  deleteAlumnoById(id: number) {
    this.alumnoService.delete(id).subscribe((res) => {
      this.alumnos = this.alumnos.filter((item) => item.idAlumno !== id);
      this.getAllAlumno();
    });
  }

  convertDate(date: Date) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yyyy-MM-dd');
  }
}
