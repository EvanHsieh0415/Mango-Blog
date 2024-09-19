import comp from "D:/Github/EvanHsieh0415/Mango-Blog/docs/.vuepress/.temp/pages/zh-tw/studing/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh-tw/studing/\",\"title\":\"學習筆記\",\"lang\":\"zh-TW\",\"frontmatter\":{\"index\":false,\"article\":false,\"title\":\"學習筆記\",\"isOriginal\":true,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mango-blog.pages.dev/zh-tw/studing/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"芒果的部落格\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"學習筆記\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-TW\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"學習筆記\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"zh-tw/studing/README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
