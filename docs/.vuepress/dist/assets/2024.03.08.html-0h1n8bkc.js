import{_ as t,c as e,o as n,e as a}from"./app--AI8GdGT.js";const i="/studing/information-and-network-security/2024.03.08/0.png",d="/studing/information-and-network-security/2024.03.08/1.png",r={},o=a(`<h1 id="_2024-03-08" tabindex="-1"><a class="header-anchor" href="#_2024-03-08"><span>2024.03.08</span></a></h1><h2 id="_1-5-2-行動電話網路" tabindex="-1"><a class="header-anchor" href="#_1-5-2-行動電話網路"><span>1.5.2 行動電話網路</span></a></h2><table><thead><tr><th>代數</th><th>技術</th><th>信號類型</th></tr></thead><tbody><tr><td>第一代 1G</td><td>AMPS</td><td>類比 Analogy</td></tr><tr><td>第二代 2G</td><td>GSM<br>GSM+GPRS</td><td>數位 Digital</td></tr><tr><td>第三代 3G</td><td>UMTS</td><td>數位 Digital</td></tr><tr><td>第四代 4G</td><td>LTE</td><td>數位 Digital</td></tr><tr><td>第五代 5G</td><td>UWB</td><td>數位 Digital</td></tr></tbody></table><ul><li><mark>換手（Handoff）</mark>：A 基地台 ↔ B 基地台，同一公司（系統）</li><li><mark>漫遊（Roaming）</mark>：A 系統 ↔ B 系統</li></ul><h2 id="_1-5-4-rfid-與感測網路" tabindex="-1"><a class="header-anchor" href="#_1-5-4-rfid-與感測網路"><span>1.5.4 RFID 與感測網路</span></a></h2><p><mark>RFID，無線射頻辨識（Radio-frequency identification）</mark></p><div class="language-graphviz line-numbers-mode" data-highlighter="shiki" data-ext="graphviz" data-title="graphviz" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>graph {</span></span>
<span class="line"><span>  // bgcolor=&quot;#00000000&quot;;</span></span>
<span class="line"><span>  RFID -- 動物晶片;</span></span>
<span class="line"><span>  RFID -- 悠遊卡;</span></span>
<span class="line"><span>  RFID -- 圖書館書本晶片;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>二戰時期就出現了</p></div><h2 id="_1-6-2-國際標準的-重要角色" tabindex="-1"><a class="header-anchor" href="#_1-6-2-國際標準的-重要角色"><span>1.6.2 國際標準的 重要角色</span></a></h2><table><tr><td><img src="`+i+'"></td><td><table><tr><th>編號</th><th>筆記</th></tr><tr><td><mark>802.3</mark></td><td>目前有線網路的標準</td></tr><tr><td><mark>802.11</mark></td><td>Wi-Fi，現行最高為Wi-Fi 7.0</td></tr><tr><td><mark>802.15</mark></td><td>❌藍芽，⭕藍牙</td></tr><tr><td><mark>802.16</mark></td><td><a href="https://zh.wikipedia.org/zh-tw/WiMAX">WiMAX</a></td></tr></table></td></tr></table><h2 id="_1-7-公制單位" tabindex="-1"><a class="header-anchor" href="#_1-7-公制單位"><span>1.7 公制單位</span></a></h2><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><mark>KMGTPEZY</mark></li></ul><h2 id="_2-1-3-頻道最大資料傳輸率" tabindex="-1"><a class="header-anchor" href="#_2-1-3-頻道最大資料傳輸率"><span>2.1.3 頻道最大資料傳輸率</span></a></h2><div class="hint-container info"><p class="hint-container-title">相關信息</p><p>有雜訊用 <a href="#shnnon">#Shannon</a> <code>$2B\\cdot log_2V$ bit/second</code> 無雜訊用 <a href="#nyquist">#Nyquist</a> <code>$B\\cdot log_2(1+S/N)$ bit/second</code></p></div><h3 id="nyquist" tabindex="-1"><a class="header-anchor" href="#nyquist"><span>Nyquist</span></a></h3><p>在<mark>沒有</mark>雜訊的情況下，通道本身頻寬<code>B</code> Hz 信號用 <code>V</code> 位元編碼的最大傳輸率為</p><blockquote><p>$2B\\cdot log_2V$ bit/second</p></blockquote><p>舉例：</p><blockquote><p>$B = 10 MHz$ 信號用 8 bits 編碼，求最大傳輸速率</p><p>$B=10\\times 10^6(Hz)$ &gt; $V=8$ &gt; $\\therefore 2\\times 10\\times 10^6\\times log_28$ &gt; $=2\\times 10\\times 10^6\\times 3$ &gt; $=60\\times 10^6(bits/second)$</p></blockquote><h3 id="shannon" tabindex="-1"><a class="header-anchor" href="#shannon"><span>Shannon</span></a></h3><p>在<mark>有</mark>雜訊的情況下，通道本身頻寬<code>B</code> Hz 信號在 <code>S/N</code> 雜訊比中的最大傳輸率為</p><blockquote><p>$B\\cdot log_2(1+S/N)$ bit/second</p></blockquote><p>舉例：</p><blockquote><p>$B=10MHz$ &gt; $S/N=255$ &gt; $=80,000,000$</p></blockquote><h3 id="結論" tabindex="-1"><a class="header-anchor" href="#結論"><span>結論</span></a></h3><blockquote><p>Shannon 的結論主要是利用資訊理論的論點推導而出，並且可應用至任何受熱雜訊影響的頻道。讓 ADSL 超過 13 Mbps，必須改進 SNR（例如藉由在線路上靠近用戶處安裝數位中繼器）或使用更多頻寬，如演進至 ADSL2 + 所做的改進。</p></blockquote>',27),s=[o];function l(c,h){return n(),e("div",null,s)}const m=t(r,[["render",l],["__file","2024.03.08.html.vue"]]),g=JSON.parse('{"path":"/zh-tw/studing/information-and-network-security/2024.03.08.html","title":"2024.03.08","lang":"zh-TW","frontmatter":{"footer":"作者：D11219121","author":"D11219121","isOriginal":true,"category":["學習筆記 - 1122_資訊與網路安全概論"],"tag":["大一下"],"description":"2024.03.08 1.5.2 行動電話網路 換手（Handoff）：A 基地台 ↔ B 基地台，同一公司（系統） 漫遊（Roaming）：A 系統 ↔ B 系統 1.5.4 RFID 與感測網路 RFID，無線射頻辨識（Radio-frequency identification） 注 二戰時期就出現了 1.6.2 國際標準的 重要角色 1.7 公...","head":[["meta",{"property":"og:url","content":"https://mango-blog.pages.dev/zh-tw/studing/information-and-network-security/2024.03.08.html"}],["meta",{"property":"og:site_name","content":"芒果的部落格"}],["meta",{"property":"og:title","content":"2024.03.08"}],["meta",{"property":"og:description","content":"2024.03.08 1.5.2 行動電話網路 換手（Handoff）：A 基地台 ↔ B 基地台，同一公司（系統） 漫遊（Roaming）：A 系統 ↔ B 系統 1.5.4 RFID 與感測網路 RFID，無線射頻辨識（Radio-frequency identification） 注 二戰時期就出現了 1.6.2 國際標準的 重要角色 1.7 公..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mango-blog.pages.dev/studing/information-and-network-security/2024.03.08/1.png"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-09-13T03:07:33.000Z"}],["meta",{"property":"article:author","content":"D11219121"}],["meta",{"property":"article:tag","content":"大一下"}],["meta",{"property":"article:modified_time","content":"2024-09-13T03:07:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2024.03.08\\",\\"image\\":[\\"https://mango-blog.pages.dev/studing/information-and-network-security/2024.03.08/1.png\\"],\\"dateModified\\":\\"2024-09-13T03:07:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"D11219121\\"}]}"]]},"headers":[{"level":2,"title":"1.5.2 行動電話網路","slug":"_1-5-2-行動電話網路","link":"#_1-5-2-行動電話網路","children":[]},{"level":2,"title":"1.5.4 RFID 與感測網路","slug":"_1-5-4-rfid-與感測網路","link":"#_1-5-4-rfid-與感測網路","children":[]},{"level":2,"title":"1.6.2 國際標準的 重要角色","slug":"_1-6-2-國際標準的-重要角色","link":"#_1-6-2-國際標準的-重要角色","children":[]},{"level":2,"title":"1.7 公制單位","slug":"_1-7-公制單位","link":"#_1-7-公制單位","children":[]},{"level":2,"title":"2.1.3 頻道最大資料傳輸率","slug":"_2-1-3-頻道最大資料傳輸率","link":"#_2-1-3-頻道最大資料傳輸率","children":[{"level":3,"title":"Nyquist","slug":"nyquist","link":"#nyquist","children":[]},{"level":3,"title":"Shannon","slug":"shannon","link":"#shannon","children":[]},{"level":3,"title":"結論","slug":"結論","link":"#結論","children":[]}]}],"git":{"createdTime":1726108236000,"updatedTime":1726196853000,"contributors":[{"name":"Mango Jelly Pudding","email":"evan940415@gmail.com","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"zh-tw/studing/information-and-network-security/2024.03.08.md","localizedDate":"2024年9月12日","excerpt":"\\n<h2>1.5.2 行動電話網路</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>代數</th>\\n<th>技術</th>\\n<th>信號類型</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>第一代 1G</td>\\n<td>AMPS</td>\\n<td>類比 Analogy</td>\\n</tr>\\n<tr>\\n<td>第二代 2G</td>\\n<td>GSM<br>GSM+GPRS</td>\\n<td>數位 Digital</td>\\n</tr>\\n<tr>\\n<td>第三代 3G</td>\\n<td>UMTS</td>\\n<td>數位 Digital</td>\\n</tr>\\n<tr>\\n<td>第四代 4G</td>\\n<td>LTE</td>\\n<td>數位 Digital</td>\\n</tr>\\n<tr>\\n<td>第五代 5G</td>\\n<td>UWB</td>\\n<td>數位 Digital</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{m as comp,g as data};