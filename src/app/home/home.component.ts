import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  typewriterText: string = "";
  isBlinking: boolean = true; // Controla el estado del parpadeo del cursor
  private texts: string[] = ["Adrià León", "Desarrollador Web", "Desarrollador Multiplataforma"];
  private textIndex: number = 0;
  private letterIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.typeNextText();
  }

  private typeNextText(): void {
    if (this.textIndex >= this.texts.length) {
      this.textIndex = 0;
    }
    this.typeLetter();
  }

  private typeLetter(): void {
    this.isBlinking = false; // Detiene el parpadeo mientras se escribe
    const currentText = this.texts[this.textIndex];
    this.typewriterText = currentText.slice(0, ++this.letterIndex);

    if (this.letterIndex <= currentText.length) {
      setTimeout(() => this.typeLetter(), 50);
    } else {
      this.isBlinking = true; // Reanuda el parpadeo una vez terminada la escritura
      setTimeout(() => {
        this.letterIndex = 0;
        this.typewriterText = ""; // Limpiar el texto antes de empezar el siguiente
        this.textIndex++;
        this.typeNextText();
      }, 2000);
    }
  }

  downloadCv() {
    // Path relativo al archivo PDF dentro de la carpeta de assets
    const pdfUrl = './assets/cv.pdf';
    // Nombre que deseas que tenga el archivo al ser descargado
    const pdfName = 'CV-AdriaLeonAris';
    // Crear un link temporal y simular un click para descargar
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = pdfName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}

