<template><div><h2 id="講義" tabindex="-1"><a class="header-anchor" href="#講義"><span>講義</span></a></h2>
<ul>
  <li>
    單元 1 到 9：<a href="/studing/embedded-system/resource/1131_嵌入式系統概論%20Ch1-9.pdf" target="_blank">1131_嵌入式系統概論 Ch1-9</a>
  </li>
  <span v-for="i in 9">
    <li>
      單元 {{i}}：<a :href="'/studing/embedded-system/resource/1131_嵌入式系統概論%20Ch' + i + '.pdf'" target="_blank">1131_嵌入式系統概論 Ch{{i}}</a>
    </li>
  </span>
</ul>
<h2 id="上課規定" tabindex="-1"><a class="header-anchor" href="#上課規定"><span>上課規定</span></a></h2>
<ul>
<li><a href="./intro">上課規定（站內）</a></li>
<li><a href="/studing/embedded-system/resource/%E4%B8%8A%E8%AA%B2%E8%A6%8F%E5%AE%9A.docx">上課規定（檔案）</a></li>
</ul>
</div></template>


