<template><div><h1 id="_2024-05-24" tabindex="-1"><a class="header-anchor" href="#_2024-05-24"><span>2024.05.24</span></a></h1>
<h2 id="_5-6-網際網路中之網路層" tabindex="-1"><a class="header-anchor" href="#_5-6-網際網路中之網路層"><span>5.6 網際網路中之網路層</span></a></h2>
<h3 id="_5-6-1-ipv4-協定" tabindex="-1"><a class="header-anchor" href="#_5-6-1-ipv4-協定"><span>5.6.1 IPv4 協定</span></a></h3>
<blockquote>
<figure><img src="/studing/information-and-network-security/2024.05.24/0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</blockquote>
<table>
<thead>
<tr>
<th>中文名稱</th>
<th>英文名稱</th>
<th>說明</th>
<th>備註</th>
</tr>
</thead>
<tbody>
<tr>
<td>版本</td>
<td>version</td>
<td>記錄資料段屬於哪一版本的協定</td>
<td></td>
</tr>
<tr>
<td>差異服務</td>
<td>differentiated service</td>
<td>幾年來少數幾個稍微改變其意義的欄位之一</td>
<td></td>
</tr>
<tr>
<td>總長度</td>
<td>total length</td>
<td>包含資料段內所有的東西―包括表頭以及資料</td>
<td></td>
</tr>
<tr>
<td>識別</td>
<td>identification, id</td>
<td>目的地主機用來辨識新進入的片段屬於哪一個資料段</td>
<td></td>
</tr>
<tr>
<td>片段位移</td>
<td>fragment offset</td>
<td>此片段是在資料段中哪個位置</td>
<td></td>
</tr>
<tr>
<td>存活時間</td>
<td>Time to live, TtL</td>
<td>用來限制封包存活期的計數器</td>
<td>大多為 <code v-pre>30</code></td>
</tr>
<tr>
<td>來源位址</td>
<td>source address</td>
<td>與目的地位址（Destination address）欄位表示來源與目的網路介面的 IP 位址</td>
<td></td>
</tr>
<tr>
<td>選項</td>
<td>options</td>
<td>欄位的設計是為了允許後續版本的協定可以增加原設計所沒有的資訊，以便於實驗出新的想法，同時避免分配不常用的資訊至表頭位元內</td>
<td></td>
</tr>
<tr>
<td>安全</td>
<td>security</td>
<td>欄位說明資訊的安全性狀態</td>
<td></td>
</tr>
<tr>
<td>嚴格來源路由</td>
<td>strict source routing</td>
<td>選項則是從來源端至目的地之間給予完整路徑的　 IP 位址</td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>32 bit = 8 bit * 4</p>
<ul>
<li>Binary: <code v-pre>00000000.00000000.00000000.00000000</code> ~ <code v-pre>11111111.11111111.11111111.11111111</code></li>
<li>Decimal: <code v-pre>0.0.0.0</code> ~ <code v-pre>255.255.255.255</code></li>
</ul>
<details class="hint-container details"><summary>IPv6</summary>
<blockquote>
<p>128 bit = 16 bit * 8
:::</p>
</blockquote>
</details>
</blockquote>
<h3 id="_5-6-2-ip-位址" tabindex="-1"><a class="header-anchor" href="#_5-6-2-ip-位址"><span>5.6.2 IP 位址</span></a></h3>
<blockquote>
<p><img src="/studing/information-and-network-security/2024.05.24/1.png" alt="" loading="lazy"> &gt; <code v-pre>1.2.3.4/25</code></p>
<ul>
<li><code v-pre>1.2.3.4</code>: IP</li>
<li><code v-pre>/25</code>: 前置長度</li>
</ul>
</blockquote>
<p>例如 IP 為 <code v-pre>1.2.3.4/25</code></p>
<ul>
<li><strong>可用作 IP 位置</strong>
$2^{32 - 25}=2^{7}=128$</li>
<li><strong>子遮罩</strong>
25 個 1 Bit
= <code v-pre>11111111 | 11111111 | 11111111 | 10000000</code>
= <code v-pre>255.255.255.128</code></li>
</ul>
</div></template>


