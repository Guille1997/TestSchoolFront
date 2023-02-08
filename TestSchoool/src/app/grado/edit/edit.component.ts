import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Grado } from '../grado';
import { GradoService } from '../../Service/grado.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Profesor } from 'src/app/profesor/profesor';
import { ProfesorService } from 'src/app/Service/profesor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponentGrado implements OnInit {
  idGrado!: number;
  grado!: Grado;
  form!: FormGroup;
  profesores: Profesor[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gradoService: GradoService,
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    this.idGrado = this.route.snapshot.params['idGrado'];

    this.gradoService.find(this.idGrado).subscribe((data: Grado) => {
      this.grado = data;
    });

    this.form = new FormGroup({
      nombreGrado: new FormControl('', [Validators.required]),
      idProfesor: new FormControl('', Validators.required),
    });
    this.getAllProfesor();
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.gradoService
      .update(this.idGrado, this.form.value)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/IndexGrado');
      });
  }
  async getAllProfesor() {
    this.profesorService.getAll().subscribe((data: Profesor[]) => {
      this.profesores = data;
    });
  }
}
