import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Adding Item Function
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { description: newTask, completed: false }]);
            setNewTask('');
        }
    };

    // For task Complete 
    const completeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    // Remove item Function
    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    // Total Task Function
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div className='container'>
            <h1 className='mt-5 mb-5'>TO-DO-LIST</h1>
            <div className='d-flex'>
                <div style={{ marginLeft: "17em" }} className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        style={{ width: "25em" }}
                        id="floatingInput"
                        placeholder="Type Here"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <label for="floatingInput">Type Here</label>
                </div>
                <Button onClick={addTask} style={{ marginLeft: "2em", height: "3em", width: "8em", marginTop: "4px" }} variant="success">Add Items</Button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li className='list' key={index}>
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                            }}
                        >
                            {task.description}
                        </span>
                        <Button style={{ marginRight: "1em", margin: "1em", width: "6em" }} onClick={() => completeTask(index)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </Button>
                        <Button variant="danger" style={{ width: "6em" }} onClick={() => removeTask(index)}>Remove</Button>
                    </li>
                ))}
            </ul>

            <h4>Total tasks: {totalTasks}</h4>
            <h4>Completed tasks: {completedTasks}</h4>
        </div>
    )
}

export default Todo
