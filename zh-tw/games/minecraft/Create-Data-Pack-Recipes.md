---
icon: cube
category: Minecraft
tag:
- 動力機械
- 模組
- 資料包
---

# 動力機械資料包配方

| 機器       | 配方名稱                      | ID                           |
| ---------- | ----------------------------- | ---------------------------- |
| 鼓風機     | [批次喚魂](#批次喚魂)         | `create:haunting`            |
| \          | [批次洗滌](#批次洗滌)         | `create:splashing`           |
| 石磨       | [研磨](#研磨)                 | `create:milling`             |
| 粉碎輪     | [粉碎](#粉碎)                 | `create:crushing`            |
| 動力輥壓機 | [壓塑](#壓塑)                 | `create:compacting`          |
| \          | [金屬鍛造](#金屬鍛造)         | `create:pressing`            |
| 動力攪拌器 | [混合攪拌](#混合攪拌)         | `create:mixing`              |
| 分液池     | [分液](#分液)                 | `create:emptying`            |
| 注液器     | [灌注](#灌注)                 | `create:filling`             |
| 機械圓鋸機 | [切割](#切割)                 | `create:cutting`             |
| 機械手     | [使用](#使用)                 | `create:deploying`           |
| 手         | [手動使用物品](#手動使用物品) | `create:item_application`    |
| 砂紙       | [砂紙打磨](#砂紙打磨)         | `create:sandpaper_polishing` |
| 動力合成器 | [機械製造](#機械製造)         | `create:mechanical_crafting` |
| *          | [序列組裝](#序列組裝)         | `create:sequenced_assembly`  |

## 配方類型

### 批次喚魂

相關方塊：
- `create:encased_fan`
- `#create:fan_processing_catalysts/haunting`

```json
{
  "type": "create:haunting",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:haunting",
  "ingredients": [
    {
      "tag": "forge:cobblestone"
    }
  ],
  "results": [
    {
      "item": "minecraft:blackstone"
    }
  ]
}
```
:::

### 批次洗滌

相關方塊：
- `create:encased_fan`
- `#create:fan_processing_catalysts/washing`

```json
{
  "type": "create:splashing",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:splashing",
  "ingredients": [
    {
      "item": "minecraft:black_concrete_powder"
    }
  ],
  "results": [
    {
      "item": "minecraft:black_concrete"
    }
  ]
}
```
:::

### 研磨

相關方塊：
- `create:milling_stone`

```json
{
  "type": "create:milling",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[],
  "processingTime": GameTick // 可選，單位為遊戲刻
}
```

:::details 範例
```json
{
  "type": "create:milling",
  "ingredients": [
    {
      "item": "minecraft:andesite"
    }
  ],
  "results": [
    {
      "item": "minecraft:cobblestone"
    }
  ],
  "processingTime": 200
}
```
:::

### 粉碎

相關方塊：
- `create:crushing_wheel`

```json
{
  "type": "create:crushing",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[],
  "processingTime": GameTick // 可選，單位為遊戲刻
}
```

:::details 範例
```json
{
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:amethyst_block"
    }
  ],
  "results": [
    {
      "item": "minecraft:amethyst_shard",
      "count": 3
    },
    {
      "item": "minecraft:amethyst_shard",
      "chance": 0.5
    }
  ],
  "processingTime": 150
}
```
:::

### 壓塑

相關方塊：
- `create:mechanical_press`
- `create:basin`

```json
{
  "type": "create:compacting",
  "ingredients:": Ingredients<Item,Fluid>[],
  "result": Result<Item,Fluid>[],
  "heatRequirement": "superheated"|"heated"|"none" // 可選，最低熱度需求
}
```

:::details 範例
```json
{
  "type": "create:compacting",
  "ingredients": [
    {
      "item": "minecraft:flint"
    },
    {
      "item": "minecraft:flint"
    },
    {
      "item": "minecraft:gravel"
    },
    {
      "fluid": "minecraft:lava",
      "amount": 100,
      "nbt": {}
    }
  ],
  "results": [
    { "item": "minecraft:andesite" }
  ]
}
```
:::

### 金屬鍛造

相關方塊：
- `create:mechanical_press`
- `create:depot` / `create:belt_connector`

```json
{
  "type": "create:pressing",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item,Fluid>[]
}
```

:::details 範例
```json
{
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": "forge:ingots/brass"
    }
  ],
  "results": [
    {
      "item": "create:brass_sheet"
    }
  ]
}
```
:::

### 混合攪拌

相關方塊：
- `create:mechanical_mixer`
- `create:basin`

```json
{
  "type": "create:mixing",
  "ingredients:": SpecialIngredients<Item,Fluid>[],
  "result": Result<Item,Fluid>[],
  "heatRequirement": "superheated"|"heated"|"none" // 可選，最低熱度
}
```

#### [Ingredients](#objectltIngredientgt)&lt;SpecialIngredients&gt;

- `return_chance`: number = 1（可選）
  1.0 = 100%

:::details 範例
```json
{
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "minecraft:andesite"
    },
    {
      "tag": "forge:nuggets/iron"
    }
  ],
  "results": [
    {
      "item": "create:andesite_alloy"
    }
  ]
}
```
:::

### 分液

相關方塊：
- `create:item_drain`

```json
{
  "type": "create:emptying",
  "ingredients:": Ingredients<Item>[],
  "result": [Result<Item>, Result<Fluid>]
}
```

:::details 範例
```json
{
  "type": "create:emptying",
  "ingredients": [
    {
      "item": "create:builders_tea"
    }
  ],
  "results": [
    {
      "item": "minecraft:glass_bottle"
    },
    {
      "amount": 250,
      "fluid": "create:tea"
    }
  ]
}
```
:::

### 灌注

相關方塊：
- `create:spout`
- `create:depot` / `create:belt_connector`

```json
{
  "type": "create:filling",
  "ingredients:": [Ingredients<Item>, Ingredients<Fluid>],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:filling",
  "ingredients": [
    {
      "item": "create:blaze_cake_base"
    },
    {
      "fluid": "minecraft:lava",
      "amount": 250,
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "create:blaze_cake"
    }
  ]
}
```
:::

### 切割

相關方塊：
- `create:mechanical_saw`

```json
{
  "type": "create:cutting",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[],
  "processingTime": GameTick // 可選，單位為遊戲刻
}
```

:::details 範例
```json
{
  "type": "create:cutting",
  "ingredients": [
    {
      "item": "minecraft:acacia_log"
    }
  ],
  "results": [
    {
      "item": "minecraft:stripped_acacia_log"
    }
  ],
  "processingTime": 50
}
```
:::

### 使用

相關方塊：
- `create:deployer`
- `create:depot` / `create:belt_connector`

```json
{
  "type": "create:deploying",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "create:shaft"
    },
    {
      "tag": "minecraft:planks"
    }
  ],
  "results": [
    { "item": "create:cogwheel" }
  ]
}
```
:::

### 手動使用物品

```json
{
  "type": "create:item_application",
  "ingredients:": [Ingredients<Block>, Ingredients<Item>],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:sandpaper_polishing",
  "ingredients": [
    {
      "item": "create:rose_quartz"
    }
  ],
  "results": [
    {
      "item": "create:polished_rose_quartz"
    }
  ]
}
```
:::

### 砂紙打磨

相關物品
- `create:sand_paper` / `create:red_sand_paper`

```json
{
  "type": "create:sandpaper_polishing",
  "ingredients:": Ingredients<Item>[],
  "result": Result<Item>[]
}
```

:::details 範例
```json
{
  "type": "create:sandpaper_polishing",
  "ingredients": [
    {
      "item": "create:rose_quartz"
    }
  ],
  "results": [
    {
      "item": "create:polished_rose_quartz"
    }
  ]
}
```
:::

### 機械製造

相關方塊：
- `create:mechanical_crafter`

```json
{
  "type": "create:mechanical_crafting",
  "key": object<string, Ingredients<Item>>
  "pattern": string[][],
  "result": Result<Item>[],
  "acceptMirrored": boolean // 可選，是否允許鏡像配方
}
```

:::details 範例
```json
{
  "type": "create:mechanical_crafting",
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "P": {
      "tag": "minecraft:planks"
    },
    "S": {
      "tag": "forge:stone"
    }
  },
  "pattern": [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  "result": {
    "item": "create:crushing_wheel"
    "count": 2,
  },
  "acceptMirrored": false
}
```
:::

### 序列組裝

相關方塊：
- `create:belt_connector` / `create:`
- `create:deployer`（使用 `deploying` 配方時）
- `create:mechanical_press`（使用 `pressing` 配方時）
- `create:mechanical_saw`（使用 `sawing` 配方時）
- `create:spout`（使用 `filling by spout` 配方時）

```json
{
  "type": "create:sequenced_assembly",
  "ingredients:": Ingredients<Item>,
  "sequence": SequenceRecipe[],
  "result": Result<Item>[],
  "loops": number,
  "translationItem": Ingredients<Item> // optional
}
```

:::details 範例
```json
{
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/gold"
  },
  "loops": 5,
  "results": [
    {
      "chance": 120.0,
      "item": "create:precision_mechanism"
    },
    {
      "chance": 8.0,
      "item": "create:golden_sheet"
    },
    {
      "chance": 8.0,
      "item": "create:andesite_alloy"
    },
    {
      "chance": 5.0,
      "item": "create:cogwheel"
    },
    {
      "chance": 3.0,
      "item": "minecraft:gold_nugget"
    },
    {
      "chance": 2.0,
      "item": "create:shaft"
    },
    {
      "chance": 2.0,
      "item": "create:crushed_raw_gold"
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "minecraft:clock"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "create:cogwheel"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredient": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": "create:large_cogwheel"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "tag": "forge:nuggets/iron"
        }
      ],
      "results": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "create:incomplete_precision_mechanism"
  }
}
```
:::

---

## 資料類型

### object&lt;`Ingredient`&gt;

- `nbt`: 物件 = {}（可選）  
  NBT 篩選器
- `chance`: 數字 = 1（可選）

#### &lt;Item&gt;

- `item|tag`: 字串  
  物品 ID 或標籤，必須是資源路徑（Resource location）

#### &lt;Block&gt;

- `item|tag`: string  
  方塊 ID 或標籤，必須是資源路徑（Resource location）

#### &lt;Fluid&gt;

- `fluid|fluidTag`: string  
  流體 ID 或標籤，必須是資源路徑（Resource location）
- `amount`: number = 1（可選）  
  流體數量

### object&lt;`Result`&gt;

- `nbt`: object = {}（可選）  
  NBT 篩選器
- `chance`: number = 1（可選）  
  成品產出機率

#### &lt;Item&gt;

- `item`: string  
  物品 ID 或標籤，必須是資源路徑（Resource location）
- `count`: number = 1（可選）  
  物品數量

#### &lt;Block&gt;

- `item|tag`: string  
  方塊 ID 或標籤，必須是資源路徑（Resource location）

#### &lt;Fluid&gt;

- `fluid`: string  
  流體 ID 或標籤，必須是資源路徑（Resource location）
- `amount`: number = 1（可選）  
  流體數量

### number&lt;`GameTick`&gt;

20 刻 = 1 秒  
[刻－中文 Minecraft Wiki](https://zh.minecraft.wiki/w/%E5%88%BB)