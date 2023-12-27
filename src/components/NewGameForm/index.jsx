import { useState } from "react"
import Input from "../Input"

export default ({ addGame, addCategory, reset }) => {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [releaseYear, setReleaseYear] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  
  const [fieldEmpty, setFieldEmpty] = useState(false)
  
  const handleSubmit = (ev) => {
    ev.preventDefault()

    if (title === "" || cover === "" || releaseYear === "" || description === "" || category === "") {
      setFieldEmpty(true)
      return
    } else {
      setFieldEmpty(false)
    }
  
    addCategory(category)

    addGame({ title, cover, releaseYear, description, category })

    setTitle("")
    setCover("")
    setReleaseYear("")
    setDescription("")
    setCategory("")
  }

  return (
    <form action="" onSubmit={handleSubmit}>

      <Input label="Title" type="text" inputAttributes="title" value={title} setValue={setTitle} isEmpty={fieldEmpty}/>

      <Input label="Cover" type="text" inputAttributes="cover" value={cover} setValue={setCover} isEmpty={fieldEmpty}/>

      <Input label="Release Year" type="number" inputAttributes="releaseYear" value={releaseYear} setValue={setReleaseYear} isEmpty={fieldEmpty}/>

      <Input label="Description" type="text" inputAttributes="description" value={description} setValue={setDescription} isEmpty={fieldEmpty}/>

      <Input label="Category" type="text" inputAttributes="category" value={category} setValue={setCategory} isEmpty={fieldEmpty}/>

      <button type="submit" onClick={reset}>Add Game</button>

      {fieldEmpty && (
        <span className="fieldEmpty">Please, fill in all fields!</span>
      )}
    </form>
  )
}