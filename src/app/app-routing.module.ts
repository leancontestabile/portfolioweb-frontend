import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditAcercaDeComponent } from './componentes/informacionpersonal/edit-acerca-de.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
