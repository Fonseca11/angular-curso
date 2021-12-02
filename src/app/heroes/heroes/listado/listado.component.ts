import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  
    heroes: string[] = ['Spiderman', 'Iroman', 'Batman', 'Hulk']
    heroeBorrado: string = '';

    borrarHeroe(){
      // console.log("Borrar Heroe");
      //this.heroes.shift();
       this.heroeBorrado = this.heroes.shift()||'';
      //console.log(heroeBorrado);
      
    }
}
