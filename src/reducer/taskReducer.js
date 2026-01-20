export const ACTIONS = {
    ADD_TASK: 'ADD_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
};

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload.text,
                    priority: action.payload.priority,
                    completed: false,
                },
            ];
        case ACTIONS.TOGGLE_TASK:
            return state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        case ACTIONS.DELETE_TASK:
            return state.filter((task) => task.id !== action.payload.id);
        case ACTIONS.CLEAR_COMPLETED:
            return state.filter((task) => !task.completed);
        default:
            return state;
    }
};
