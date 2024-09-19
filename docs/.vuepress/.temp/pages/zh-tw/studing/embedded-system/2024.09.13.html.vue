<template><div><h1 id="_2024-09-13" tabindex="-1"><a class="header-anchor" href="#_2024-09-13"><span>2024.09.13</span></a></h1>
<h2 id="arduino-ide" tabindex="-1"><a class="header-anchor" href="#arduino-ide"><span>Arduino IDE</span></a></h2>
<ul>
<li><a href="https://downloads.arduino.cc/arduino-1.8.15-windows.exe" target="_blank" rel="noopener noreferrer">arduino-1.8.15-windows.exe</a></li>
</ul>
<h2 id="arduino-板" tabindex="-1"><a class="header-anchor" href="#arduino-板"><span>Arduino 板</span></a></h2>
<figure><img src="/studing/embedded-system/2024.09.13/0.png" alt="=接地" tabindex="0" loading="lazy"><figcaption><code v-pre>GND</code>=接地</figcaption></figure>
<h2 id="程式碼解釋" tabindex="-1"><a class="header-anchor" href="#程式碼解釋"><span>程式碼解釋</span></a></h2>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// 宣告區</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// 啟動函數只會在按下 reset 按鈕或通電時觸發一次</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">  // 初始化數位針腳 LED_BUILTIN，使其成為輸出</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  pinMode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(LED_BUILTIN, OUTPUT);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// 迴圈函數一直重複執行</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> loop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  digitalWrite</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(LED_BUILTIN, HIGH);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> // 開啟內建 LED（高電位）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> // 延遲 1000 毫秒（ms） = 1 秒</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  digtalWrite</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(LED_BUILTIN, LOW);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> // 關閉內建 LED（低電位）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"> // 延遲 1000 毫秒（ms） = 1 秒</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="麵包板" tabindex="-1"><a class="header-anchor" href="#麵包板"><span>麵包板</span></a></h2>
<figure><img src="https://blog.jmaker.com.tw/content/images/2020/01/breadboard-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="電阻" tabindex="-1"><a class="header-anchor" href="#電阻"><span>電阻</span></a></h2>
<figure><img src="/studing/embedded-system/2024.09.13/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="串聯與並聯" tabindex="-1"><a class="header-anchor" href="#串聯與並聯"><span>串聯與並聯</span></a></h2>
<table>
<thead>
<tr>
<th></th>
<th style="text-align:center">串聯</th>
<th style="text-align:center">並聯</th>
</tr>
</thead>
<tbody>
<tr>
<td>圖例</td>
<td style="text-align:center"><img src="/studing/embedded-system/2024.09.13/2.png" alt="" loading="lazy"></td>
<td style="text-align:center"><img src="/studing/embedded-system/2024.09.13/3.png" alt="" loading="lazy"></td>
</tr>
<tr>
<td>特性</td>
<td style="text-align:center">電流相同</td>
<td style="text-align:center">電壓相同</td>
</tr>
</tbody>
</table>
<h2 id="今日課題" tabindex="-1"><a class="header-anchor" href="#今日課題"><span>今日課題</span></a></h2>
<p><a href="https://www.tinkercad.com/things/1DQXOjJ2btS-20240913?sharecode=-pcshGCtSg5jTCoYnzp6EDkKDLFvHDcgiXlvsAJwroA" target="_blank" rel="noopener noreferrer">1DQXOjJ2btS-20240913@TinkerCard</a></p>
</div></template>


