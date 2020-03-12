<template>
    <div id="app">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>   
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name : 'app',
    components : {
        HelloWorld
    }
}
</script>

<style>

#app {
    font-family: 'Avenir', Helvetica,Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

</style>