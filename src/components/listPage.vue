<template>
  <el-table :data="tableData" border style="width: 100%" max-height="490">
    <el-table-column fixed  prop="date" label="시작일자" width="100"></el-table-column>
    <el-table-column prop="endDate" label="계획 종료일" width="100"></el-table-column>
    <el-table-column prop="name" label="업무명" width="200"></el-table-column>
    <el-table-column prop="content" label="내용" width="500"></el-table-column>
    <el-table-column prop="state" label="상태" width="120"></el-table-column>
    <el-table-column prop="state" label="남은 일자" width="120"></el-table-column>
    <el-table-column fixed="right" label="버튼" width="100">
      <template slot-scope="scope">
        <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
          삭제
        </el-button>
        <el-button  @click.native.prevent="approvalData(scope.$index, tableData)" type="text" size="small">
          완료
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows){
        rows.splice(index, 1);
      },
      approvalData(index, rows) {
        alert('데이터 완료')
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          content: 'Los Angeles',
          endDate: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>