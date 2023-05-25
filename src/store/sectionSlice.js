import { createSlice } from "@reduxjs/toolkit";

const sections = [
  {
    id: "13gyg",
    name: "later tasks",
    todos: [
      {
        id: "123143",
        completed: false,
        sectionId: "13gyg",
        section: "daily tasks",
        content: "complete designing the app",
        priority: "High",
        description:
          "We nede to make it aggresive with pricing because it’s in their interest to acquire us",
      },
      {
        id: "345f323",
        completed: true,
        sectionId: "13gyg",
        section: "daily tasks",
        content: "shopping tomorrow",
        priority: "Low",
        description:
          "We nede to make it aggresive with pricing because it’s in their interest to acquire us",
      },
    ],
  },
  {
    id: "1243",
    name: "tommorow tasks",
    todos: [
      {
        id: "34rwer2",
        completed: false,
        sectionId: "1243",
        section: "tommorow tasks",
        content: "Pick up groceries",
        priority: "Low",
        description:
          "We nede to make it aggresive with pricing because it’s in their interest to acquire us",
      },
      {
        id: "i8o88j",
        completed: false,
        sectionId: "1243",
        section: "daily tasks",
        content: "Read for one hour",
        priority: "Low",
        description:
          "We nede to make it aggresive with pricing because it’s in their interest to acquire us",
      },
    ],
  },
];

export const sectionSlice = createSlice({
  name: "sections",
  initialState: sections,
  reducers: {
    addSection: (state, action) => {
      state.push(action.payload);
    },

    deleteSection: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },

    updateSection: (state, action) => {
      const id = action.payload.id;
      state.map((item) => {
        if (item.id === id) {
          item.name = action.payload.name;
        }
      });
    },

    addTodo: (state, action) => {
      state.map((section) => {
        if (section.id === action.payload.sectionId) {
          return section.todos.push(action.payload);
        } else {
          return section;
        }
      });
    },
    checkTodo: (state, action) => {
      const todoId = action.payload.todoId;
      state.map((parent) => {
        if (parent.id === action.payload.sectionId) {
          parent.todos.map((item) => {
            if (item.id === todoId) {
              item.completed = !item.completed;
            }
          });
        }
      });
    },
    setPriority: (state, action) => {
      const todoId = action.payload.todoId;
      const sectionId = action.payload.sectionId;
      const selectedPriority = action.payload.selectedPriority;
      state.map((section) => {
        if (section.id === sectionId) {
          section.todos.map((todo) => {
            if (todo.id === todoId) {
              todo.priority = selectedPriority;
            }
          });
        }
      });
    },
    deleteTodo: (state, action) => {
      const { todoId, sectionId } = action.payload;
      console.log(todoId, sectionId);
      const list = state.find((section) => section.id === sectionId);
      if (list) {
        list.todos = list.todos.filter((todo) => todo.id !== todoId);
      }
    },
    updateTodo: (state, action) => {
      const { text, id, sectionId } = action.payload;
      state.map((section) => {
        if (section.id === sectionId) {
          section.todos.map((todo) => {
            if (todo.id === id) {
              todo.description = text;
            }
          });
        }
      });
    },
  },
});

export const {
  addSection,
  updateSection,
  deleteSection,
  addTodo,
  checkTodo,
  setPriority,
  deleteTodo,
  updateTodo,
} = sectionSlice.actions;
export default sectionSlice.reducer;
