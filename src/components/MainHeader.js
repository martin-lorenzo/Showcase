import { MdPostAdd, MdOutlinePoll } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({ onCreateTask }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdOutlinePoll size={64}/>
        Trello-Clone
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateTask}>
          <MdPostAdd size={18} />
          New Task
        </button>
      </p>
    </header>
  );
}

export default MainHeader;