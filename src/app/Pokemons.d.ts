export type Pokemon = {
  name: string;
  url: string;
}

export type PokemonsResponse = {
  results: Array<Pokemon>;
}