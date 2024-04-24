export interface data {
    count:number,
    next:string,
    previous:string,
    results:pokemons[]
}

export interface pokemons {
    name:string,
    url:string
}