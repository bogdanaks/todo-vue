<template>
    <div class="row">

        <div class="col s4">
            <div class="card blue darken-3 z-depth-2 small">
                <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                    <div class="descContent">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectivelyI am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively</p>
                    </div>
                </div>
                <div class="card-action">
                    <button class="waves-effect waves-teal btn-flat white-text">Delete task</button>
                </div>
            </div>
        </div>

        <div class="col s4">
            <div class="card blue darken-3 z-depth-2 small">
                <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                    <div class="descContent">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card-action">
                    <button class="waves-effect waves-teal btn-flat white-text">Delete task</button>
                </div>
            </div>
        </div>

        <div class="col s4">
            <div class="card blue darken-3 z-depth-2 small">
                <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                    <div class="descContent">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                <div class="card-action">
                    <button class="waves-effect waves-teal btn-flat white-text">Delete task</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

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
            height: 160px;
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