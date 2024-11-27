const initialState = {
  todos: [
    { id: 123456, text: "first todo", completed: false },
    { id: 1234567, text: "second todo", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // ... disassembles the object into smaller objects
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.paylod, completed: false },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
