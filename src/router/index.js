import Vue from 'vue'
import Router from 'vue-router'

import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'

import addTask from '@/components/AddTask'
import listPage from '@/components/ListPage'

import SignUp from '@/components/SignUp'
import todoList from '@/components/todoList' // todoList Component vue 파일 import
import codeMirror from '@/components/CodeMirror'
import test1 from '@/components/test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: todoList
    },
    { // todoList route 설정
      path: '/todoList',
      name: 'todoList',
      component: todoList
    },
    {
      path: '/todoList/type1',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: addTask
    },
    {
      path: '/addTask/save',
      name: 'taskSave',
      component: addTask
    },
    {
      path: '/codeMirror',
      name: 'codeMirror',
      component: codeMirror
    }
  ]
})
