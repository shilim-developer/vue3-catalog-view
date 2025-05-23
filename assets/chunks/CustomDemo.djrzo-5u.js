const r=`<script setup lang="ts">\r
import { CatalogView } from "vue3-catalog-view";\r
import ArticleContent from "./components/ArticleContent.vue";\r
import { ref } from "vue";\r
import { VueInstance } from "@vueuse/core";\r
\r
const articleRef = ref<HTMLElement | VueInstance | undefined>(undefined);\r
const articleContainerRef = ref<HTMLElement | undefined>(undefined);\r
<\/script>\r
\r
<template>\r
  <div class="wrapper">\r
    <div class="article-content" ref="articleContainerRef">\r
      <article-content ref="articleRef" class="article"></article-content>\r
    </div>\r
    <catalog-view\r
      class="catalog"\r
      :content-container="articleRef"\r
      :scroll-container="articleContainerRef"\r
      :selector="['h1', 'h2', 'h3', 'h4']"\r
      :use-anchor="false"\r
      :top-distance="20"\r
      :is-watch="true"\r
    >\r
      <template #default="{ active, anchor }">\r
        <div\r
          class="catalog-item"\r
          :class="{ active }"\r
          :style="{ paddingLeft: \`\${anchor.level * 15}px\` }"\r
        >\r
          {{ anchor.title }}\r
        </div>\r
      </template>\r
    </catalog-view>\r
  </div>\r
</template>\r
\r
<style scoped lang="scss">\r
.catalog {\r
  width: 250px;\r
  max-height: 100%;\r
}\r
.article {\r
  padding: 0 20px;\r
}\r
\r
.catalog-item {\r
  font-size: 14px;\r
  padding: 4px;\r
  cursor: pointer;\r
  &.active {\r
    background: rgba(0, 0, 0, 0.1);\r
    color: rgba(30, 97, 243, 0.8);\r
  }\r
  &:hover {\r
    color: rgba(30, 97, 243, 0.8);\r
  }\r
}\r
\r
.wrapper {\r
  width: 100%;\r
  height: 60vh;\r
  display: flex;\r
  gap: 20px;\r
  align-items: center;\r
  overflow: hidden;\r
  .article-content {\r
    flex: 1;\r
    height: 100%;\r
    overflow: auto;\r
  }\r
}\r
</style>\r
`;export{r as T};
