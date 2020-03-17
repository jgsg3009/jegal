<template>
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
    </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';

export default {
 name : 'app',
 components : {
     HelloWorld
 }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 68px;
}

.el-row {
  margin-bottom: 30px;  
}
</style>