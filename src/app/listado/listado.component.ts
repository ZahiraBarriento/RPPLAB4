import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  pokemons;
  datos : any = [];
  ready: boolean = false;
  prev;
  next;

  constructor(
    private data: DataService,
    public router: Router) {
  }

  ngOnInit(): void {

    this.data.getAll().subscribe((poke: any) => {
      this.pokemons = poke.results;
      this.prev = poke.previous;
      this.next = poke.next;

      this.pokemons.forEach(poke => {
        this.data.getDatails(poke.url).subscribe((details: any) => {
          this.datos.push(details);
        })
      });
    })
    setTimeout(() => {
      this.ready = true;
    }, 1500);
  }

  info(poke) {
    this.data.setDatos(poke);
    this.router.navigateByUrl('/detalle/' + poke.name).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  move(poke) {
    this.data.setDatos(poke);
    this.router.navigateByUrl('/moves/' + poke.name).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }

  pageNext(event){
    this.ready = false;
    this.datos = [];
    console.log(this.pokemons)
    if(event.previousPageIndex < event.pageIndex){
      this.data.getDatails(this.next).subscribe((data : any)=>{
        this.pokemons = data.results;
        console.log(this.pokemons)
        this.prev = data.previous;
        this.next = data.next;
        this.ready = true;
        this.pokemons.forEach(poke => {
          this.data.getDatails(poke.url).subscribe((details: any) => {
            this.datos.push(details);
          })
        });
      });
    }else{
      this.data.getDatails(this.prev).subscribe((data : any)=>{
        this.pokemons = data.results;
        this.prev = data.previous;
        this.next = data.next;
        this.ready = true;
        this.pokemons.forEach(poke => {
          this.data.getDatails(poke.url).subscribe((details: any) => {
            this.datos.push(details);
          })
        });
      });
    }
  }

}
