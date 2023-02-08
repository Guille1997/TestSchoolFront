import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from 'src/app/Service/profesor.service';
import { Profesor } from '../profesor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  idProfesor!: number;
  profesor!: Profesor;
  profesorDetail: any = [];
  constructor(
    public profesorService: ProfesorService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getProfesorDetailById();
  }
  getProfesorDetailById() {
    this.idProfesor = this.route.snapshot.params['idProfesor'];
    this.profesorService.find(this.idProfesor).subscribe((data: Profesor) => {
      this.profesor = data;
    });
  }
}
