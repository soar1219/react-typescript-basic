import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/User";

const user: User = {
  name: "つばさ",
  /* hobbies: ["スキー", "フェス"] */
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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo)=> (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  
`