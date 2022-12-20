export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoPageProps {
  params: {
    todoId: string;
  };
}

export interface SearchTermPageProps {
  params: {
    searchTerm: string;
  };
}
