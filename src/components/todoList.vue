<template>
  <div>
    <!-- Table 영역 -->

    <!-- 등록된 데이터가 없을 경우  -->
    <div v-if="isEmpty">
      <el-alert title="ToDo List 값이 없습니다." type="info" :center="true" show-icon :closable="false"></el-alert>
    </div>
    <!-- 등록된 데이터가 있을 경우  -->
    <div v-else>
      <el-table
        :data="activities"
        :row-class-name="tableRowColor"
        :header-row-class-name="headRow"
        style="width: 100%"
      >
        <!-- prop == field name. You can also use its alias:  -->
        <el-table-column fixed width="400" prop="taskName" label="업무"></el-table-column>

        <el-table-column width="800" prop="detailTask" label="상세 내용"></el-table-column>

        <el-table-column width="150" label="마감일">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{getDate(scope.row.date)}}</span>
          </template>
        </el-table-column>

        <el-table-column width="100" prop="selectValue" label="긴급도"></el-table-column>

        <el-table-column width="100" prop="department" label="담당부서"></el-table-column>

        <el-table-column width="100" prop="user" label="담당자"></el-table-column>

        <el-table-column width="100" prop="dDay" label="D-Day"></el-table-column>

        <el-table-column width="300" prop="remark" label="비고"></el-table-column>

        <el-table-column width="300" prop="sliderVal" label="진행도">
          <template slot-scope="scope">
            <!-- <el-slider @value="scope.row.sliderVal" @change="sliderChangeFt(scope.row, scope)" ></el-slider> -->
            <el-slider
              :value="scope.row.sliderVal"
              :step="10"
              @input="handlerInputSlider(scope.row, $event)"
            ></el-slider>
          </template>
        </el-table-column>

        <el-table-column fixed="right" width="100" label="삭제">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="removeActivity(scope.row)"
              size="small"
            ></el-button>
          </template>
        </el-table-column>

        <el-table-column fixed="right" width="100" label="완료">
          <template slot-scope="scope">
            <el-button
              type="success"
              icon="el-icon-check"
              circle
              @click="completeActivity(scope.row)"
              size="small"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <br />

    <!-- Table 상태  -->
    <div>
      <el-row type="flex" justify="center" class="counterSection">
        <el-col :span="3">완료 업무 건수 :</el-col>
        <el-col :span="1">{{completed}}</el-col>
        <el-col :span="2">총 업무 건수 :</el-col>
        <el-col :span="1">{{total}}</el-col>
      </el-row>
    </div>

    <!--필수값 체크된 경우  -->
    <div v-if="isWrongActivity" class="wrongNotification inputDiv">
      <el-alert :title="errorMessage" type="error" :center="true" show- :closable="false"></el-alert>
    </div>

    <!-- 입력 영역 -->
    <div class="inputDiv">
      <el-row>
        <el-col :span="3">업무:</el-col>
        <el-col :span="4">
          <el-input placeholder="업무명을 입력해주세요" v-model="currentActivity.taskName"></el-input>
        </el-col>

        <el-col :span="3">마감일:</el-col>
        <el-col :span="4" class="leftAlign">
          <el-date-picker v-model="currentActivity.date" type="date" placeholder="마감일을 입력해주세요"></el-date-picker>
        </el-col>
      </el-row>

      <br />

      <el-row>
        <el-col :span="3">긴급도:</el-col>
        <el-col :span="4" class="leftAlign">
          <el-select
            v-model="currentSelectValue"
            placeholder="Select"
            @change="handlerChangeSelect($event)"
          >
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="3">담당부서:</el-col>
        <el-col :span="4">
          <el-input placeholder="담당부서를 입력해주세요" v-model="currentActivity.department"></el-input>
        </el-col>

        <el-col :span="3">담당자:</el-col>
        <el-col :span="4">
          <el-input placeholder="담당자를 입력해주세요" v-model="currentActivity.user"></el-input>
        </el-col>

        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          circle
          @click="addActivityMethod()"
        ></el-button>
      </el-row>
      <br />
      <el-row>
        <el-col :span="3">상세 내용:</el-col>
        <el-col :span="18">
          <el-input
            placeholder="상세 내용을 입력해주세요"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            v-model="currentActivity.detailTask"
          ></el-input>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <el-col :span="3">비고:</el-col>
        <el-col :span="18">
          <el-input
            placeholder="비고를 입력해주세요"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 10}"
            v-model="currentActivity.remark"
          ></el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"; // vuex의 mapGetters, mapActions  선언
