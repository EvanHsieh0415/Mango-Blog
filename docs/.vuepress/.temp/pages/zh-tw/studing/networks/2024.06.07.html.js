import comp from "D:/Github/EvanHsieh0415/Mango-Blog/.vuepress/.temp/pages/zh-tw/studing/networks/2024.06.07.html.vue"
const data = JSON.parse("{\"path\":\"/zh-tw/studing/networks/2024.06.07.html\",\"title\":\"2024.06.07\",\"lang\":\"zh-TW\",\"frontmatter\":{\"footer\":\"作者：D11219121\",\"author\":\"D11219121\",\"category\":[\"學習筆記 - 1122_資訊與網路安全概論\"],\"tag\":[\"大一下\"],\"description\":\"2024.06.07 6.5 網際網路傳輸協定：TCP 6.5.7 TCP 連接管理模式 6.5.9 TCP 計時器管理 $\\\\texttt{SRTT} = \\\\alpha \\\\texttt{RTT} + (1 - \\\\alpha)\\\\texttt{R}$ $\\\\texttt{RTTVAR} = \\\\beta \\\\texttt{RTTVAR} + (1 - \\\\beta...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mango-blog.pages.dev/zh-tw/studing/networks/2024.06.07.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"芒果的部落格\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"2024.06.07\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"2024.06.07 6.5 網際網路傳輸協定：TCP 6.5.7 TCP 連接管理模式 6.5.9 TCP 計時器管理 $\\\\texttt{SRTT} = \\\\alpha \\\\texttt{RTT} + (1 - \\\\alpha)\\\\texttt{R}$ $\\\\texttt{RTTVAR} = \\\\beta \\\\texttt{RTTVAR} + (1 - \\\\beta...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://mango-blog.pages.dev/studing/networks/2024.06.07/0.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-TW\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"D11219121\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"大一下\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"2024.06.07\\\",\\\"image\\\":[\\\"https://mango-blog.pages.dev/studing/networks/2024.06.07/0.png\\\",\\\"https://mango-blog.pages.dev/studing/networks/2024.06.07/1.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"D11219121\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"6.5 網際網路傳輸協定：TCP\",\"slug\":\"_6-5-網際網路傳輸協定-tcp\",\"link\":\"#_6-5-網際網路傳輸協定-tcp\",\"children\":[{\"level\":3,\"title\":\"6.5.7 TCP 連接管理模式\",\"slug\":\"_6-5-7-tcp-連接管理模式\",\"link\":\"#_6-5-7-tcp-連接管理模式\",\"children\":[]},{\"level\":3,\"title\":\"6.5.9 TCP 計時器管理\",\"slug\":\"_6-5-9-tcp-計時器管理\",\"link\":\"#_6-5-9-tcp-計時器管理\",\"children\":[]},{\"level\":3,\"title\":\"6.5.10 TCP 壅塞控制\",\"slug\":\"_6-5-10-tcp-壅塞控制\",\"link\":\"#_6-5-10-tcp-壅塞控制\",\"children\":[]}]},{\"level\":2,\"title\":\"6.6 效能議題\",\"slug\":\"_6-6-效能議題\",\"link\":\"#_6-6-效能議題\",\"children\":[{\"level\":3,\"title\":\"6.6.2 網路效能量測\",\"slug\":\"_6-6-2-網路效能量測\",\"link\":\"#_6-6-2-網路效能量測\",\"children\":[]}]},{\"level\":2,\"title\":\"6.7 耐延遲網路\",\"slug\":\"_6-7-耐延遲網路\",\"link\":\"#_6-7-耐延遲網路\",\"children\":[{\"level\":3,\"title\":\"6.7.1 DTN 架構\",\"slug\":\"_6-7-1-dtn-架構\",\"link\":\"#_6-7-1-dtn-架構\",\"children\":[]}]},{\"level\":2,\"title\":\"6.8 總結\",\"slug\":\"_6-8-總結\",\"link\":\"#_6-8-總結\",\"children\":[]}],\"readingTime\":{\"minutes\":2.31,\"words\":692},\"filePathRelative\":\"zh-tw/studing/networks/2024.06.07.md\",\"excerpt\":\"\\n<h2>6.5 網際網路傳輸協定：TCP</h2>\\n<h3>6.5.7 TCP 連接管理模式</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>Status</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>CLOSED</td>\\n<td>Not any connection</td>\\n</tr>\\n<tr>\\n<td>LISTEN</td>\\n<td>Server waiting for entry</td>\\n</tr>\\n<tr>\\n<td>SYN RCVD</td>\\n<td>Connect requests; wait for ACK</td>\\n</tr>\\n<tr>\\n<td>SYN SENT</td>\\n<td>Application start a connection</td>\\n</tr>\\n<tr>\\n<td>ESTABLISHED</td>\\n<td>Normal data connecting</td>\\n</tr>\\n<tr>\\n<td>FIN WAIT 1</td>\\n<td>Application said finished</td>\\n</tr>\\n<tr>\\n<td>FIN WAIT 2</td>\\n<td>Other side approve free</td>\\n</tr>\\n<tr>\\n<td>TIME WAIT</td>\\n<td>Wait for all package dead</td>\\n</tr>\\n<tr>\\n<td>CLOSING</td>\\n<td>Both side try close together</td>\\n</tr>\\n<tr>\\n<td>CLOSE WAIT</td>\\n<td>Another side starting free</td>\\n</tr>\\n<tr>\\n<td>LAST ACK</td>\\n<td>Wait for all package dead</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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