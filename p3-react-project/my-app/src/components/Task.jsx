function Task (props) {
    return (
        <div className="task">
            <h2>{props.title}</h2>
            <p>{props.task}</p>
        </div>
    );
}

export default Task;