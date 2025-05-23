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
      key="point"\r
      class="catalog"\r
      type="point"\r
      :content-container="articleRef"\r
      :scroll-container="articleContainerRef"\r
      :selector="['h1', 'h2', 'h3', 'h4']"\r
      :use-anchor="false"\r
      :top-distance="20"\r
      :is-watch="true"\r
    >\r
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
    color: rgba(30, 97, 243, 0.836);\r
  }\r
  &:hover {\r
    color: rgba(30, 97, 243, 0.836);\r
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
`,n=`<script setup lang="ts">\r
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
      :key="'line'"\r
      class="catalog"\r
      type="line"\r
      :content-container="articleRef"\r
      :scroll-container="articleContainerRef"\r
      :selector="['h1', 'h2', 'h3', 'h4']"\r
      :use-anchor="false"\r
      :top-distance="20"\r
      :is-watch="true"\r
    >\r
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
    color: rgba(30, 97, 243, 0.836);\r
  }\r
  &:hover {\r
    color: rgba(30, 97, 243, 0.836);\r
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
`;export{n as T,r as a};
