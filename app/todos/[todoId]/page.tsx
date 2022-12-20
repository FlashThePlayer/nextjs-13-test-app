import { notFound } from "next/navigation";
import { Todo, TodoPageProps } from "../../../types";

const fetchTodo = async (todoId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await response.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: TodoPageProps) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Complete: {todo.completed ? "Yes" : "No"}</p>
      <p className="mt-5 border-black border-t text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export const generateStaticParams = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todosAlot: Todo[] = await response.json();
  const todos = todosAlot.splice(0, 10);
  return todos.map((todo) => {
    return { todoId: todo.id.toString() };
  });
};
