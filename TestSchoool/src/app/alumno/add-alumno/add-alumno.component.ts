import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnoService } from '../../Service/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
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
    this.alumnoService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/Home');
    });
  }
}
