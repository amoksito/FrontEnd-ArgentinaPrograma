import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  onCreate() {
    // Revisar BackEnd para permitir mismo lugar de trabajo.
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.experienciaService.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló, considere no repetir la misma Empresa/Institución.");
        this.router.navigate(['']);
      }
    )
  }

}