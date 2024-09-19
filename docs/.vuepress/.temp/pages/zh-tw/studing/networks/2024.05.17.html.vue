<template><div><h1 id="_2024-05-17" tabindex="-1"><a class="header-anchor" href="#_2024-05-17"><span>2024.05.17</span></a></h1>
<h2 id="_5-2-4-距離向量路由" tabindex="-1"><a class="header-anchor" href="#_5-2-4-距離向量路由"><span>5.2.4 距離向量路由</span></a></h2>
<table>
  <tr>
    <td><img src="/studing/networks/2024.05.17/0.png" /></td>
    <td>
      <table>
        <tr>
          <th>到</th>
          <th>B</th>
          <th>C</th>
          <th rowspan="6"></th>
          <th>最短延遲</th>
          <th>最短延遲所經過的路線</th>
        </tr>
        <tr>
          <th>A</th>
          <td>7</td>
          <td>8</td>
          <td>FC+CA=15</td>
          <td>C</td>
        </tr>
        <tr>
          <th>B</th>
          <td>0</td>
          <td>9</td>
          <td>FB+BB=10</td>
          <td>B</td>
        </tr>
        <tr>
          <th>C</th>
          <td>11</td>
          <td>0</td>
          <td>FC+CC=7</td>
          <td>C</td>
        </tr>
        <tr>
          <th>D</th>
          <td>6</td>
          <td>13</td>
          <td>FB+BD=16</td>
          <td>B</td>
        </tr>
        <tr>
          <th>E</th>
          <td>15</td>
          <td>8</td>
          <td>FC+CE=15</td>
          <td>C</td>
        </tr>
        <tr>
          <th>F</th>
          <td>10</td>
          <td>7</td>
          <td colspan="3"></td>
        </tr>
      </table>
    </td>
  </tr>
</table>
<h2 id="_5-2-5-鏈結狀態路由" tabindex="-1"><a class="header-anchor" href="#_5-2-5-鏈結狀態路由"><span>5.2.5 鏈結狀態路由</span></a></h2>
<p>每個路由器必須執行下列任務使其能夠運作：</p>
<ol>
<li>發現它的鄰居，並得知其網路位址。</li>
<li>測量至每個鄰居的延遲時間或成本。</li>
<li>建立一個封包，將路由器獲知的所有資訊置於其中。</li>
<li>從其他所有路由器傳送此封包及接收封包。</li>
<li>計算至其他所有路由器之最短路徑。</li>
</ol>
</div></template>


