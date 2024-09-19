<template><div><h1 id="_2024-05-03" tabindex="-1"><a class="header-anchor" href="#_2024-05-03"><span>2024.05.03</span></a></h1>
<h2 id="_4-3-乙太網" tabindex="-1"><a class="header-anchor" href="#_4-3-乙太網"><span>4.3 乙太網</span></a></h2>
<h3 id="_4-3-1-古典乙太網實體層" tabindex="-1"><a class="header-anchor" href="#_4-3-1-古典乙太網實體層"><span>4.3.1 古典乙太網實體層</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">Name</th>
<th style="text-align:center">Shortcut</th>
<th>Speed</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Ethernet</td>
<td style="text-align:center">E</td>
<td>10 Mbps</td>
</tr>
<tr>
<td style="text-align:center">Fast Ethernet</td>
<td style="text-align:center">FE</td>
<td>100 Mbps</td>
</tr>
<tr>
<td style="text-align:center">Gigabit Ethernet</td>
<td style="text-align:center">GE</td>
<td>1000 Mbps<br>(1 Gbps)</td>
</tr>
<tr>
<td style="text-align:center">10 Gigabit Ethernet</td>
<td style="text-align:center">10GE</td>
<td>10 Gbps</td>
</tr>
</tbody>
</table>
<hr>
<figure><img src="https://hackmd.io/_uploads/S1Fh8ZGfR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>46 ≤ 資料 + 填塞 ≤ 1500<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> getPad</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1500</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">length</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 46</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1500</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 46</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_4-3-4-交換式乙太網" tabindex="-1"><a class="header-anchor" href="#_4-3-4-交換式乙太網"><span>4.3.4 交換式乙太網</span></a></h3>
<table>
  <td><img src="https://hackmd.io/_uploads/H1upcZfGA.jpg"></td>
  <td>
    hub會複製訊號
  </td>
</table>
<h3 id="_4-3-5-高速乙太網" tabindex="-1"><a class="header-anchor" href="#_4-3-5-高速乙太網"><span>4.3.5 高速乙太網</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Lines</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cat 3</td>
<td>2</td>
<td>Telephone</td>
</tr>
<tr>
<td>Cat 5</td>
<td>8</td>
<td>Internet</td>
</tr>
<tr>
<td>Cat 5e (1000 Mbps)</td>
<td>8</td>
<td>Internet</td>
</tr>
<tr>
<td>Cat 6</td>
<td>8</td>
<td></td>
</tr>
</tbody>
</table>
<h1 id="_4-3-6-gigabit-乙太網" tabindex="-1"><a class="header-anchor" href="#_4-3-6-gigabit-乙太網"><span>4.3.6 Gigabit 乙太網</span></a></h1>
</div></template>


