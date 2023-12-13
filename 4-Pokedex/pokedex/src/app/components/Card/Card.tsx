import styles from './style.module.css'

interface Card {
    name: string,
    url: string,
}

type PokePowerType = {
    slot: number,
    type: {
        name: string,
        url: string,
    }
}

const Card: React.FC<Card> = async ({ name, url }) => {
    const pokeData = await loadPokemon(url)

    return (
        <div className={`${styles.card} ${pokeData.types[0].type.name}`}>
            <div>
                <h2 className={styles.name}>{name[0].toUpperCase() + name.slice(1)}</h2>
                <div className={styles.poke_info}>
                    {pokeData.types.map((type: PokePowerType) => {
                        return <span className={`${styles.poke_type} ${type.type.name}`}  key={type.slot}>{type.type.name}</span>
                    })}
                </div>
            </div>
            <img className={styles.poke_img} src={pokeData.sprites.front_default} alt={name} />
        </div>
    )
}

async function loadPokemon(url: string) {
    const response = await fetch(url)

    return response.json()
}

export default Card