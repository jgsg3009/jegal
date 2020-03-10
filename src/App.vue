<template>
  <div id="app">
    <el-container>
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item-group>
          <el-menu-item index="1" @click.native.prevent="menuClick('add')">
            <i class="el-icon-document-add"></i>
            <span slot="title">Add Task</span>
          </el-menu-item>
          <el-menu-item index="2" @click.native.prevent="menuClick('list')">
            <i class="el-icon-s-unfold"></i>
            <span slot="title">Data List</span>
          </el-menu-item>
          <el-menu-item index="3" @click.native.prevent="menuClick('dash')">
            <i class="el-icon-s-data"></i>
            <span slot="title">To Do List</span>
          </el-menu-item>
          <el-menu-item index="4" @click.native.prevent="menuClick('set')">
            <i class="el-icon-setting"></i>
            <span slot="title">Setting</span>
          </el-menu-item>
          <el-menu-item index="5" @click.native.prevent="menuClick('codeMirror')">
            <i class="el-icon-setting"></i>
            <span slot="title">codeMirror</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>

      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200;
  min-height: 500px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(type) {
      var router = this.$router;
      if (type == "list") {
        router.push("/listPage");
      } else if (type == "add") {
        router.push("/addTask");
      } else if (type == "set") {
        router.push("/todoList/type1");
      } else if (type == "codeMirror") {
        router.push("/codeMirror");
      } else {
        router.push("/todoList");
      }
    }
  }
};
</script>