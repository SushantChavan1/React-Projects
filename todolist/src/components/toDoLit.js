import React, { useState } from 'react';
//import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim()) {
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = inputValue;
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, inputValue]);
            }
            setInputValue('');
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
    };

    const handleEditTask = (index) => {
        setInputValue(tasks[index]);
        setEditIndex(index);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>{editIndex !== null ? 'Save' : 'Add Task'}</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {index === editIndex ? (
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Edit task"
                            />
                        ) : (
                            task
                        )}
                        {index === editIndex ? (
                            <button onClick={() => handleAddTask()}>Save</button>
                        ) : (
                            <>
                                <button onClick={() => handleEditTask(index)}>Edit</button>
                                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
