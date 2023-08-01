import { useContext } from "react"
import { TodoContext } from '../providers/TodoProdiver'


export const useTodo = () => useContext(TodoContext)