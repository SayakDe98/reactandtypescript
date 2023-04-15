import { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(),todo, isDone: false}]);
    }
    setTodo('');
  };
  console.log('Todo',todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* {todos.map((t)=>{return(
        <li>{t.todo}</li>
      )
      })} */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
