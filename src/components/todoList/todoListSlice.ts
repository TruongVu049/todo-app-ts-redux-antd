import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Define the TS type for the counter slice's state
export interface TodoState {
  id: string;
  name: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
}

// Define the initial value for the slice state
const initialState: TodoState[] = [
  {
    id: "1",
    name: "Learn Redux",
    completed: true,
    priority: "Medium",
  },
  {
    id: "2",
    name: "Learn React",
    completed: false,
    priority: "High",
  },
];

// Create the slice and pass in the initial state
const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, actions: PayloadAction<TodoState>) {
      state.push(actions.payload);
    },
    updateTodo(state, actions: PayloadAction<TodoState>) {
      const { id, completed } = actions.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.completed = !completed;
      }
    },
  },
});

export const { addTodo, updateTodo } = todoListSlice.actions;

// Export the generated reducer function
export default todoListSlice;
