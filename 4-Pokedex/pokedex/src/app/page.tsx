import { GetServerSideProps } from 'next'
import Acervo from './components/Acervo/Acervo'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'

export type PokeList = {
    count: number,
    next: string,
    previous?: string,
    results: [
        {
            name: string,
            url: string,
        }
    ]
}

type Pokemon = {
    name: string,
    url: string
}

export default async function Pokedex(){
    const pokemons: PokeList = await loadPokemons()

    return (
        <>
            <Header />
            <Filter />

            <Acervo pokemons={pokemons.results} />
            {/* {data.results.map((poke: Pokemon) => {
                return <h2 key={poke.name}>{poke.name}</h2>
            })} */}
        </>
    )
}

const loadPokemons = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')

    return data.json()
}
