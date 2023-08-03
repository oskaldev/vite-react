export const changeTodoStatus = (todos, id) => {
  const copyTodo = [ ...todos ]
  const currentTodo = copyTodo.find(t => t.id === id)
  currentTodo.isCompleted = !currentTodo.isCompleted
  return copyTodo
}
