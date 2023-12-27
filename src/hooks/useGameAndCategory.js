import useCategory from "./useCategory"
import useGame from "./useGame"

export default () => {
  const { games, setGames, addGame, removeGame } = useGame()
  const { addCategory, filterCategory, selectedCategory } = useCategory(setGames)

  return { games, addGame, removeGame, addCategory, filterCategory, selectedCategory }
}
