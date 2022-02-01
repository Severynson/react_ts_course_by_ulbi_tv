import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";
import { useState, useEffect } from "react";
import List from "./List";
import { FC } from "react";

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
   
  
    const fetchTodos = async() => {
      try {
        const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
      } catch (err) {
        alert(err)
      }
    };
    
    return (
        <div>
              <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </div>
    );
};

export default TodosPage;