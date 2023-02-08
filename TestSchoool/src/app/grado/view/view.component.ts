import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradoService } from 'src/app/Service/grado.service';
import { Grado } from '../grado';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponentGrado implements OnInit {
  idGrado!: number;
  grado!: Grado;
  constructor(
    public gradoService: GradoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getGradoDetailById();
  }
  getGradoDetailById() {
    this.idGrado = this.route.snapshot.params['idGrado'];
    this.gradoService.find(this.idGrado).subscribe((data: Grado) => {
      this.grado = data;
    });
  }
}
