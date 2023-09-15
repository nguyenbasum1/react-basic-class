import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent';
import ListTodo1 from './Todos/ListTodo1';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './NavMenu/Nav';
import './NavMenu/Nav.scss';

import Home from './Example/Home';
// import router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Mycomponent/> */}
          {/* <ListTodo1 /> */}
          {/* <Home></Home> */}

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo1 />} />
            <Route path="/about" element={<Mycomponent />} />
          </Routes>
        </header>
      </div>
      {/* <nav><Nav /></nav> */}

    </Router>


  );
}

export default App;
