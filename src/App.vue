<template>
  <div>
    <Header />
    <md-field>
      <md-icon>add</md-icon>
      <label>Type here to add a To-do</label>
      <md-input v-model="currentTodo" @keydown.enter="addTodo()" />
    </md-field>

    <md-list class="todos">
      <md-list-item v-for="todo in todos" :key="todo.id">
        <md-checkbox v-model="todo.completed" />

        <span
          class="todo-label"
          @dblclick="editTodo(todo)"
          v-if="!todo.edit"
          v-bind:class="{'is-complete':todo.completed}"
        >{{ todo.label }}</span>

        <md-field v-else>
          <md-input
            v-model="todo.label"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="doneEdit(todo)"
          />
        </md-field>

        <md-button class="md-raised" @click="removeTodo(todo)">Delete</md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header
  },
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
  text-decoration: line-through !important;
  color: #d62196;
}

.md-button {
  background-color: #39375b !important;
}

.md-checked {
  text-decoration: line-through !important;
  color: #000 !important;
}

.md-checkbox {
  display: flex;
}

:root {
  --md-theme-default-primary: #39375b !important;
  --md-theme-default-accent: #d62196 !important;
  --md-theme-default-primary-on-background: #e497cd !important;
  --md-theme-default-accent-on-background: #d62196;
}
</style>


