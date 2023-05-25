import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    id: "123143",
    completed: false,
    sectionId: "13gyg",
    section: "daily tasks",
    content: "complete designing the app",
  },
  {
    id: "345f323",
    completed: true,
    sectionId: "13gyg",
    section: "daily tasks",
    content: "shopping tomorrow",
  },
  {
    id: "34rwer2",
    completed: false,
    sectionId: "1243",
    section: "tommorow tasks",
    content: "Pick up groceries",
  },
  {
    id: "i8o88j",
    completed: false,
    sectionId: "1243",
    section: "daily tasks",
    content: "Read for one hour",
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: todos,
  reducers: {
    addTodo: (state, action) => {
      const data = action.payload;
      state.push(data);
    },
    checkTodo: (state) => {},
    updateTodo: (state) => {},
    deleteTodo: (state) => {},
  },
});

export const { addTodo, checkTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
