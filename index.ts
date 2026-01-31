import axios from 'axios';
import { PokemonAPI, Pokemon, Abilities } from './interfaces';


async function getPokemons() {

    try {
        
        const response = await axios.get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon');
        const poke: Pokemon[] = response.data.results.map( p => {
            return {
                name: p.name
            };
        });

        for(const pokemon of poke){
            console.log(pokemon);
        }
    } catch (error) {
        console.error('Error al traer datos', error);
    }

}

async function getAbilities() {

    try {
        
        const response = await axios.get<PokemonAPI>('https://pokeapi.co/api/v2/ability');
        const ability: Abilities[] = response.data.results.map( p => {
            return {
                name: p.name
            };
        });

        for(const abili of ability){
            console.log(abili);
        }
    } catch (error) {
        console.error('Error al traer datos', error);
    }

}

getPokemons();
getAbilities();