export interface PokemonAPI {
    count: number,
    next: string | null,
    previous: string | null,
    results: Pokemon[] | Abilities[]
}

export interface Pokemon {
    name: string,
    url?: string,
}

export interface Abilities {
    name: string,
    url?: string,
}

// ------------------------------

export interface GiphyCategory {
    data: [
        {
            name: string,
            name_encoded: string,
            subcategories: [
                {
                    name: string,
                    name_encoded: string,
                }
            ]
            gif: string,
        }
    ]
}

export interface Category {
    name: string,
}