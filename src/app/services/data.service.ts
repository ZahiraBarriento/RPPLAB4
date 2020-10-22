import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datos = {};

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }

  getDatos (){
    return this.datos;
  }

  getPoke(name){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name)
  }

  getDatails(url){
    return this.http.get(url);
  }

  setDatos(value:object){
    this.datos = value;
  }

}
