import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoGradoService } from 'src/app/Service/alumno-grado.service';
import { AlumnoGrado } from '../alumno-grado';
import { GradoService } from 'src/app/Service/grado.service';
import { Grado } from '../../grado/grado';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponentAlumnoGrado implements OnInit {
  idAlumnoGrado!: number;
  alumnoGrado!: AlumnoGrado;
  idGrado!: number;
  grado!: Grado;
  constructor(
    public gradoService: GradoService,
    public alumnoGradoService: AlumnoGradoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getGradoDetailById();
    this.getAlumnoGradoDetailById();
  }
  getAlumnoGradoDetailById() {
    this.idAlumnoGrado = this.route.snapshot.params['idAlumnoGrado'];
    this.alumnoGradoService
      .find(this.idAlumnoGrado)
      .subscribe((data: AlumnoGrado) => {
        this.alumnoGrado = data;
      });
  }
  getGradoDetailById() {
    this.idGrado = this.route.snapshot.params['idGrado'];
    this.gradoService.find(this.idGrado).subscribe((data: Grado) => {
      this.grado = data;
    });
  }
}
