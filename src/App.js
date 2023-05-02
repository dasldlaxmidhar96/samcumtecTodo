import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoFilter from './Components/TodoFilter';
import TodoContextProvider from './Context/TodoContextProvider';

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoForm />
        <br />
        <TodoList />
        <br />
        <TodoFilter />
      </div>
    </TodoContextProvider>
  );
}

export default App;
