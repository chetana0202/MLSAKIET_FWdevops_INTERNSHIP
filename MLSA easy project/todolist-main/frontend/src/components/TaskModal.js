import React from 'react';
import styles from '../styles/TaskModal.module.css';

const TaskModal = ({ task, onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.closeButton} onClick={onClose}>
                    &times;
                </span>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default TaskModal;
