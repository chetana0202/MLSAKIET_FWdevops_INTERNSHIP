import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import styles from '../styles/Task.module.css';

function Task({ task, setTasks }) {
    const [showModal, setShowModal] = useState(false);

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        setTasks(prev => prev.filter(t => t._id !== id));
    };

    const markAsCompleted = async (id) => {
        await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !task.completed });
        setTasks(prev => prev.map(t => t._id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <div className={styles.taskItem}>
            <div onClick={() => setShowModal(true)} className={task.completed ? styles.completed : ''}>
                {task.title}
            </div>
            <button onClick={() => markAsCompleted(task._id)}>
                {task.completed ? 'Unmark' : 'Mark Completed'}
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
            {showModal && <Modal task={task} setShowModal={setShowModal} />}
        </div>
    );
}

export default Task;
