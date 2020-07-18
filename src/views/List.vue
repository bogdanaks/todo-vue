<template>
    <div class="row">

        <div class="contentCards" v-if="tasks.length">
            <div class="col s4" v-for="task in tasks" :key="task.id">
                <div class="card blue darken-3 z-depth-2 small">
                    <div class="card-content white-text">
                        <span class="card-title">{{task.title}}</span>
                        <div class="descContent">
                            <p>{{task.description}}</p>
                        </div>
                        <p class="right">{{ new Date(task.date).toLocaleDateString() }}</p>
                    </div>
                    <div class="card-action">
                        <button class="waves-effect waves-teal btn-flat white-text">Delete task</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="noTasks" v-else>
            <h1>No tasks</h1>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getTasks']),
        tasks: function () {
            return this.getTasks
        }
    }
}
</script>

<style lang="scss" scoped>
    $blueColor: #1E88E5;
    %scrollbar {
        ::-webkit-scrollbar {
            width: 0.5vh;
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom,  $blueColor 0%, $blueColor 100%);
            border: none;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: $blueColor;
        }
        ::-webkit-scrollbar-thumb:active {
            background: $blueColor;
        }
        ::-webkit-scrollbar-track {
            background: rgba($color: #1362a8, $alpha: 1.0);
            border: none;
            border-radius: 50px;
        }
        ::-webkit-scrollbar-corner {
            background: transparent;
        }
    };
    .descContent {
        @extend %scrollbar;
        p {
            height: 140px;
            overflow-y: auto;
        }
    }
    .card-title {
        color: rgba(255, 255, 255, 0.8) !important; 
    }
    .descContent {
        color: rgba(255, 255, 255, 0.8) !important; 
    }
</style>