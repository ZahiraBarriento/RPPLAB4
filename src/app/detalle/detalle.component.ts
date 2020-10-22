import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  ready: boolean = false;
  datos: any;
  abilities: Array<any> = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.datos = this.data.getDatos();
    console.log(this.datos.url)

    this.datos.abilities.forEach((element: any) => {
      this.data.getDatails(element.ability.url).subscribe((abil: any) => {
        this.abilities.push(abil);
      })
    })

    setTimeout(() => {
      this.ready = true;
    }, 1500);
  }

}
