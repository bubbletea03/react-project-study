import { Link } from "react-router-dom";


function ItemCard() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div className='todo-list'>
          <Link to="/todo-1" className="todo-1">
            <img src="https://images.unsplash.com/photo-1673851333040-e1f6c8857a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
            할 일 1
          </Link>
          <Link to="/todo-2" className="todo-2">
            <img src="asdf.jpg"></img>
            할 일 2
          </Link>
          <Link to="/todo-3" className="todo-3">
            <img src="https://images.unsplash.com/photo-1673973013493-f7d2bcab5ab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
            할 일 3
          </Link>
        </div>
      </div>
    );
  }

  export default ItemCard;