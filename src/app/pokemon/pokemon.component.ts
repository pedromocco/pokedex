import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { pokemons } from '../interface';
import { PokeServiceService } from '../poke-service.service';
import { Root } from '../pokedata.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnChanges {

  constructor(private pokemonService:PokeServiceService){}
  
    ngOnChanges():void{
    this.infoExtract();
    }
    
  @Input() pokemon?:pokemons;
  @Input() selected:boolean=false;
  @Input() fullData?:Root;
  @Output() clicked=new EventEmitter<string>();
  
  id:string=''


  infoExtract(){
    if(this.pokemon && this.pokemon.url !== ""){
      this.id = this.pokemon.url.substring(34,this.pokemon.url.length - 1);
      return;
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length - 1);
      this.pokemon = {
        name:this.fullData.species.name,
        url:""
      }
    }
  }
}
