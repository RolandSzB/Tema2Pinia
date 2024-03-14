import { defineStore } from "pinia";
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      lists: [],
    };
  },
  actions: {
    saveToLocalStorage() {
      if (localStorage.getItem("todo-lists") === null) {
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      } else {
        localStorage.removeItem("todo-lists");
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      }
    },
  },
});
