<template>
  <div>
    <input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo" />

    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id" v-bind:class="{'is-complete':todo.completed}">
        <input type="checkbox" v-model="todo.completed" />

        <span class="todo-label" @dblclick="editTodo(todo)" v-if="!todo.edit">{{ todo.label }}</span>

        <input
          v-else
          class="todo-edit"
          type="text"
          v-model="todo.label"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.escape="doneEdit(todo)"
        />

        <button @click="removeTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          label: "Get cat food",
          completed: false,
          edit: false
        },
        {
          id: 2,
          label: "Bake cake",
          completed: true,
          edit: false
        }
      ],
      currentTodo: "",
      editedTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        edit: false
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    markComplete(todo) {
      todo.completed = !todo.completed;
    },
    editTodo(todo) {
      todo.edit = true;
    },
    doneEdit(todo) {
      todo.edit = false;
    }
  }
};
</script>



<style>
.is-complete {
  text-decoration: line-through;
}
</style>
