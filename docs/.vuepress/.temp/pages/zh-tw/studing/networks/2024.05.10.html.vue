<template><div><h1 id="_2024-05-10" tabindex="-1"><a class="header-anchor" href="#_2024-05-10"><span>2024.05.10</span></a></h1>
<h2 id="_4-4-4-802-11-訊框結構" tabindex="-1"><a class="header-anchor" href="#_4-4-4-802-11-訊框結構"><span>4.4.4 802.11 訊框結構</span></a></h2>
<blockquote>
<p><code v-pre>46 ≤ (資料 + 填塞) ≤ 1500</code></p>
<p>舉例:</p>
<ul>
<li>資料＝ 20，填塞＝ 26</li>
<li>資料＝ 100，填塞＝ 0</li>
</ul>
</blockquote>
<h2 id="_4-6-1-藍牙架構-blue-tooth-簡稱-bt" tabindex="-1"><a class="header-anchor" href="#_4-6-1-藍牙架構-blue-tooth-簡稱-bt"><span>4.6.1 藍牙架構（Blue Tooth 簡稱 BT）</span></a></h2>
<figure><img src="/studing/networks/2024.05.10/0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><mark>Slave 無法直接與 Slave 連接，必須經由 Master</mark></p>
<ul>
<li>Active Slave (活動狀態的隨從節點): 最多可<strong>連接</strong> 7 個</li>
<li>Parked Slave (停泊狀態的隨從節點): 最多可<strong>記錄</strong> 256 個</li>
</ul>
<h2 id="_4-8-2-學習橋接器" tabindex="-1"><a class="header-anchor" href="#_4-8-2-學習橋接器"><span>4.8.2 學習橋接器</span></a></h2>
<p>傳入訊框的路由程序根據其抵達（來源連接埠）的連接埠及目的位址所在（目的位址）而決定。其程序如下：</p>
<ol>
<li>如果目的位址的連接埠與來源連接埠相同，便<mark>丟棄</mark>該訊框。</li>
<li>如果目的位址所在連接埠與來源連接埠不同，便將訊框轉送到目的連接埠。</li>
<li>如果目的連接埠未知，利用氾濫法並傳送訊框至所有連接埠（除了來源連接埠之外）。</li>
</ol>
<h2 id="_4-8-4-中繼器、集線器、橋接器、交換器、路由器及閘道器" tabindex="-1"><a class="header-anchor" href="#_4-8-4-中繼器、集線器、橋接器、交換器、路由器及閘道器"><span>4.8.4 中繼器、集線器、橋接器、交換器、路由器及閘道器</span></a></h2>
<figure><img src="/studing/networks/2024.05.10/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>閘道器: Gateway</li>
</ul>
<blockquote>
<p>Router → Network</p>
</blockquote>
<blockquote>
<p>Bridge → Data link
Switch</p>
</blockquote>
<blockquote>
<p>Hub →
Repeater</p>
</blockquote>
<h2 id="_4-8-5-虛擬區域網路-vlan-virtual-lan" tabindex="-1"><a class="header-anchor" href="#_4-8-5-虛擬區域網路-vlan-virtual-lan"><span>4.8.5 虛擬區域網路（VLAN，Virtual LAN）</span></a></h2>
<figure><img src="/studing/networks/2024.05.10/2.png" alt="圖片" tabindex="0" loading="lazy"><figcaption>圖片</figcaption></figure>
<p>虛擬區域網路 = VLAN = Virtual LAN</p>
<h2 id="_5-1-2-提供給傳輸層之服務" tabindex="-1"><a class="header-anchor" href="#_5-1-2-提供給傳輸層之服務"><span>5.1.2 提供給傳輸層之服務</span></a></h2>
<p>網路層協定服務的設計目標如下：</p>
<ol>
<li>服務應與路由器之技術無關。</li>
<li>傳輸層毋須知道存在之路由器的數量、型態及分佈情形。</li>
<li>即使跨越 LAN 及 WAN，<mark>網路位址必須以一致的編號</mark>方式提供給傳輸層使用。</li>
</ol>
</div></template>


