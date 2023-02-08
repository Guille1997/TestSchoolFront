import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent } from './alumno/add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './alumno/edit-alumno/edit-alumno.component';
import { HomeComponent } from './alumno/home/home.component';
import { ViewAlumnoComponent } from './alumno/view-alumno/view-alumno.component';
import { CreateComponent } from './profesor/create/create.component';
import { EditComponent } from './profesor/edit/edit.component';
import { IndexComponent } from './profesor/index/index.component';
import { ViewComponent } from './profesor/view/view.component';
import { IndexComponentGrado } from './grado/index/index.component';
import { ViewComponentGrado } from './grado/view/view.component';
import { CreateComponentGrado } from './grado/create/create.component';
import { EditComponentGrado } from './grado/edit/edit.component';
import { IndexComponentAlumnoGrado } from './alumno-grado/index/index.component';
import { ViewComponentAlumnoGrado } from './alumno-grado/view/view.component';
import { CreateComponentAlumnoGrado } from './alumno-grado/create/create.component';
import { EditComponentAlumnoGrado } from './alumno-grado/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'ViewAlumno/:idAlumno', component: ViewAlumnoComponent },
  { path: 'AddAlumno', component: AddAlumnoComponent },
  { path: 'EditAlumno/:idAlumno', component: EditAlumnoComponent },
  { path: 'IndexProfesor', component: IndexComponent },
  { path: 'ViewProfesor/:idProfesor', component: ViewComponent },
  { path: 'AddProfesor', component: CreateComponent },
  { path: 'EditProfesor/:idProfesor', component: EditComponent },
  { path: 'IndexGrado', component: IndexComponentGrado },
  { path: 'ViewGrado/:idGrado', component: ViewComponentGrado },
  { path: 'AddGrado', component: CreateComponentGrado },
  { path: 'EditGrado/:idGrado', component: EditComponentGrado },
  { path: 'IndexAlumnoGrado', component: IndexComponentAlumnoGrado },
  {
    path: 'ViewAlumnoGrado/:idAlumnoGrado',
    component: ViewComponentAlumnoGrado,
  },
  { path: 'AddAlumnoGrado', component: CreateComponentAlumnoGrado },
  {
    path: 'EditAlumnoGrado/:idAlumnoGrado',
    component: EditComponentAlumnoGrado,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
