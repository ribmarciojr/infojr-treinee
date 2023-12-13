import React from "react"
import Card from "../Card/Card"
import styles from './style.module.css'

interface Acervo {
    pokemons: [
        {
            name: string,
            url: string
        }
    ]
}


const Acervo: React.FC<Acervo> = ({ pokemons }) => {
    
    return (
        <>
        <main className={styles.pokedex}>
            {pokemons.map((pokemon) => {
                return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            })} 
                
        </main>
        </>
    )
}


export default Acervo;