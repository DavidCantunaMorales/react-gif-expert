import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {
  const [category, setCategory] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    const sameInput = category.includes(newCategory)
    if (sameInput) return
    // setCategory([...category, newCategory])
    setCategory([newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {category.map((element) => (
        <GiftGrid key={element} category={element} />
      ))}
    </>
  )
}
