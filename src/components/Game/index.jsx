import { useState } from 'react'
import styles from './Game.module.css'
import { capitalizeFirstLetter } from '../../utils/utils'

export default ({ cover, title, releaseYear, description, category, removeGame }) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className={styles.card}>
      <img src={cover} alt={title} />

      <div>
        <h2>{title} - {releaseYear}</h2>
        <p><span>Category</span>: {capitalizeFirstLetter(category)}</p>

        <span 
          className={styles.showDescription} 
          onClick={() => setShowDescription(currentState => !currentState)}
        >
          {showDescription ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}
          {showDescription ? "Hide description" : "Show description"}
        </span>

        {showDescription && (
          <p className={styles.description}>{description}</p>
        )}

        <div className={styles.btnGroup}>
          <button onClick={removeGame} className={styles.btnRemove}>Remove</button>

          <a 
            title='See more information about the game' className='seeMoreBtn'
            href={`https://www.google.com/search?q=${title}`}
            target='_blank'
          >
            See More
          </a>
        </div>
      </div>
    </div>
  )
}