---
title: 神秘代碼解碼
---

<table>
  <thead>
    <tr>
      <th>代碼</th>
      <th>解碼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input id="code" name="code" /><br></td>
      <td>
        <button @click="NHentai" >NHentai</button>
        <button @click="Pixiv" >PID</button>
      </td>
    </tr>
  </tbody>
</table>

<div v-if="url != 'unset'">
  <h3>解碼結果</h3>
  <a :href="url"><code>{{url}}</code></a>
</div>
<p v-else>請輸入代碼</p>


<script lang="ts">
export default {
  data() {
    return {
      url: 'unset'
    }
  },
  methods: {
    factory(prefix: str) {
      const code = document.getElementById('code').value
      if (code.length === 0) {
        return "unset"
      }
      return prefix.replace("{code}", code);
    },
    NHentai(event) {
      this.url = this.factory('https://nhentai.net/g/{code}');
    },
    Pixiv(event) {
      this.url = this.factory('https://www.pixiv.net/artworks/{code}');
    }
  }
}
</script>