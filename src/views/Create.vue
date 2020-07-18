<template>
  <div class="container">
    <div class="row">

      <div class="card blue darken-3 z-depth-2">
        <form @submit.prevent="submitHandler">
          <div class="card-content white-text">
            <div class="row">
              <div class="input-field col s12">
                <input id="taskTitle" type="text" class="validate" v-model="title">
                <label for="taskTitle">Task Title</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="textarea" class="materialize-textarea" v-model="description"></textarea>
                <label for="textarea">Task Description</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <input type="text" ref="datepicker" class="datepicker" v-model="date">
              </div>
            </div>
          </div>
          <div class="card-action">
            <button type="submit" class="waves-effect waves-teal btn-flat white-text">Create task</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Create',
  mounted() {
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  data() {
    return {
      title: '',
      description: '',
      date: null,
    }
  },
  methods: {
    ...mapActions(['createTask']),
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        date: this.date.date,
        id: Date.now()
      }
      this.createTask(task)
      this.$router.push({ path: 'list' })
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
  }
}
</script>

<style lang="scss">
  .row {
    margin-bottom: 0;
  }
  input {
    color: rgba(255, 255, 255, 0.7); 
  }
  textarea {
    color: rgba(255, 255, 255, 0.7); 
  }
  .datepicker-day-button {
    color: #000;
  }
  .datepicker-table td.is-selected {
    background-color: #1565C0;
    .datepicker-day-button {
      color: #fff; 
    }
  }
  .datepicker-date-display {
    background-color: #1565C0;
  }
</style>
