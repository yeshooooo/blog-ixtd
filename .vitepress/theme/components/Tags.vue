<!--
 * @Description: 
 * @Author: yeshooo@马超
 * @version: 
 * @Date: 2025-01-29 22:34:15
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-29 23:17:49
-->
<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

const { frontmatter } = useData();
const tagArray = computed(() => {
  const { tags = '' } = frontmatter.value;
  return tags.split('|');
});

const title = computed(() => {
  const { title = '' } = frontmatter.value;
  return title;
});
</script>

<template>
  <div class="my-tags" v-if="tagArray.length && tagArray[0]">
    Tags:
    <a :href="`/tags.html?tag=${tag}`" v-for="tag in tagArray" :key="tag">{{
      tag
    }}</a>
  </div>
</template>

<style scoped lang="stylus">
.my-tags {
    flex: 1;
    font-size: 14px;
    color: var(--vp-c-text-3);

    a {
        color: var(--vp-c-sponsor);
        font-weight: bolder;
        margin-left: 8px;

        &:hover {
            color: var(--vp-c-brand);
        }
    }
}
.my-title.title-h1 {

  background: -webkit-linear-gradient(10deg, #bca8c5 5%, #7e91f0 15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
