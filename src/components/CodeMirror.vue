<template>
  <div class="ScriptEdit">
    <div class="btnDiv">
      <el-button type="info" @click="captuer">Capture</el-button>
      <el-button type="info" @click="flowChart">Flow Chart</el-button>
      <el-button type="info" @click="save" class="rigthBtn">Save</el-button>
      <el-button type="info" @click="run" class="rigthBtn">Run</el-button>
    </div>

    <!-- codemirror -->
    <codemirror v-model="code" :options="cmOption" @input="onMdCodeChange" ref="mdeditor"></codemirror>
  </div>
</template>

<script>
// language
import "codemirror/mode/python/python";
import "codemirror/theme/base16-light.css";

// require active-line.js
import "codemirror/addon/selection/active-line";
// closebrackets
import "codemirror/addon/edit/closebrackets";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/emacs";
// code mirorr default data
const code = ` codemirror img Test start
    
click('h6qqmn550wedo29g7b8a.jpg')

click('y1f0rufvpi64wr5z84k0.jpg')

img Test End
`;
export default {
  data() {
    return {
      prevCh: 0,
      name: "mdeditor",
      code, // code mirror default data set
      cmOption: {
        // code mirror option set
        autoCloseBrackets: true,
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/x-python",
        // keyMap: 'emacs',
        theme: "lesser-dark"
      }
    };
  },
  mounted() {
    const cmRef = this.$refs.mdeditor; // vue 화면의 codemirror 영역 선언
    const codeM = cmRef.codemirror; // codemirror 영역의 codemirror module 선언

    const tgLine = codeM.doc.sel.ranges[0].head.line;
    const lineData = codeM.getLine(2);
    lineData.replace("click('", "");
    lineData.replace("')", "");
    const img = document.createElement("img");
    const srcBase = "https://img.insight.co.kr/static/2018/01/19/700/"; // 기본 경로 (추후 property 로 관리)
    img.src = srcBase + "h6qqmn550wedo29g7b8a.jpg";
    img.className = "cm-imgTag";

    codeM.markText(
      // 해당
      { line: 2, ch: 6 },
      { line: 2, ch: 32 },
      {
        clearOnEnter: false,
        collapsed: true,
        replacedWith: img
      }
    );
  },
  methods: {
    captuer() {
      alert("captuer");
    },
    flowChart() {
      this.$emit("flowChartsCondition");
    },
    save() {
      alert("save");
    },
    run() {
      alert("run");
    },
    onMdCodeChange(cm) {
      const cmRef = this.$refs.mdeditor;
      const codeM = cmRef.codemirror;
    },
    onMdCodefc(cm, fc) {
      const cmRef = this.$refs.mdeditor;
      const codeM = cmRef.codemirror;
    }
  }
};
</script>

<style>
.cm-imgTag {
  width: 100px;
  height: 100px;
}

.CodeMirror .cm-s-base16-light .vue-codemirror {
  text-align: left;
  min-height: calc(100vh - 150px);
}
.CodeMirror {
  height: calc(100vh - 200px);
}
.ScriptEdit {
  width: 100%;
  float: right;
  box-sizing: border-box;
  background: #292929;
  text-align: left;
  min-height: calc(100vh - 150px);
}

.btnDiv {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.rigthBtn {
  float: right;
}
/* lesser-dark theme CSS */
.cm-s-lesser-dark {
  line-height: 1.3em;
}
.cm-s-lesser-dark.CodeMirror {
  background: #292929;
  color: #ebefe7;
  text-shadow: 0 -1px 1px #292929;
}
.cm-s-lesser-dark div.CodeMirror-selected {
  background: #45443b;
} /* 33322B*/
.cm-s-lesser-dark .CodeMirror-line::selection,
.cm-s-lesser-dark .CodeMirror-line > span::selection,
.cm-s-lesser-dark .CodeMirror-line > span > span::selection {
  background: rgba(69, 68, 59, 0.99);
}
.cm-s-lesser-dark .CodeMirror-line::-moz-selection,
.cm-s-lesser-dark .CodeMirror-line > span::-moz-selection,
.cm-s-lesser-dark .CodeMirror-line > span > span::-moz-selection {
  background: rgba(69, 68, 59, 0.99);
}
.cm-s-lesser-dark .CodeMirror-cursor {
  border-left: 1px solid white;
}
.cm-s-lesser-dark pre {
  padding: 0 8px;
} /*editable code holder*/

.cm-s-lesser-dark.CodeMirror span.CodeMirror-matchingbracket {
  color: #7efc7e;
} /*65FC65*/

.cm-s-lesser-dark .CodeMirror-gutters {
  background: #292929;
  border-right: 1px solid #aaa;
}
.cm-s-lesser-dark .CodeMirror-guttermarker {
  color: #599eff;
}
.cm-s-lesser-dark .CodeMirror-guttermarker-subtle {
  color: #777;
}
.cm-s-lesser-dark .CodeMirror-linenumber {
  color: #777;
}

.cm-s-lesser-dark span.cm-header {
  color: #a0a;
}
.cm-s-lesser-dark span.cm-quote {
  color: #090;
}
.cm-s-lesser-dark span.cm-keyword {
  color: #599eff;
}
.cm-s-lesser-dark span.cm-atom {
  color: #c2b470;
}
.cm-s-lesser-dark span.cm-number {
  color: #b35e4d;
}
.cm-s-lesser-dark span.cm-def {
  color: white;
}
.cm-s-lesser-dark span.cm-variable {
  color: #d9bf8c;
}
.cm-s-lesser-dark span.cm-variable-2 {
  color: #669199;
}
.cm-s-lesser-dark span.cm-variable-3,
.cm-s-lesser-dark span.cm-type {
  color: white;
}
.cm-s-lesser-dark span.cm-property {
  color: #92a75c;
}
.cm-s-lesser-dark span.cm-operator {
  color: #92a75c;
}
.cm-s-lesser-dark span.cm-comment {
  color: #666;
}
.cm-s-lesser-dark span.cm-string {
  color: #bcd279;
}
.cm-s-lesser-dark span.cm-string-2 {
  color: #f50;
}
.cm-s-lesser-dark span.cm-meta {
  color: #738c73;
}
.cm-s-lesser-dark span.cm-qualifier {
  color: #555;
}
.cm-s-lesser-dark span.cm-builtin {
  color: #ff9e59;
}
.cm-s-lesser-dark span.cm-bracket {
  color: #ebefe7;
}
.cm-s-lesser-dark span.cm-tag {
  color: #669199;
}
.cm-s-lesser-dark span.cm-attribute {
  color: #81a4d5;
}
.cm-s-lesser-dark span.cm-hr {
  color: #999;
}
.cm-s-lesser-dark span.cm-link {
  color: #7070e6;
}
.cm-s-lesser-dark span.cm-error {
  color: #9d1e15;
}

.cm-s-lesser-dark .CodeMirror-activeline-background {
  background: #3c3a3a;
}
.cm-s-lesser-dark .CodeMirror-matchingbracket {
  outline: 1px solid grey;
  color: white !important;
}
</style>
