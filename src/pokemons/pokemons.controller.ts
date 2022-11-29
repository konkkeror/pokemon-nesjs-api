import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Pokemon } from 'src/schemas/pokemon.schema';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {

  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  getPokemons() {
    return this.pokemonsService.getPokemons();
  }

  @Get('/:id')
  getPokemon(@Param('id') id:string) {
    return this.pokemonsService.getPokemon(id);
  }

  @Post()
  createPokemon(@Body() pokemon: Pokemon) {
    return this.pokemonsService.createPokemon(pokemon);
  }
}
