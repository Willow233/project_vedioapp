<template>
  <van-tabs v-model:active="active">
  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { getNavList } from '@/api/home'
import axios from 'axios'

const active = ref(0)
const list = ref([])
/* const navList = async () => {
  const res = await getNavList()
  return res.data
  问题！！！
} */

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  list.value = res.data
})

</script>

<style>

</style>
