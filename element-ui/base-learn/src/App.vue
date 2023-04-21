<template>
  <div id="app">
    <!-- this is app -->
    <!-- <button @click="passMsg">传你</button>
    <m-parent :msg="a" :msgb="b" :msgc="c"></m-parent> -->
    <!-- <router-link to="/home">home</router-link>
    <button @click="toHome">home</button> -->
    <router-view></router-view>
  </div>
</template>

<style>
</style>

<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default {
  data () {
    return {
      a: 'msga',
      b: 'msga',
      c: 'msga',
    }
  },
  components: {
    MParent,
  },
  methods: {
    passMsg () {
      bus.$emit('msg', 'i am from app')
    },
    toHome () {
      // this.$router.push({ path: '/home', query: {name: 'Jack'} })
      this.$router.push({ name: 'home', params: {id: 3} })
    }
  },
}
</script>