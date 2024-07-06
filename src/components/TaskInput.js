import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

export default function TaskInput(){
  const [task, setTask] = useState('');
  const [btn,setbtn] = useState('');
  const dispatch = useDispatch();
    const [errorMessage,setErrorMessage] = useState('');
    const [errMsgCol,setErrMsgCol] = useState('');
  const handleAddTask = (e) => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
     
    }
    if(task === ""){
      setErrorMessage('Please provide input')
      setbtn('mb-4')
      setErrMsgCol('text-danger')
    }
    else{
      setErrorMessage("")
      setbtn('')
    }
  };
  

  return (
    <div className='bg-con p-5 d-flex justify-content-center align-items-center'>
        <dl>
            <dt>Enter the Input</dt>
            <dd><input
        type="text"
        value={task}
        onChange={(e) => 
            setTask(e.target.value)}
            
        onKeyPress={(e) => {
                e.key === 'Enter' && handleAddTask()
        }
        }
        
        className='form-control'
      />
      <span className={errMsgCol}>{errorMessage}</span>
      </dd>
     
        </dl>
      <button className={`btn btn-primary mx-1 btn-shadow ${btn}`} onClick={handleAddTask}>Add Task</button>
      
    </div>
  );
};


