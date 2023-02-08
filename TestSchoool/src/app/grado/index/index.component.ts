import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Grado } from '../grado';
import { GradoService } from 'src/app/Service/grado.service';
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
export class IndexComponentGrado implements OnInit {
  closeResult = '';
  grados: Grado[] = [];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private gradoService: GradoService
  ) {}
  ngOnInit(): void {
    this.getAllGrado();
  }
  AddGrado() {
    this.router.navigate(['AddGrado']);
  }
  deleteGradoConfirmation(grado: any) {
    this.modalService
      .open(MODALS['deleteModal'], {
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.deleteGradoById(grado);
        },
        (reason) => {}
      );
  }
  async getAllGrado() {
    this.gradoService.getAll().subscribe((data: Grado[]) => {
      this.grados = data;
    });
  }

  deleteGradoById(id: number) {
    this.gradoService.delete(id).subscribe((res) => {
      this.grados = this.grados.filter((item) => item.idGrado !== id);
      this.getAllGrado();
    });
  }
}
