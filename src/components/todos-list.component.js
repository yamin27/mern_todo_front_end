import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}> {props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+ props.todo._id}>Edit</Link>
        </td>
    </tr>
)

class TodosListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { todos: []}

    }

    componentDidMount() {

        axios.get('http://localhost:5000/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (err){
                console.log(err);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        axios.get('http://localhost:5000/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (err){
                console.log(err);
            })

    }

    todoList(){

        return this.state.todos.map(function (currentTodo, index){

            return <Todo todo={currentTodo} key={index}/>
        });
    }


    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default TodosListComponent;