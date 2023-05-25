import { useState } from 'react';
import NewTask from './NewTask';
import styles from './TaskList.module.css';
import Modal from './Modal';
import Task from './Task';

function TaskList(props) {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function addTask(taskData) {
    const listType = taskData.listType;
    const task = {
      author: taskData.author,
      body: taskData.body,
      priority: taskData.priority,
      listType: taskData.listType, // Add this line
    };
  
    if (listType === 'todo') {
      setTodoTasks((prevTasks) => [...prevTasks, task]);
    } else if (listType === 'inProgress') {
      setInProgressTasks((prevTasks) => [...prevTasks, task]);
    } else if (listType === 'done') {
      setDoneTasks((prevTasks) => [...prevTasks, task]);
    }
  }
  
  function moveTask(taskId, task, sourceListType, targetListType) {
    // Remove the task from the source list
    if (sourceListType === 'todo') {
      setTodoTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    } else if (sourceListType === 'inProgress') {
      setInProgressTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    } else if (sourceListType === 'done') {
      setDoneTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    }
  
    // Remove the task from the source list
    if (sourceListType === 'todo') {
      setTodoTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    } else if (sourceListType === 'inProgress') {
      setInProgressTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    } else if (sourceListType === 'done') {
      setDoneTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskId));
    }
  
  // Add the task to the target list
  if (targetListType === 'todo') {
    setTodoTasks((prevTasks) => [...prevTasks, task]);
  } else if (targetListType === 'inProgress') {
    setInProgressTasks((prevTasks) => [...prevTasks, task]);
  } else if (targetListType === 'done') {
    setDoneTasks((prevTasks) => [...prevTasks, task]);
  }
  } 
  
  

  const modalContent = props.posting ? (
    <Modal onClose={props.stopPosting}>
      <NewTask onSubmit={addTask} onCancel={props.stopPosting} />
    </Modal>
  ) : null;

  return (
    <>
      {modalContent}
  
      <div className={styles.taskLists}>
        <div className={styles.list}>
          <h2>To Do</h2>
          <ul className={styles.tasks}>
            {todoTasks.map((task, index) => (
              <Task
                key={index}
                {...task}
                taskId={index} // Pass the index as taskId
                listType="todo"
                onMove={moveTask}
              />
            ))}
          </ul>
        </div>
  
        <div className={styles.list}>
          <h2>In Progress</h2>
          <ul className={styles.tasks}>
            {inProgressTasks.map((task, index) => (
              <Task
                key={index}
                {...task}
                taskId={index} // Pass the index as taskId
                listType="inProgress"
                onMove={moveTask}
              />
            ))}
          </ul>
        </div>
  
        <div className={styles.list}>
          <h2>Done</h2>
          <ul className={styles.tasks}>
            {doneTasks.map((task, index) => (
              <Task
                key={index}
                {...task}
                taskId={index} // Pass the index as taskId
                listType="done"
                onMove={moveTask}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
  
}

export default TaskList;
