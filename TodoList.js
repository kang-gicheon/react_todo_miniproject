<<<<<<< HEAD
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos}) => {
    return (
        <div className="TodoList">

            {todos.map(todo => (
                <TodoListItem todo = {todo} key={todo.id} />
            ))}

        </div>
    );
=======
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
>>>>>>> component
};

export default TodoList;
