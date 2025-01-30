<!--
 * @Description: 
 * @Author: yeshooo@马超
 * @version: 
 * @Date: 2025-01-28 03:55:09
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-30 13:45:52
-->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- 插槽1 -->

    <!-- <template #aside-outline-before>
      <div class="title">aside-outline-before</div>
    </template> -->

    <!-- 插槽2 -->

    <!-- <template #doc-before>
      <div class="title">doc-before</div>
    </template> -->

    <!-- <template #layout-bottom>
      <div class="custom-footer">123</div>
    </template> -->
  </Layout>
</template>

<style>
.custom-footer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
