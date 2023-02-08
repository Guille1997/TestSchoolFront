import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../Service/alumno.service';
import { Alumno } from '../alumno';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-view-alumno',
  templateUrl: './view-alumno.component.html',
  styleUrls: ['./view-alumno.component.css'],
})
export class ViewAlumnoComponent implements OnInit {
  idAlumno!: number;
  alumno!: Alumno;
  alumnoDetail: any = [];
  constructor(
    public alumnoService: AlumnoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getAlumnoDetailById();
  }

  getAlumnoDetailById() {
    this.idAlumno = this.route.snapshot.params['idAlumno'];
    this.alumnoService.find(this.idAlumno).subscribe((data: Alumno) => {
      this.alumno = data;
    });
  }
  convertDate(date: Date) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yyyy-MM-dd');
  }
}
