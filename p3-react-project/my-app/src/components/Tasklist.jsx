import { useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import Modal from "./Modal";

function Tasklist () {
    const [task, setTask] = useState('');
    
    function textChangeHandler(event){
        setTask(event.target.value);
    }
    return (
        <div >
            <Modal> 
            <NewTask onTextChange={textChangeHandler}/>
            </Modal>
            <ul className="tasklist">
                <Task title={task}/>
            </ul>
        </div>
    )    
}

export default Tasklist;