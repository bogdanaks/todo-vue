<template>
    <nav class="blue darken-1">
        <div class="nav-wrapper container">
            <div class="row">
                <div class="col s6 offset-s3">
                    <router-link to='/' class="brand-logo">Todo-Vue</router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <router-link to="/" active-class="active" tag="li" exact><a>Create</a></router-link>
                        <router-link to="/list" active-class="active" tag="li" exact><a>List</a></router-link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>