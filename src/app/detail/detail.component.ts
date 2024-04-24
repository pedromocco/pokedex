import { Component, Input, OnChanges } from '@angular/core';
import { Root } from '../pokedata.interface';
import { PokeServiceService } from '../poke-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {

  constructor(private pokemonService:PokeServiceService){}
  
  @Input() pokemon?:Root
  description:string=''

  ngOnChanges():void{

    if(this.pokemon){
    this.pokemonService.getByDescription(this.pokemon?.id).then(res=>{this.description=res})
    
  }

  }
 

  

}
