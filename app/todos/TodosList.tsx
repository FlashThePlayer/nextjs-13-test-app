import Link from "next/link";
import { Todo } from "../../types";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos;
};

const TodosList = async () => {
  const todoList = await fetchTodos();
  return (
    <>
      {todoList.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
