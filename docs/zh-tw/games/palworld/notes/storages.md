---
title: 物品儲存
layout: AddonPage
idea: https://forum.gamer.com.tw/C.php?bsn=71458&snA=1508
---

::: note 遊戲版本
Win S v0.6.1.75453
:::

::: info TL;DR
推薦的箱子根據解鎖等級排序依序是

- 木箱
- 金屬箱
- 精煉金屬箱
- 高等文明箱子

而某些箱子因其特殊性可以另作他用，例如：

- 公會箱子：食物/食材放在裡面不會腐壞
- 道具存取機：無儲存空間，但可以直接存取據點內的所有箱子

:::

<table>
  <colgroup>
    <col style="width: 1.5rem;">
    <col>
    <col>
    <col>
    <col>
    <col>
    <col style="width: 20%;">
  </colgroup>
  <thead>
    <tr>
      <th>圖示</th>
      <th>箱子名稱</th>
      <th>套組</th>
      <th>解鎖等級</th>
      <th>格數</th>
      <th>材料</th>
      <th>備註</th>
    </tr>
  </thead>
<tbody>
  <!-- 套組群組展開 -->
  <template v-for="chest in chests" :key="chest[0]">
    <!-- 群組 -->
    <template v-if="chest.length === 2">
      <tr v-for="(item, index) in chest[1]" :key="`${chest[0]}-${item[1]}`">
        <td><img :src="`https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_${item[0]}.webp`" :alt="item[0]" class="storage-icon"></td>
        <td>{{ item[1] }}</td>
        <td v-if="index === 0" :rowspan="chest[1].length">{{ chest[0] }}</td>
        <td v-if="index === 0" :rowspan="chest[1].length">{{ groups[chest[0]] }}</td>
        <td>{{ item[2] }}</td>
        <td><div v-html="ToString.material(item[3])"></div></td>
        <td>{{ item[4] ?? "" }}</td>
      </tr>
    </template>
    <template v-else>
      <tr>
        <td><img :src="`https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_${chest[0]}.webp`" :alt="chest[0]" class="storage-icon"></td>
        <td>{{ chest[1] }}</td>
        <td>無</td>
        <td>{{ chest[2] }}</td>
        <td>{{ ToString.slot(chest[3]) }}</td>
        <td><div v-html="ToString.material(chest[4])"></div></td>
        <td>{{ chest[5] ?? "" }}</td>
      </tr>
    </template>
  </template>
</tbody>
</table>

<script setup lang="ts">
const materialTranslations: Record<string, string> = {
  wood: "木材",
  stone: "石頭",
  ingot: "金屬錠",
  nail: "釘子",
  fiber: "纖維",
  redBerry: "紅色莓果",
  iceOrgan: "結冰器官",
  refinedIngot: "精煉金屬錠",
  polymer: "聚合物",
  circuitBoard: "電路板",
  paldiumFragment: "帕魯礦碎片",
  ancientCivilizationParts: "古代文明部件",
  palMetalIngot: "帕魯金屬錠",
}

const materialTextureIds: Record<string, string> = {
  wood: "Material_Wood",
  stone: "Material_Stone",
  ingot: "Material_CopperIngot",
  nail: "Material_MachineParts",
  fiber: "Material_Fiber",
  redBerry: "Food_Berries",
  iceOrgan: "Material_IceOrgan",
  refinedIngot: "Material_IronIngot",
  polymer: "Material_Polymer",
  circuitBoard: "Material_ElectronicCircuit",
  paldiumFragment: "Material_Pal_crystal_S",
  ancientCivilizationParts: "Material_PalCrystal_Ex",
  palMetalIngot: "Material_StealIngot",
}

const groups: Record<string, number> = {
  木製酒吧收納家具: 6,
  古典收納: 8,
  古典收納櫥櫃: 13,
  金屬架子: 18,
  貨櫃箱: 34
}

type Chest = [name: string, group: string | number, slots: number, ingredients: string, tips?: string];
type ChestInGroup = [name: string, slots: number, ingredients: string, tips?: string];
type ChestGroup = [name: string, chests: ChestInGroup[]];

// https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_${id}.webp

