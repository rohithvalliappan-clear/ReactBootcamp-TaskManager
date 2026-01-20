import React from 'react';
import { useTasks } from '../context/TaskContext';
import { ACTIONS } from '../reducer/taskReducer';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, dispatch } = useTasks();

    const activeTasks = tasks.filter((t) => !t.completed);
    const completedTasks = tasks.filter((t) => t.completed);

    return (
        <div className="task-lists-container">
            <section className="task-section">
                <h2 className="section-title">
                    Active Tasks <span className="count">{activeTasks.length}</span>
                </h2>
                <div className="tasks-grid">
                    {activeTasks.length > 0 ? (
                        activeTasks.map((task) => <TaskItem key={task.id} task={task} />)
                    ) : (
                        <p className="empty-state">No active tasks. Time to relax! ☕️</p>
                    )}
                </div>
            </section>

            {completedTasks.length > 0 && (
                <section className="task-section completed-section">
                    <div className="section-header">
                        <h2 className="section-title">
                            Completed <span className="count">{completedTasks.length}</span>
                        </h2>
                        <button
                            className="clear-completed-btn"
                            onClick={() => dispatch({ type: ACTIONS.CLEAR_COMPLETED })}
                        >
                            Clear All
                        </button>
                    </div>
                    <div className="tasks-grid">
                        {completedTasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default TaskList;
