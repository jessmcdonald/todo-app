<template>
  <div class="todolist">
    <Header />
    <md-field class="new-todo">
      <md-icon>add</md-icon>
      <label>Type here to add a To-do</label>
      <md-input v-model="currentTodo" @keydown.enter="addTodo()" />
    </md-field>
    <md-list>
      <draggable v-model="todos" ghost-class="ghost" @end="onEnd">
        <transition-group type="transition" name="flip-list">
          <md-list-item class="sortable" v-for="todo in todos" :key="todo.id">
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
        </transition-group>
      </draggable>
    </md-list>
  </div>
</template>

<script>
import Header from "./components/Header";
import draggable from "vuedraggable";

export default {
  components: {
    Header,
    draggable
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
        },
        {
          id: 3,
          label: "Go for a run",
          completed: false,
          edit: false
        }
      ],
      currentTodo: "",
      editedTodo: "",
      oldIndex: "",
      newIndex: ""
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
    },
    onEnd: function(evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
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

.sortable {
  cursor: move;
  margin-bottom: 2px !important;
  background-color: #232323 !important;
}

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  border-left: 6px solid #d62196;
  background-color: #39375b !important;
  opacity: 0.7;
}

.todolist {
  text-align: center;
}

.md-list {
  width: 70%;
  display: inline-block !important;
}
</style>


