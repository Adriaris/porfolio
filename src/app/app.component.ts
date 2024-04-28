import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MiValorComponent } from "./mi-valor/mi-valor.component";
import { HomeComponent } from "./home/home.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { MisProyectosComponent } from "./mis-proyectos/mis-proyectos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink, MiValorComponent, HomeComponent, SobreMiComponent, MisProyectosComponent]
})
export class AppComponent {
  title = 'porfolio-angular17';
}
