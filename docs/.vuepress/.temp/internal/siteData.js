export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://avatars.githubusercontent.com/u/74277414\"}]],\"locales\":{\"/en-us/\":{\"lang\":\"en-US\",\"title\":\"Mango's Blog\",\"description\":\"MangoJellyPudding's personal blog, hosted on CloudFlare Page\"},\"/zh-tw/\":{\"lang\":\"zh-TW\",\"title\":\"芒果的部落格\",\"description\":\"芒果凍布丁的個人部落格，架設於 CloudFlare Page 上\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
