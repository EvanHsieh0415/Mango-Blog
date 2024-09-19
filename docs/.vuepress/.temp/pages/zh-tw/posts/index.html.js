import comp from "D:/Github/EvanHsieh0415/Mango-Blog/docs/.vuepress/.temp/pages/zh-tw/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh-tw/posts/\",\"title\":\"文章列表\",\"lang\":\"zh-TW\",\"frontmatter\":{\"icon\":\"home\",\"title\":\"文章列表\",\"index\":false,\"article\":false,\"isOriginal\":true,\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://mango-blog.pages.dev/en-us/posts/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mango-blog.pages.dev/zh-tw/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"芒果的部落格\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章列表\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-TW\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"文章列表\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"zh-tw/posts/README.md\",\"excerpt\":\"\"}")
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
