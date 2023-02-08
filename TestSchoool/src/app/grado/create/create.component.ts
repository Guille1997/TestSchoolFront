import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GradoService } from 'src/app/Service/grado.service';

import { Profesor } from 'src/app/profesor/profesor';
import { ProfesorService } from 'src/app/Service/profesor.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponentGrado implements OnInit {
  form!: FormGroup;

  profesores: Profesor[] = [];
  constructor(
    private router: Router,
    private gradoService: GradoService,
    private profesorService: ProfesorService
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      nombreGrado: new FormControl('', [Validators.required]),
      idProfesor: new FormControl('', [Validators.required]),
    });

    this.getAllProfesor();
  }

  async getAllProfesor() {
    this.profesorService.getAll().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }

  get f() {
    return this.form.controls;
  }
  submit() {
    this.gradoService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/IndexGrado');
    });
  }
}
