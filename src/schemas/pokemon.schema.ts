import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
// Clases, Iterfaces -> Upper CamelCase
// Variables -> Lower CamelCase
// Constantes -> VALOR_MAXIMO

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema() 
export class Pokemon { //apunta a la colección pokemonS
  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  id: number;

  @Prop()
  gender?: string;

  @Prop()
  num: string;  //string es de typescript

  @Prop({type: Array<String>})
  type: Array<string>;

  @Prop()
  height: string;

  @Prop()
  weight: string;

  @Prop()
  candy: string;

  @Prop()
  candy_count?: number;

  @Prop()
  egg: string;

  @Prop()
  spawn_chance: number;

  @Prop()
  avg_spawns: number;

  @Prop()
  spawn_time: string;

  @Prop()
  multipliers: Array<number> | null;

  @Prop({type: Array<String>})
  weaknesses: Array<string>;

  @Prop({type:Array<Object>})
  prev_evolution?: Array<Evolution>;

  @Prop()
  next_evolution?: Array<Evolution>;

}

export interface Evolution {
  num:  string;
  name: string;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
