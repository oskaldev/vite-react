import { useState } from 'react'
const useTask = (addTodo) => {
  const [ newTask, setNewTask ] = useState('')

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTodo({
        id: Date.now(),
        title: newTask,
        isCompleted: false,
      })
      setNewTask('')
    }
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }
  return { newTask, handleInputChange, handleKeyPress }
}
export default useTask