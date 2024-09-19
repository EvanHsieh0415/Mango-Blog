<template><div><div class="hint-container info">
<p class="hint-container-title">原文</p>
<p><a href="https://romgrk.com/posts/optimizing-javascript" target="_blank" rel="noopener noreferrer">Optimizing Javascript for fun and for profit</a></p>
</div>
<p>我常常覺得，JavaScript 程式碼通常運行得比實際可以運行的速度慢很多，這通常是因為沒有經過適當的優化。以下是我找到的一些常見的優化技巧總結。需要注意的是，性能優化的代價往往是程式碼的可讀性，因此何時應該優先考慮性能，何時應該優先考慮可讀性，這是一個留給讀者自行決定的問題。我還要指出，討論優化時，必須討論到效能測試。如果花幾個小時對某個函數進行微優化，讓它的執行速度快 100 倍，但該函數只佔總運行時間的一小部分，那麼這樣的優化其實是毫無意義的。因此，在進行優化之前，第一步也是最重要的一步，就是進行效能測試。在接下來的內容中，我會提到這個話題。同時也要注意，微基準測試（micro-benchmark）往往有缺陷，這也可能包括本文所介紹的測試方法。雖然我已經盡量避免掉入這些陷阱，但在應用本文所介紹的任何方法之前，請務必自行進行效能測試。</p>
<p>我在可能的情況下，為每個案例都提供了可執行的範例。這些範例顯示的是我在自己機器上（Brave 瀏覽器，運行在 Arch Linux 上）得到的結果，但你也可以自行運行它們。儘管我不喜歡這麼說，但 Firefox 在優化方面有點落後了，<a href="https://foundation.mozilla.org/en/?form=donate-header" target="_blank" rel="noopener noreferrer">目前</a>在網路流量中所占的比重也很小，所以我不建議將你在 Firefox 上得到的結果當作有效的指標。</p>
<h2 id="_0-避免不必要的工作" tabindex="-1"><a class="header-anchor" href="#_0-避免不必要的工作"><span>0. 避免不必要的工作</span></a></h2>
<p>這聽起來很顯而易見，但它必須被放在這裡，因為這是優化的第一步：如果你正在嘗試進行優化，首先應該考慮的是避免不必要的工作。這包括記憶化（memoization）、惰性運算（laziness）和增量計算（incremental computation）等概念。具體應用方式會因情境而異。例如在 React 中，這意味著應用 <code v-pre>memo()</code>、<code v-pre>useMemo()</code> 和其他適用的基礎函數。</p>
<h2 id="_1-避免字串比較" tabindex="-1"><a class="header-anchor" href="#_1-避免字串比較"><span>1. 避免字串比較</span></a></h2>
<p>JavaScript 讓字串比較的實際成本容易被隱藏。如果你在 C 語言中需要比較字串，你會使用 <code v-pre>stdcmp(a, b)</code> 函數。而在 JavaScript 中，你會使用 <code v-pre>===</code> 進行比較，因此你不會直接看到字串比較的細節，但其實它仍然存在。字串比較通常（但並非總是）會需要將字串中的每個字符與另一個字串中的字符進行比較；字串比較的時間複雜度為 O(n)。一個常見的 JavaScript 模式是使用字串作為枚舉（enum），但隨著 TypeScript 的普及，這應該很容易避免，因為枚舉在 TypeScript 中預設是整數。</p>
<table><td>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// No</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">enum</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Position</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  TOP</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'TOP'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  BOTTOM</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'BOTTOM'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td><td>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// Yeppers</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">enum</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Position</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  TOP</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,    </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// = 0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  BOTTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">// = 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></td></table>
</div></template>


