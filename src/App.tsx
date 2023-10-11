import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }
  return (
    <SContainer className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo)=> (
        <Todo title={todo.title} userid={todo.userId}/>
      ))}
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  
`