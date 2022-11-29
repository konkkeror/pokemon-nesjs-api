import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonDocument } from 'src/schemas/pokemon.schema';

@Injectable()
export class PokemonsService {
  constructor(@InjectModel(Pokemon.name) private pokemonModel: Model<PokemonDocument>) {}

  async getPokemons():Promise<Pokemon[]> {
    const result = await this.pokemonModel.find().exec();
    return result;
  }

  async getPokemon(id: string): Promise<Pokemon> {
    const result = await this.pokemonModel.findById(id).exec();
    return result;
  }

  async createPokemon(pokemon: Pokemon): Promise<Pokemon> {
    const newPokemon = new this.pokemonModel(pokemon);
    return newPokemon.save();
  }
}