const chests: (Chest|ChestGroup)[] = [
  ["ItemChest", "木箱", 2, 10, "15x wood, 5x stone"],

  ["木製酒吧收納家具", [
    ["Barrel_Wood", "木桶", 8, "30x wood, 5x stone"],
    ["Box_Wood", "木製箱子", 10, "30x wood, 5x stone"],
    ["Shelf_Wood", "木製架子", 10, "40x wood, 2x nail"],
    ["Shelf_Cask_Wood", "木製酒桶架", 15, "70x wood, 10x stone"],
    ["Shelf_Hang01_Wood", "木製牆面置物架", 2, "20x wood, 5x stone", "必須放在牆上"],
    ["Shelf01_Wall_Iron", "鐵製牆面置物架", 3, "15x wood, 10x ingot", "必須放在牆上"],
  ]],

  ["古典收納", [
    ["Shelf01_Stone", "古典書架", 10, "40x wood, 2x nail"],
    ["Shelf02_Stone", "古典衣櫥", 20, "70x wood, 5x nail"],
    ["Shelf03_Stone", "古典抽屜櫃", 10, "30x wood, 10x ingot"],
    ["Shelf04_Stone", "古典床頭櫃", 7, "15x wood, 3x ingot"],
  ]],

  ["古典收納櫥櫃", [
    ["Shelf05_Stone", "古典櫥櫃", 12, "30x wood, 10x fiber"],
    ["Shelf06_Stone", "古典橫型櫥櫃", 15, "40x wood, 10x fiber"],
    ["Shelf07_Stone", "古典大型櫥櫃", 15, "40x wood, 10x fiber, 3x ingot"],
    ["Shelf01_Wall_Stone", "古典壁櫥", 3, "20x wood, 5x stone, 3x redBerry", "必須放在牆上"],
  ]],

  ["CoolerBox", "保冷箱", 13, 10, "20x ingot, 20x stone, 5x iceOrgan", "只能儲存食物"],

  ["ItemChest_02", "金屬箱", 16, 24, "30x wood, 15x ingot"],

  ["金屬架子", [
    ["Shelf01_Iron", "金屬架子", 20, "15x ingot, 1x nail"],
    ["Shelf02_Iron", "金屬橫架", 20, "15x ingot, 2x nail"],
    ["Shelf03_Iron", "橘色置物櫃", 30, "20x ingot, 3x nail"],
    ["Shelf04_Iron", "置物櫃", 30, "20x ingot, 3x nail"],
  ]],

  ["貨櫃箱", [
    ["Container01_Iron", "大型貨櫃", 40, "100x ingot"],
    ["Box01_Iron", "鐵製箱子", 10, "10x ingot, 20x wood"],
    ["Box02_Iron", "帆布鐵製箱子", 10, "10x ingot, 15x wood, 2x fiber"],
  ]],

  ["Refrigerator", "冰箱", 38, 25, "50x refinedIngot, 20x polymer, 15x iceOrgan, 5x circuitBoard", "只能儲存食物"],
  ["ItemChest_03", "精煉金屬箱", 39, 40, "20x refinedIngot, 50x wood, 20x nail"],
  ["GuildChest", "公會箱子", 40, 54, "50x refinedIngot, 100x paldiumFragment, 10x ancientCivilizationParts", "古代科技，共享的一個儲存空間"],
  ["BaseCampItemDispenser", "道具存取機", 49, 0, "100x palMetalIngot, 30x paldiumFragment", "無儲存空間，但可以直接存取據點內的所有箱子"],
  ["Tansu", "抽屜櫃", 54, null, null],
  ["ItemChest_04", "高等文明箱子", 58, 54, null],
]

class ToString {
  static material(str: string): string {
    return (str == null ? "無資料" : str.replace(/(\d+)x (\w+)(, )?/g, (match, p1, p2, p3) => `<span class="material-icon-wrapper">${p1}×<img src="https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_${materialTextureIds[p2]}.webp" class="material-icon" alt="${materialTranslations[p2]}"></span>${p3 ? "<br>": ""}`));
  }

  static slot(slots: number): string {
    return slots == null ? "無資料" : `${slots}`;
  }
}
</script>

<style lang="scss">
td {
  overflow: visible;
  vertical-align: middle;
}

img {
  &.material-icon {
    height: 1.5rem;
  }
  &.storage-icon {
    height: 4rem;
  }
}

.material-icon-wrapper {
  white-space: nowrap;
}
</style>