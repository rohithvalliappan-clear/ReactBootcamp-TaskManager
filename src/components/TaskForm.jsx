import React, { useState, useRef, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';

const TaskForm = () => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('MEDIUM');
    const inputRef = useRef(null);
    const { dispatch } = useTasks();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        dispatch({
            type: ACTIONS.ADD_TASK,
            payload: { text, priority },
        });

        setText('');
        setPriority('MEDIUM');
        inputRef.current.focus();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="task-input"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className={`priority-select priority-${priority.toLowerCase()}`}
                >
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                </select>
                <button type="submit" className="add-button">
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
