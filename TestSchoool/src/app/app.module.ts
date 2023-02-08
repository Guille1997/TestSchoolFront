import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './alumno/home/home.component';
import { ViewAlumnoComponent } from './alumno/view-alumno/view-alumno.component';
import { AddAlumnoComponent } from './alumno/add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './alumno/edit-alumno/edit-alumno.component';
import { IndexComponent } from './profesor/index/index.component';
import { ViewComponent } from './profesor/view/view.component';
import { CreateComponent } from './profesor/create/create.component';
import { EditComponent } from './profesor/edit/edit.component';
import { ViewComponentGrado } from './grado/view/view.component';
import { EditComponentGrado } from './grado/edit/edit.component';
import { CreateComponentGrado } from './grado/create/create.component';
import { IndexComponentGrado } from './grado/index/index.component';
import { IndexComponentAlumnoGrado } from './alumno-grado/index/index.component';
import { EditComponentAlumnoGrado } from './alumno-grado/edit/edit.component';
import { CreateComponentAlumnoGrado } from './alumno-grado/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAlumnoComponent,
    AddAlumnoComponent,
    EditAlumnoComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    IndexComponentGrado,
    ViewComponentGrado,
    EditComponentGrado,
    CreateComponentGrado,
    IndexComponentAlumnoGrado,
    ViewComponentGrado,
    EditComponentAlumnoGrado,
    CreateComponentAlumnoGrado,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
