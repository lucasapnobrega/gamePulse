import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameAndCategory from "./hooks/useGameAndCategory"
import SelectCategory from "./components/SelectCategory"
import Header from "./components/Header"

export default function App() {
  const { games, addGame, removeGame, addCategory, filterCategory, selectedCategory } = useGameAndCategory()

  const handleRemoveGame = (id) => {
    removeGame(id)
    filterCategory("")
  }

  const reset = () => {
    filterCategory("")
  }

  return (
    <div id="app">
      <Header />

      <NewGameForm addGame={addGame} addCategory={addCategory} reset={reset}/>

      <SelectCategory filterCategory={filterCategory} selectedCategory={selectedCategory}/>

      <h3 className="categoryText">
        {selectedCategory ? `Category "${selectedCategory}"` : "All Categories"}
      </h3>

      <div className="games">
        {games.length > 0 ? games.map(game => (
          <Game 
            key={game.id} 
            cover={game.cover} 
            title={game.title}
            releaseYear={game.releaseYear}
            description={game.description}
            category={game.category}
            removeGame={() => handleRemoveGame(game.id)}
          />
        )) : (
          <h2 className="title-noGames">
            <i className="fa-solid fa-triangle-exclamation"></i>
            No games in the list.
          </h2>
        )}
      </div>
    </div>
  )
}