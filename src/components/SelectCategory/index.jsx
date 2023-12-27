export default ({ filterCategory, selectedCategory}) => {
  const categories = JSON.parse(localStorage.getItem('game-categories'))

  return (
    <select id="categorySelect" value={selectedCategory} onChange={(ev) => filterCategory(ev.target.value)}>
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option value={category} key={index}>
          {category}
        </option>
      ))}
    </select>
  )
}