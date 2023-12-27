import { useState } from "react"
import useCategory from "./useCategory"

export default () => {
  const { updateCategories } = useCategory()

  const [games, setGames] = useState(() => {
    const storedGames = JSON.parse(localStorage.getItem('game-lib'))

    return storedGames || []
  })

  const addGame = ({ title, cover, releaseYear, description, category }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover, releaseYear, description, category }
    
    const storedGames = JSON.parse(localStorage.getItem('game-lib')) || []

    const newGames = [...storedGames, game]

    localStorage.setItem('game-lib', JSON.stringify(newGames))

    setGames(newGames)
    updateCategories(newGames)
  }

  const removeGame = (id) => {
    const allGames = JSON.parse(localStorage.getItem('game-lib'))
    const newGames = allGames.filter((game) => game.id !== id)
    
    localStorage.setItem('game-lib', JSON.stringify(newGames))

    setGames(newGames)
    updateCategories(newGames)
  }

  return { games, setGames, addGame, removeGame }
}