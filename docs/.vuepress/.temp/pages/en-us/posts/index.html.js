import comp from "D:/Github/EvanHsieh0415/Mango-Blog/docs/.vuepress/.temp/pages/en-us/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/en-us/posts/\",\"title\":\"Articles\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"home\",\"title\":\"Articles\",\"index\":false,\"article\":false,\"isOriginal\":true,\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-tw\",\"href\":\"https://mango-blog.pages.dev/zh-tw/posts/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mango-blog.pages.dev/en-us/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mango's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Articles\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-TW\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Articles\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"en-us/posts/README.md\",\"excerpt\":\"\"}")
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
