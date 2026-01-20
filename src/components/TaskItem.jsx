import React from 'react';
import { useTasks } from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';

const TaskItem = ({ task }) => {
    const { dispatch } = useTasks();

    return (
        <div className={`task-item priority-${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } })}
                    className="task-checkbox"
                />
                <span className="task-text">{task.text}</span>
                <span className="priority-badge">{task.priority}</span>
            </div>
            <button
                onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })}
                className="delete-button"
                title="Delete Task"
            >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                </svg>
            </button>
        </div>
    );
};

export default TaskItem;
