import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCategory = input.trim()

    if (newCategory.length <= 1) return

    onNewCategory(newCategory)

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={input} />
    </form>
  )
}
