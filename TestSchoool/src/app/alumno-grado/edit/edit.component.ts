import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnoGrado } from '../alumno-grado';
import { AlumnoGradoService } from '../../Service/alumno-grado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Alumno } from '../../alumno/alumno';
import { AlumnoService } from '../../Service/alumno.service';
import { Grado } from '../../grado/grado';
import { GradoService } from 'src/app/Service/grado.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponentAlumnoGrado implements OnInit {
  idAlumnoGrado!: number;
  alumnoGrado!: AlumnoGrado;
  alumnos: Alumno[] = [];
  grados: Grado[] = [];
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alumnoGradoService: AlumnoGradoService,
    private alumnoService: AlumnoService,
    private gradoService: GradoService
  ) {}

  ngOnInit(): void {
    this.idAlumnoGrado = this.route.snapshot.params['idAlumnoGrado'];

    this.alumnoGradoService
      .find(this.idAlumnoGrado)
      .subscribe((data: AlumnoGrado) => {
        this.alumnoGrado = data;
      });

    this.form = new FormGroup({
      idAlumno: new FormControl('', [Validators.required]),
      idGrado: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required),
    });
    this.getAllAlumno();
    this.getAllGrado();
  }
  get f() {
    return this.form.controls;
  }
  async getAllAlumno() {
    this.alumnoService.getAll().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  async getAllGrado() {
    this.gradoService.getAll().subscribe((data: Grado[]) => {
      this.grados = data;
    });
  }
  submit() {
    this.alumnoGradoService
      .update(this.idAlumnoGrado, this.form.value)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/IndexAlumnoGrado');
      });
  }
}
