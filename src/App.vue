<template>
    <div id="empty">
      <ul>
        <li v-for= "n in 20"> {{n}} </li>
      </ul>
    </div>
</template>

<script>

import empty from './components/empty'

export default {
    name : 'app',
    components : {
      empty
    }
}
</script>

<style>
#app {
  
}
</style>