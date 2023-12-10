import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MiValorComponent } from './mi-valor/mi-valor.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mi-valor', component: MiValorComponent },
    { path: 'mis-proyectos', component: MisProyectosComponent },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: '**', component: NotfoundComponent }
];
