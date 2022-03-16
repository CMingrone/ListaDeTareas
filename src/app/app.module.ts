import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ButtonComponent } from './componentes/button/button.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ItemTareaComponent } from './componentes/item-tarea/item-tarea.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { FooterComponent } from './componentes/footer/footer.component';

const appRoutes : Routes =[
  {path:'', component: TareasComponent},
  {path:'about', component: AboutComponent}]

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ButtonComponent,
    TareasComponent,
    ItemTareaComponent,
    AgregarTareaComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
