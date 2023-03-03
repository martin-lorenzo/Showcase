import classes from './NewTask.module.css'

function NewTask(props) {
    return (
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={props.onTextChange}/>
        </p>
      </form>
    );
  }
  
  export default NewTask;