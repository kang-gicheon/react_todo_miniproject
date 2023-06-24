<<<<<<< HEAD
import { useState, useCallback } from 'react';
=======
>>>>>>> component
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
<<<<<<< HEAD

  const [value, setValue] = useState(''); 

  const onChange = useCallback(e => {
    setValue(e.target.value);
  },[]);

  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요"
      value = {value}
      onChange = {onChange}
      />
=======
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
>>>>>>> component
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
