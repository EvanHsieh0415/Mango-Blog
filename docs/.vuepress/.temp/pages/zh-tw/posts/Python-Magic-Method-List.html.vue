<template><div><h1 id="python-魔術方法列表" tabindex="-1"><a class="header-anchor" href="#python-魔術方法列表"><span>Python 魔術方法列表</span></a></h1>
<h2 id="building-class-構造類別" tabindex="-1"><a class="header-anchor" href="#building-class-構造類別"><span>Building Class ｜構造類別</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__new__(cls, [...)</code></td>
<td><code v-pre>cls([...)</code></td>
<td>構造</td>
</tr>
<tr>
<td><code v-pre>__init__(self, [...)</code></td>
<td><code v-pre>self</code></td>
<td>初始化</td>
</tr>
<tr>
<td><code v-pre>__del__(self)</code></td>
<td><code v-pre>del self</code></td>
<td>刪除</td>
</tr>
<tr>
<td><code v-pre>__call__(self, [...)</code></td>
<td><code v-pre>self([...)</code></td>
<td>調用自身</td>
</tr>
</tbody>
</table>
<h2 id="attribute-屬性" tabindex="-1"><a class="header-anchor" href="#attribute-屬性"><span>Attribute ｜屬性</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__getattr__(self, key)</code></td>
<td><code v-pre>self.key</code></td>
<td>獲取屬性</td>
</tr>
<tr>
<td><code v-pre>__setattr__(self, key, value)</code></td>
<td><code v-pre>self.key = value</code></td>
<td>設定屬性</td>
</tr>
<tr>
<td><code v-pre>__delattr__(self, key)</code></td>
<td><code v-pre>del self.key</code></td>
<td>刪除屬性</td>
</tr>
</tbody>
</table>
<h2 id="boolean-operation-布林值" tabindex="-1"><a class="header-anchor" href="#boolean-operation-布林值"><span>Boolean Operation ｜布林值</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__cmp__(self, other)</code></td>
<td><code v-pre> </code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>__eq__(self, other)</code></td>
<td><code v-pre>self == other</code></td>
<td>等於</td>
</tr>
<tr>
<td><code v-pre>__ne__(self, other)</code></td>
<td><code v-pre>self != other</code></td>
<td>不等於</td>
</tr>
<tr>
<td><code v-pre>__lt__(self, other)</code></td>
<td><code v-pre>self &lt; other</code></td>
<td>小於</td>
</tr>
<tr>
<td><code v-pre>__le__(self, other)</code></td>
<td><code v-pre>self &lt;= other</code></td>
<td>小於等於（不大於）</td>
</tr>
<tr>
<td><code v-pre>__gt__(self, other)</code></td>
<td><code v-pre>self &gt; other</code></td>
<td>大於</td>
</tr>
<tr>
<td><code v-pre>__ge__(self, other)</code></td>
<td><code v-pre>self &gt;= other</code></td>
<td>大於等於（不小於）</td>
</tr>
</tbody>
</table>
<h2 id="math-operation-數學運算符" tabindex="-1"><a class="header-anchor" href="#math-operation-數學運算符"><span>Math Operation ｜數學運算符</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__add__(self, other)</code></td>
<td><code v-pre>self + other</code></td>
<td>加</td>
</tr>
<tr>
<td><code v-pre>__sub__(self, other)</code></td>
<td><code v-pre>self - other</code></td>
<td>減</td>
</tr>
<tr>
<td><code v-pre>__mul__(self, other)</code></td>
<td><code v-pre>self * other</code></td>
<td>乘</td>
</tr>
<tr>
<td><code v-pre>__truediv__(self, other)</code></td>
<td><code v-pre>self / other</code></td>
<td>除</td>
</tr>
<tr>
<td><code v-pre>__floordiv__(self, other)</code></td>
<td><code v-pre>self // other</code></td>
<td>整除</td>
</tr>
<tr>
<td><code v-pre>__mod__(self, other)</code></td>
<td><code v-pre>self % other</code></td>
<td>求餘</td>
</tr>
<tr>
<td><code v-pre>__divmod__(self, other)</code></td>
<td><code v-pre>divmod(self, other)</code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>__pow__(self, other)</code></td>
<td><code v-pre>power(self, other) &amp; self ** other</code></td>
<td>次方</td>
</tr>
<tr>
<td><code v-pre>__lshift__(self, other)</code></td>
<td><code v-pre>self &lt;&lt; other</code></td>
<td>左移（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__rshift__(self, other)</code></td>
<td><code v-pre>self &gt;&gt; other</code></td>
<td>右移（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__and__(self, other)</code></td>
<td><code v-pre>self &amp; other</code></td>
<td>與（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__or__(self, other)</code></td>
<td><code v-pre>self | other</code></td>
<td>或（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__xor__(self, other)</code></td>
<td><code v-pre>self ^ other</code></td>
<td>異或（位元運算）</td>
</tr>
</tbody>
</table>
<h2 id="right-math-operation-被動數學運算符" tabindex="-1"><a class="header-anchor" href="#right-math-operation-被動數學運算符"><span>Right Math Operation ｜被動數學運算符</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__radd__(self, other)</code></td>
<td><code v-pre>other + self</code></td>
<td>被加</td>
</tr>
<tr>
<td><code v-pre>__rsub__(self, other)</code></td>
<td><code v-pre>other - self</code></td>
<td>被減</td>
</tr>
<tr>
<td><code v-pre>__rmul__(self, other)</code></td>
<td><code v-pre>other * self</code></td>
<td>被乘</td>
</tr>
<tr>
<td><code v-pre>__rtruediv__(self, other)</code></td>
<td><code v-pre>other / self</code></td>
<td>被除</td>
</tr>
<tr>
<td><code v-pre>__rfloordiv__(self, other)</code></td>
<td><code v-pre>other // self</code></td>
<td>被整除</td>
</tr>
<tr>
<td><code v-pre>__rmod__(self, other)</code></td>
<td><code v-pre>other % self</code></td>
<td>被求餘</td>
</tr>
<tr>
<td><code v-pre>__rpow__(self, other)</code></td>
<td><code v-pre>other ** self</code></td>
<td>被次方</td>
</tr>
<tr>
<td><code v-pre>__rlshift__(self, other)</code></td>
<td><code v-pre>other &lt;&lt; self</code></td>
<td>被左移</td>
</tr>
<tr>
<td><code v-pre>__rrshift__(self, other)</code></td>
<td><code v-pre>other &gt;&gt; self</code></td>
<td>被右移</td>
</tr>
<tr>
<td><code v-pre>__rand__(self, other)</code></td>
<td><code v-pre>other &amp; self</code></td>
<td>被與</td>
</tr>
<tr>
<td><code v-pre>__ror__(self, other)</code></td>
<td><code v-pre>other | self</code></td>
<td>被或</td>
</tr>
<tr>
<td><code v-pre>__rxor__(self, other)</code></td>
<td><code v-pre>other ^ self</code></td>
<td>被異或</td>
</tr>
</tbody>
</table>
<h2 id="assign-value-operation-賦值數學運算符" tabindex="-1"><a class="header-anchor" href="#assign-value-operation-賦值數學運算符"><span>Assign Value Operation ｜賦值數學運算符</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__iadd__(self, other)</code></td>
<td><code v-pre>self += other</code></td>
<td>自加</td>
</tr>
<tr>
<td><code v-pre>__isub__(self, other)</code></td>
<td><code v-pre>self -= other</code></td>
<td>自減</td>
</tr>
<tr>
<td><code v-pre>__imul__(self, other)</code></td>
<td><code v-pre>self *= other</code></td>
<td>自乘</td>
</tr>
<tr>
<td><code v-pre>__itruediv__(self, other)</code></td>
<td><code v-pre>self /= other</code></td>
<td>自除</td>
</tr>
<tr>
<td><code v-pre>__ifloordiv__(self, other)</code></td>
<td><code v-pre>self //= other</code></td>
<td>自整除</td>
</tr>
<tr>
<td><code v-pre>__imod__(self, other)</code></td>
<td><code v-pre>self %= other</code></td>
<td>自求餘</td>
</tr>
<tr>
<td><code v-pre>__ipow__(self, other)</code></td>
<td><code v-pre>self **= other</code></td>
<td>自次方</td>
</tr>
<tr>
<td><code v-pre>__ilshift__(self, other)</code></td>
<td><code v-pre>self &lt;&lt;= other</code></td>
<td>自左移（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__irshift__(self, other)</code></td>
<td><code v-pre>self &gt;&gt;= other</code></td>
<td>自右移（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__iand__(self, other)</code></td>
<td><code v-pre>self &amp;= other</code></td>
<td>自與（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__ior__(self, other)</code></td>
<td><code v-pre>self |= other</code></td>
<td>自或（位元運算）</td>
</tr>
<tr>
<td><code v-pre>__ixor__(self, other)</code></td>
<td><code v-pre>self ^= other</code></td>
<td>自異或（位元運算）</td>
</tr>
</tbody>
</table>
<h2 id="unary-operation-一元運算符" tabindex="-1"><a class="header-anchor" href="#unary-operation-一元運算符"><span>Unary Operation ｜一元運算符</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__pos__(self)</code></td>
<td><code v-pre>+self</code></td>
<td>正</td>
</tr>
<tr>
<td><code v-pre>__neg__(self)</code></td>
<td><code v-pre>-self</code></td>
<td>負</td>
</tr>
<tr>
<td><code v-pre>__abs__(self)</code></td>
<td><code v-pre>abs(self)</code></td>
<td>絕對值</td>
</tr>
<tr>
<td><code v-pre>__invert__(self)</code></td>
<td><code v-pre>~self</code></td>
<td>逆（位元運算）</td>
</tr>
</tbody>
</table>
<h2 id="type-conversion-類型轉換" tabindex="-1"><a class="header-anchor" href="#type-conversion-類型轉換"><span>Type Conversion ｜類型轉換</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__complex__(self)</code></td>
<td><code v-pre>complex(self)</code></td>
<td>複數</td>
</tr>
<tr>
<td><code v-pre>__int__(self)</code></td>
<td><code v-pre>int(self)</code></td>
<td>整數</td>
</tr>
<tr>
<td><code v-pre>__float__(self)</code></td>
<td><code v-pre>float(self)</code></td>
<td>浮點數</td>
</tr>
<tr>
<td><code v-pre>__round__(self, n])</code></td>
<td><code v-pre>round(self, n])</code></td>
<td>四捨五入</td>
</tr>
<tr>
<td><code v-pre>__index__(self)</code></td>
<td>1. <br>2. <br>3.</td>
<td>索引</td>
</tr>
<tr>
<td><code v-pre>__repr__(self)</code></td>
<td><code v-pre>repr(self)</code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>__bool__(self)</code></td>
<td><code v-pre>bool(self)</code></td>
<td>布林值</td>
</tr>
<tr>
<td><code v-pre>__str__(self)</code></td>
<td><code v-pre>str(self)</code></td>
<td>字串</td>
</tr>
<tr>
<td><code v-pre>__format__(self)</code></td>
<td><code v-pre>f&quot;{}&quot;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="context-manager-上下文管理器" tabindex="-1"><a class="header-anchor" href="#context-manager-上下文管理器"><span>Context Manager ｜上下文管理器</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__enter__(self)</code></td>
<td>1. <br>2.</td>
<td>進入上下文管理器</td>
</tr>
<tr>
<td><code v-pre>__exit__(self, exctype, excvalue, trackback)</code></td>
<td>1. <br>2.</td>
<td>退出上下文管理器</td>
</tr>
</tbody>
</table>
<h2 id="container-容器" tabindex="-1"><a class="header-anchor" href="#container-容器"><span>Container ｜容器</span></a></h2>
<table>
<thead>
<tr>
<th>Method Name</th>
<th>Symbol</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>__len__(self)</code></td>
<td><code v-pre>len(self)</code></td>
<td>容器長度</td>
</tr>
<tr>
<td><code v-pre>__getitem__(self, key)</code></td>
<td><code v-pre>self[key]</code></td>
<td>調用容器值</td>
</tr>
<tr>
<td><code v-pre>__setitem__(self, key, value)</code></td>
<td><code v-pre>self[key] = value</code></td>
<td>設定容器值</td>
</tr>
<tr>
<td><code v-pre>__delitem__(self, key)</code></td>
<td><code v-pre>del self[key]</code></td>
<td>刪除容器值</td>
</tr>
<tr>
<td><code v-pre>__iter__(self)</code></td>
<td><code v-pre>iter(self)</code></td>
<td>迭代容器</td>
</tr>
<tr>
<td><code v-pre>__reversed__(self)</code></td>
<td><code v-pre>reversed(self)</code></td>
<td>反轉容器</td>
</tr>
<tr>
<td><code v-pre>__contains__(self, item)</code></td>
<td><code v-pre>item in self &amp; item not in self</code></td>
<td>在 / 不在容器裡</td>
</tr>
</tbody>
</table>
</div></template>


