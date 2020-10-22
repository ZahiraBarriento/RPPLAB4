import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  moves;
  datos : any = [];
  ready: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.datos = this.data.getDatos();

    this.datos.moves.forEach((element:any) => {
      this.moves = element.version_group_details;

      console.log(this.moves)
    });

    setTimeout(() => {
      this.ready = true;
    }, 1500);
  }

}
