<template>
  <div id="addTask">
    <div style="margin: 20px;"></div>
    <button v-on:click="save">save</button>
    <el-form :label-position="labelPosition" label-width="100px" :model="task">
      <el-form-item label="업무명">
        <el-input v-model="task.name"></el-input>
      </el-form-item>
      <el-form-item label="상태">
        <el-input v-model="task.region"></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input v-model="task.type"></el-input>
      </el-form-item>
      <el-form-item label="계획 종료일">
        <el-input v-model="task.endDate"></el-input>
      </el-form-item>
      <el-form-item label="업무 상태">
        <el-input v-model="task.condition"></el-input>
      </el-form-item>
      <el-form-item label="업무 중요도">
        <el-input v-model="task.importance"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      labelPosition: "right",
      task: {
        name: "",
        region: "",
        type: "",
        endDate: "",
        condition: "",
        importance: ""
      }
    };
  },
  methods: {
    save: function(event) {
      this.$http
        .post("/api/task/save", {
          //axios 사용
          task: this.task
        })
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
            alert("Success");
            var router = this.$router;
            router.push("/listPage");
          }
        })
        .catch(function(error) {
          alert("error");
          var router = this.$router;
          router.push("/");
        });
    }
  }
};
</script>


<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* .bg-purple {
    background: #c5d8f7;
  } */
</style>