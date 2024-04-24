import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokeServiceService } from '../poke-service.service';
import { pokemons } from '../interface';
import { Root } from '../pokedata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokeService:PokeServiceService){}

  pokeList:pokemons[]=[]
  selectPokemon?:Root

  @ViewChild('card') cardElement!:ElementRef;

  ngOnInit(): void {
    this.loadList();
    this.pokeService.getById('1');
  }

  async loadList(){
    this.pokeList = [...this.pokeList, ...await this.pokeService.getByPage()]
  }

  onScroll(e:any){
      if(Math.round(
      this.cardElement.nativeElement.clientHeight + this.cardElement.nativeElement.scrollTop) ===
      e.srcElement.scrollHeight){
        this.loadList();
      }
  }

  async clickedCard(e:string){
    this.selectPokemon = await this.pokeService.getById(e)
  }

}
