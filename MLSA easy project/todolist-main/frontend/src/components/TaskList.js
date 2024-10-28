import React from 'react';
import Task from './Task';
import styles from '../styles/Task.module.css';

function TaskList({ tasks, setTasks }) {
    return (
        <div className={styles.taskList}>
            {tasks.map(task => (
                <Task key={task._id} task={task} setTasks={setTasks} />
            ))}
        </div>
    );
}

export default TaskList;
