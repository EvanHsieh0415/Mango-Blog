<template><div><h1 id="_2024-06-07" tabindex="-1"><a class="header-anchor" href="#_2024-06-07"><span>2024.06.07</span></a></h1>
<h2 id="_6-5-網際網路傳輸協定-tcp" tabindex="-1"><a class="header-anchor" href="#_6-5-網際網路傳輸協定-tcp"><span>6.5 網際網路傳輸協定：TCP</span></a></h2>
<h3 id="_6-5-7-tcp-連接管理模式" tabindex="-1"><a class="header-anchor" href="#_6-5-7-tcp-連接管理模式"><span>6.5.7 TCP 連接管理模式</span></a></h3>
<table>
<thead>
<tr>
<th>Status</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>CLOSED</td>
<td>Not any connection</td>
</tr>
<tr>
<td>LISTEN</td>
<td>Server waiting for entry</td>
</tr>
<tr>
<td>SYN RCVD</td>
<td>Connect requests; wait for ACK</td>
</tr>
<tr>
<td>SYN SENT</td>
<td>Application start a connection</td>
</tr>
<tr>
<td>ESTABLISHED</td>
<td>Normal data connecting</td>
</tr>
<tr>
<td>FIN WAIT 1</td>
<td>Application said finished</td>
</tr>
<tr>
<td>FIN WAIT 2</td>
<td>Other side approve free</td>
</tr>
<tr>
<td>TIME WAIT</td>
<td>Wait for all package dead</td>
</tr>
<tr>
<td>CLOSING</td>
<td>Both side try close together</td>
</tr>
<tr>
<td>CLOSE WAIT</td>
<td>Another side starting free</td>
</tr>
<tr>
<td>LAST ACK</td>
<td>Wait for all package dead</td>
</tr>
</tbody>
</table>
<h3 id="_6-5-9-tcp-計時器管理" tabindex="-1"><a class="header-anchor" href="#_6-5-9-tcp-計時器管理"><span>6.5.9 TCP 計時器管理</span></a></h3>
<p>$\texttt{SRTT} = \alpha \texttt{RTT} + (1 - \alpha)\texttt{R}$
$\texttt{RTTVAR} = \beta \texttt{RTTVAR} + (1 - \beta) \left|\texttt{SRTT} - \texttt{R}\right|$</p>
<h3 id="_6-5-10-tcp-壅塞控制" tabindex="-1"><a class="header-anchor" href="#_6-5-10-tcp-壅塞控制"><span>6.5.10 TCP 壅塞控制</span></a></h3>
<figure><img src="/studing/information-and-network-security/2024.06.07/0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6-6-效能議題" tabindex="-1"><a class="header-anchor" href="#_6-6-效能議題"><span>6.6 效能議題</span></a></h2>
<p>網路效能的六個面向：</p>
<ol>
<li>效能問題。</li>
<li>量測網路效能。</li>
<li>快速網路的主機設計。</li>
<li>快速區段處理。</li>
<li>表頭壓縮。</li>
<li>針對大型網路的協定。</li>
</ol>
<h3 id="_6-6-2-網路效能量測" tabindex="-1"><a class="header-anchor" href="#_6-6-2-網路效能量測"><span>6.6.2 網路效能量測</span></a></h3>
<ul>
<li>確定<mark>採樣空間</mark>夠大</li>
<li>確定採樣具<mark>代表性</mark></li>
<li><mark>快取</mark>會破壞量測結果</li>
<li>確定測試期間沒有未預期的因素</li>
<li>使用大單位計時器時要特別小心</li>
<li>當以外插推測結果時要小心</li>
</ul>
<h2 id="_6-7-耐延遲網路" tabindex="-1"><a class="header-anchor" href="#_6-7-耐延遲網路"><span>6.7 耐延遲網路</span></a></h2>
<h3 id="_6-7-1-dtn-架構" tabindex="-1"><a class="header-anchor" href="#_6-7-1-dtn-架構"><span>6.7.1 DTN 架構</span></a></h3>
<figure><img src="/studing/information-and-network-security/2024.06.07/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_6-8-總結" tabindex="-1"><a class="header-anchor" href="#_6-8-總結"><span>6.8 總結</span></a></h2>
<ul>
<li>壅塞控制應為互相競爭的資料流公平地配置所有可用頻寬，且應追蹤網路用量的變化。AIMD 控制法則可收斂為一個<mark>公平</mark>且有<mark>效率</mark>的配置</li>
<li>網際網路具有兩個主要的傳輸協定：UDP 和 TCP。UDP 是一種無連接協定，基本上是 IP 封包加上以單一 IP 位址為多個程序進行多工及解多工的額外功能。</li>
<li>UDP 可被用於<mark>主從式互動程序</mark>，例如利用 RPC。它也可用來建構如 RTP 的即時協定。</li>
<li>最主要的網際網路傳輸協定是 TCP。它提供一種可靠的、<mark>雙向的且經過壅塞控制的位元組資料流</mark>，並且所有區段都擁有 20 位元組的表頭。許多研究投注於提升 TCP 效能，例如透過 Nagle、Clark、Jacobson、Karn 以及其他學者提出的演算法。</li>
<li>網路效能通常受協定和區段處理額外負擔所影響，且此狀況隨著網路速率提升而愈來愈糟。協定應被設計來將區段數量及大頻寬－延遲路徑的成本降到最低。對於 gigabit 網路，需要的是簡單的協定和有效率的處理。</li>
<li>耐延遲網路提供一種跨越斷續連接性或經過長延遲連結等特性網路的傳遞服務。中間節點儲存、承載及轉送資訊包裹，使其最終能被送達，即使從傳送端到接收端並非隨時都有可用路徑。</li>
</ul>
</div></template>


