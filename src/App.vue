<template>
<<<<<<< HEAD
    <div id="empty">
      <ul>
        <li v-for= "n in 20"> {{n}} </li>
      </ul>
=======
    <div id="app">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
            <el-col :span="6" :offset="8">
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="space-around">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
            <el-col :span="6" >
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
            <el-col :span="6" >
                <div class="grid-content bg-purple-dark">
                    In this0 video, we take a look at the Element UI library for Vue. 
                    Element is a component library for Vue.js that allows you to scaffold out your application interface quickly with pre-built Vue components.
                </div>
            </el-col>
        </el-row>
>>>>>>> 99ef3b4711c8dcd2f717e43dd012712d1f333361
    </div>
</template>

<script>
<<<<<<< HEAD

import empty from './components/empty'

export default {
    name : 'app',
    components : {
      empty
    }
=======

import HelloWorld from './components/HelloWorld.vue';

export default {
 name : 'app',
 components : {
     HelloWorld
 }
>>>>>>> 99ef3b4711c8dcd2f717e43dd012712d1f333361
}
</script>

<style>
#app {
<<<<<<< HEAD
  
=======
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 68px;
}

.el-row {
  margin-bottom: 30px;  
>>>>>>> 99ef3b4711c8dcd2f717e43dd012712d1f333361
}
</style>