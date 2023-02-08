import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alumno } from '../alumno';
import { AlumnoService } from '../../Service/alumno.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css'],
})
export class EditAlumnoComponent implements OnInit {
  idAlumno!: number;
  alumno!: Alumno;
  form!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.idAlumno = this.route.snapshot.params['idAlumno'];

    this.alumnoService.find(this.idAlumno).subscribe((data: Alumno) => {
      this.alumno = data;
    });

    this.form = new FormGroup({
      nombreAlumno: new FormControl('', [Validators.required]),
      apellidoAlumno: new FormControl('', Validators.required),
      generoAlumno: new FormControl('', Validators.required),
      fechaNac: new FormControl('', Validators.required),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.alumnoService
      .update(this.idAlumno, this.form.value)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/Home');
      });
  }

  convertDate(date: Date) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'dd-mm-aaaa');
  }
}
