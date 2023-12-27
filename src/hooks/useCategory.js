import { useState } from "react"
import { capitalizeFirstLetter } from "../utils/utils"

export default (setGames) => {
  const [categories, setCategories] = useState(() => {
    const storedCategories = JSON.parse(localStorage.getItem('game-categories'))
    
    return storedCategories || []
  })

  const [selectedCategory, setSelectedCategory] = useState("")

  const updateCategories = (gamesState) => {
    const uniqueCategories = gamesState.reduce((accArray, game) => {
      const category = capitalizeFirstLetter(game.category)

      if(!accArray.includes(category)) accArray.push(category)

      return accArray
    }, [])

    localStorage.setItem('game-categories', JSON.stringify(uniqueCategories))

    setCategories(uniqueCategories)
  }

  const addCategory = (category) => {
    const capitalizedCategory = capitalizeFirstLetter(category)

    if(!categories.includes(capitalizedCategory)) {
      setCategories(state => {
        const newCategories = [...state, capitalizedCategory]
        localStorage.setItem('game-categories', JSON.stringify(newCategories))

        return newCategories
      })
    }
  }

  const filterCategory = (categoryTarget) => {
    const capitalizedCategoryTarget = capitalizeFirstLetter(categoryTarget)
    
    setSelectedCategory(capitalizedCategoryTarget)

    const allGames = JSON.parse(localStorage.getItem('game-lib'))

    const gamesSpecificCategory = capitalizedCategoryTarget === "" 
      ? allGames 
      : allGames.filter(game => {
        const gameCategory = capitalizeFirstLetter(game.category)

        return gameCategory === capitalizedCategoryTarget
      })
    
    setGames(gamesSpecificCategory)
  }

  return { addCategory, setCategories, filterCategory, selectedCategory, updateCategories }
}