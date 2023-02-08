import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Profesor } from '../profesor';
import { ProfesorService } from 'src/app/Service/profesor.service';
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
export class IndexComponent implements OnInit {
  closeResult = '';
  profesores: Profesor[] = [];
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private profesorService: ProfesorService
  ) {}
  ngOnInit(): void {
    this.getAllProfesor();
  }
  AddProfesor() {
    this.router.navigate(['AddProfesor']);
  }
  deleteProfesorConfirmation(profesor: any) {
    this.modalService
      .open(MODALS['deleteModal'], {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.deleteProfesorById(profesor);
        },
        (reason) => {}
      );
  }
  async getAllProfesor() {
    this.profesorService.getAll().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }
  deleteProfesorById(id: number) {
    this.profesorService.delete(id).subscribe((res) => {
      this.profesores = this.profesores.filter(
        (item) => item.idProfesor !== id
      );
      this.getAllProfesor();
    });
  }
}
