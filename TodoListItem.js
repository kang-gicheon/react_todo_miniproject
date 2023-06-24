import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
<<<<<<< HEAD
import cn from 'classnames'
import './TodoListItem.scss';

const TodoListItem = ({todo}) => {

  const {text, checked} = todo;

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox",{checked})}>
        {checked ?<MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
=======
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
>>>>>>> component
      </div>

      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
