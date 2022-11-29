import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { Pokemon, PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    PokemonsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/pokedex'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
