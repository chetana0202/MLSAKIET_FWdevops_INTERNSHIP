import React from 'react';
import styles from '../styles/Modal.module.css';

function Modal({ task, setShowModal }) {
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={() => setShowModal(false)}>X</button>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </div>
        </div>
    );
}

export default Modal;
