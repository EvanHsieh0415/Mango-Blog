import comp from "D:/Github/EvanHsieh0415/Mango-Blog/docs/.vuepress/.temp/pages/en-us/index.html.vue"
const data = JSON.parse("{\"path\":\"/en-us/\",\"title\":\"Homepage\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"Homepage\",\"heroImage\":\"https://avatars.githubusercontent.com/u/74277414\",\"heroText\":\"MangoJellyPudding's Blog\",\"heroFullScreen\":true,\"tagline\":\"Coding is a game that belongs to me.\",\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-tw\",\"href\":\"https://mango-blog.pages.dev/zh-tw/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mango-blog.pages.dev/en-us/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Mango's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Homepage\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-TW\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Homepage\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.09,\"words\":26},\"filePathRelative\":\"en-us/README.md\",\"excerpt\":\"\"}")
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
