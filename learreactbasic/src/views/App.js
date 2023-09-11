import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';
import ListTodo from './Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello work123
        </p>
        {/* <Mycomponent/> */}
        <ListTodo/>
      </header>
    </div>
    
  );
}

export default App;
