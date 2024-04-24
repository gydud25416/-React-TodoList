import Header from './components/Header';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
       <NewTodo/>
       <TodoList/>
    </div>
  );
}

export default App;
