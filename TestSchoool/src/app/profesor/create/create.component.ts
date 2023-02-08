import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfesorService } from 'src/app/Service/profesor.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private profesorService: ProfesorService
  ) {}
  ngOnInit(): void {
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
    this.profesorService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('/IndexProfesor');
    });
  }
}
