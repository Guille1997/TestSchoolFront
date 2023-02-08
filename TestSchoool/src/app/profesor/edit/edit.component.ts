import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profesor } from '../profesor';
import { ProfesorService } from '../../Service/profesor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  idProfesor!: number;
  profesor!: Profesor;
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesorService: ProfesorService
  ) {}

  ngOnInit(): void {
    this.idProfesor = this.route.snapshot.params['idProfesor'];

    this.profesorService.find(this.idProfesor).subscribe((data: Profesor) => {
      this.profesor = data;
    });

    this.form = new FormGroup({
      nombreProfesor: new FormControl('', [Validators.required]),
      apellidoProfesor: new FormControl('', Validators.required),
      generoProfesor: new FormControl('', Validators.required),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.profesorService
      .update(this.idProfesor, this.form.value)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/IndexProfesor');
      });
  }
}
