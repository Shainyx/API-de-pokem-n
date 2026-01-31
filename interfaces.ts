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