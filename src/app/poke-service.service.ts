import { Injectable } from '@angular/core';
import { pokemons } from './interface';
import { Root } from './pokedata.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor() { }

  async getByPage():Promise<pokemons[]>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=150');
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return []
  }
  
  async getById(id:string):Promise<Root>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const resJson = await res.json();
    return resJson;
  }

  async getByDescription(id: string | number): Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const resJson = await res.json();
    const text =resJson.flavor_text_entries.find((description:any)=>description.language.name === "es")
    return text.flavor_text
    console.log(text)
    
  }
}

//https://pokeapi.co/api/v2/pokemon-species/