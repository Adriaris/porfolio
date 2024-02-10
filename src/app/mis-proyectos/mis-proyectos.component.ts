import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './mis-proyectos.component.html',
  styleUrl: './mis-proyectos.component.css'
})
export class MisProyectosComponent implements OnInit {

  proyectos = [
    {
      imagen: 'assets/images/ImagenProyecto1.webp',
      titulo: 'Playmate',
      subtitulo: 'Proyecto transversal de segundo  - Desarrollo Web',
      descripcion: 'Desarrollé individualmente "Playmate", una plataforma web dirigida a jugadores de videojuegos, con el fin de facilitar la conexión, comunicación y formación de nuevas amistades entre ellos. Utilicé Angular y Symfony para construir una aplicación completa con base de datos, enfrentando el desafío de trabajar solo y bajo limitaciones de tiempo. A pesar de estos retos, el proyecto fue un éxito.'
    },
    {
      imagen: 'assets/images/ImagenProyecto2.png',
      titulo: 'Petcare',
      subtitulo: 'Proyecto transversal de segundo  - Desarrollo Multiplataforma',
      descripcion: 'En equipo, desarrollamos "PetCare", una aplicación móvil diseñada para unir a dueños de mascotas con cuidadores fiables. Inspirados en el modelo de Wallapop, implementamos un sistema de valoraciones y filtros usando Kotlin y Java Spring.'
    },
    {
      imagen: 'assets/images/ImagenProyecto3.png',
      titulo: 'Mi porfolio',
      subtitulo: 'Desarrollo web personal ',
      descripcion: 'Utilizando Angular 17, he diseñado e implementado un sitio web que no solo exhibe mis proyectos sino que también refleja mi pasión y habilidades en el desarrollo web. Demostrando lo que soy capaz de hacer, y cómo puedo aportar valor a futuros proyectos y colaboraciones'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
