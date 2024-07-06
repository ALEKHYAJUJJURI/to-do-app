import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

export default function TaskList(){
  const tasks = useSelector((input) => input.tasks);
  const dispatch = useDispatch();
  const [editBtnId, setEditBtnId] = useState(null);
  const [newText, setNewText] = useState('');

  const deleteBtnFun = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const editTaskFun = (taskId, text) => {
    setEditBtnId(taskId);
    setNewText(text);
  };

  const saveEditFun = (taskId) => {
    if (newText.trim()) {
      dispatch(editTask(taskId, newText));
      setEditBtnId(null);
      setNewText('');
    }
  };

  return (
    <ul className='d-flex flex-column'>
      {tasks.map((task) => (
        <li className="shadow" key={task.id}>
          {editBtnId === task.id ? (
            <div>
              <input
              
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className='py-2'
              />
              <button className='btn btn-primary mx-2 btn-shadow' onClick={() => saveEditFun(task.id)}>Save</button>
            </div>
          ) : (
            <div className='d-flex flex-row justify-content-end'>
              {task.text}
              <button className='btn btn-secondary edit-btn btn-shadow' onClick={() => editTaskFun(task.id, task.text)}>Edit</button>
              <button className='btn btn-danger btn-shadow' onClick={() => deleteBtnFun(task.id)}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};


