import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
            const res = await axios.get('http://localhost:5000/api/tasks');
            setTasks(res.data);
        };
        fetchTasks();
    }, []);

    // Handle input change for new task
    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    // Handle form submission to create a new task
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!newTask.title || !newTask.description) {
            alert("Please fill in both fields");
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/api/tasks', newTask);
            setTasks([...tasks, res.data]); // Add the new task to the task list
            setNewTask({ title: '', description: '' }); // Reset form
        } catch (err) {
            console.error("Error adding task:", err);
        }
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>

            {/* Form to add new task */}
            <form onSubmit={handleFormSubmit} className="task-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>

            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
