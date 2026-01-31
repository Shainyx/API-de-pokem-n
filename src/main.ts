import axios from 'axios';
import { GiphyCategory, Category } from './interfaces';
import { environment } from './environment/environment.dev';


async function getCategories() {

    try {

        const response = await axios.get<GiphyCategory>('https://api.giphy.com/v1/gifs/categories', {
            params: {
                api_key: environment.apikey,
            }
        });

        const categoria: Category[] = response.data.data.map( p => {
            return {
                name: p.name
            }
        })

        for(const cat of categoria){
            console.log(cat);
        }

    } catch (error) {
        console.error('Hubo un error al extraer los datos: ', error);
    }

}

getCategories();
