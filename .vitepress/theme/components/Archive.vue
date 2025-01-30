<!--
 * @Description: 
 * @Author: yeshooo@马超
 * @version: 
 * @Date: 2025-01-30 11:29:14
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-30 11:29:27
-->
// .vitepress/theme/components/Archive.vue
<template>
  <div>
    <h1>归档</h1>
    <ul>
      <li v-for="post in posts" :key="post.url">
        <a :href="post.url">{{ post.title }}</a>
        <p>{{ post.updated.string }}</p>
        <p>{{ post.created.string }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { data as postsData } from '../utils/notes.data.ts';

const posts = ref([]);

onMounted(() => {
  console.log(postsData);
  posts.value = postsData;
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1em 0;
}
</style>
