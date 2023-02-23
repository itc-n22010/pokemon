import { useState } from 'react'
import { getRandomPokemonImage } from 'api/pokemon'
import styles from 'styles/Home.module.css'

export default function Index () {
  const [image, setImage] = useState(null)

  async function handleGetRandomPokemon () {
    const imageUrl = await getRandomPokemonImage()
    setImage(imageUrl)
  }

  return (
    <div className={styles.container}>
      {image && <img src={image} alt='Random Pokemon' className={styles.image} />}
      <button onClick={handleGetRandomPokemon} className={styles.button}>Get Random Pokemon</button>
    </div>
  )
}
