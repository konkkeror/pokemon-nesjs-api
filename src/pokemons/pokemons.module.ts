import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from 'src/schemas/pokemon.schema';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema
      }
    ]),
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService]
})
export class PokemonsModule {}
