import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./logo.svg"

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

function App() {
  return (

      <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="http://sarkersoft.com">
                    <img src={logo} alt="Company Logo" height="30" width="30"/>
                </a>

                <Link to="/" className="navbar-brand">Mern Stact TODOS APP </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Todos </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Todos Create </Link>
                        </li>
                    </ul>

                </div>


            </nav>

              <Route path="/" exact component={TodosList}/>
              <Route path="/edit/:id" component={EditTodo} />
              <Route path="/create" component={CreateTodo} />
          </div>


      </Router>
  );
}

export default App;
