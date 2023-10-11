import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }
  return (
    <SContainer className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo)=> (
        <Todo title={todo.title} userid={todo.userid}/>
      ))}
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  
`