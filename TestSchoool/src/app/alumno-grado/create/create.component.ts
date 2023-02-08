import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnoGradoService } from 'src/app/Service/alumno-grado.service';
import { Alumno } from '../../alumno/alumno';
import { AlumnoService } from '../../Service/alumno.service';
import { Grado } from '../../grado/grado';
import { GradoService } from 'src/app/Service/grado.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponentAlumnoGrado implements OnInit {
  form!: FormGroup;
  alumnos: Alumno[] = [];
  grados: Grado[] = [];
  constructor(
    private router: Router,
    private alumnoGradoService: AlumnoGradoService,
    private alumnoService: AlumnoService,
    private gradoService: GradoService
  ) {}
  ngOnInit(): void {
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
    this.alumnoGradoService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/IndexAlumnoGrado');
    });
  }
}
