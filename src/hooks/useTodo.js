import { TodoContext } from 'providers/TodoProdiver'
import { useContext } from "react"


export const useTodo = () => useContext(TodoContext)