import moment from "moment";

export default {
  name: "Activity",

  data() {
    // 초기 데이터 설정
    return {
      errorMessage: "",
      currentSelectValue: "하"
    };
  },

  computed: {
    // 데이터 상태 처리
    ...mapGetters([
      // vuex의 헬퍼
      "currentActivity", // this.activities를 store.getters.getActivities 에 매핑
      "activities" // this.activities를 store.getters.getActivities 에 매핑
    ]),

    isWrongActivity() {
      return this.wrong;
    },

    completed() {
      // 완료된 데이터 개수
      return this.activities.filter(val => val.completed == true).length;
    },

    total() {
      // 생성된 데이터 개수
      return this.activities.length;
    },

    isEmpty() {
      // 생성된 데이터 개수를 판단하여 없을경우 True return
      return this.activities.length == 0;
    },

    selectOptions() {
      return [
        {
          value: "상",
          label: "상"
        },
        {
          value: "중",
          label: "중"
        },
        {
          value: "하",
          label: "하"
        }
      ];
    }
  },

  methods: {
    // 함수
    ...mapActions([
      "addActivity",
      "deleteActivity",
      "updateActivity",
      "inputSlider"
    ]), // 컴포넌트 바인딩 헬퍼
    // ex this.addActivity() 를 this.$store.dispatch('addActivity')에 매핑

    handlerInputSlider(row, val) {
      //alert("test");
      this.inputSlider({ id: row.id, val });
    },

    handlerChangeSelect(val) {
      this.currentActivity.selectValue = val;
    },

    addActivityMethod() {
      // data 추가 함수
      if (this.validateData() == true) {
        this.addActivity(); // vuex dml addActivity 실행
      } else {
        this.wrong = true;
        this.setMessageError();
      }
    },

    removeActivity(item) {
      // 데이터 삭제 함수
      if (confirm("삭제 하시겠습니까?"))
        this.deleteActivity({ activity: item });
    },

    completeActivity(item) {
      // 데이터 완료 처리 함수
      this.updateActivity({ activity: item });
    },

    tableRowColor({ row, rowIndex }) {
      if (row.completed == true) {
        return "success-row";
      } else {
        return "warning-row";
      }

      return "";
    },
    headRow() {
      return "el-table_header";
    },

    validateData() {
      // 데이터 필수값 처리 여부 판단 함수
      if (this.taskName !== "" && this.date !== "") {
        return true;
      } else {
        return false;
      }
    },

    setMessageError() {
      // 메세지 설정
      if (this.taskName === "" && this.date === "") {
        this.errorMessage = "업무, 마감일 은 필수값입니다.";
      } else {
        if (this.taskName === "") {
          this.errorMessage = "업무 는 필수값입니다.";
        } else {
          this.errorMessage = "마감일은 필수값입니다.";
        }
      }
    },

    getDate(item) {
      //선택 날짜값
      return moment(item).format("YYYY-MM-DD");
    }
  }
};
</script>

<style>
.main {
  text-align: center;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center;
}

div.cell {
  text-align: center;
}

.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.el-table .warning-row {
  background: rgb(245, 234, 214);
}

.el-table .success-row {
  background: #e9f7e2;
}

.inputDiv {
  margin-top: 50px;
  margin-bottom: 50px;
}

.el-table th {
  background: rgb(210, 232, 253);
}

.leftAlign {
  text-align: left;
}
</style>