---
icon: fa-brands fa-python
isOriginal: true
category:
  - 程式設計
  - Python
tag:
  - Python
  - 魔術方法
---

# Python 魔術方法列表

## Building Class ｜構造類別

| Method Name            | Symbol       | Description |
| ---------------------- | ------------ | ----------- |
| `__new__(cls, [...)`   | `cls([...)`  | 構造        |
| `__init__(self, [...)` | `self`       | 初始化      |
| `__del__(self)`        | `del self`   | 刪除        |
| `__call__(self, [...)` | `self([...)` | 調用自身    |

## Attribute ｜屬性

| Method Name                     | Symbol             | Description |
| ------------------------------- | ------------------ | ----------- |
| `__getattr__(self, key)`        | `self.key`         | 獲取屬性    |
| `__setattr__(self, key, value)` | `self.key = value` | 設定屬性    |
| `__delattr__(self, key)`        | `del self.key`     | 刪除屬性    |

## Boolean Operation ｜布林值

| Method Name            | Symbol          | Description        |
| ---------------------- | --------------- | ------------------ |
| `__cmp__(self, other)` | ` `             |                    |
| `__eq__(self, other)`  | `self == other` | 等於               |
| `__ne__(self, other)`  | `self != other` | 不等於             |
| `__lt__(self, other)`  | `self < other`  | 小於               |
| `__le__(self, other)`  | `self <= other` | 小於等於（不大於） |
| `__gt__(self, other)`  | `self > other`  | 大於               |
| `__ge__(self, other)`  | `self >= other` | 大於等於（不小於） |

## Math Operation ｜數學運算符

| Method Name                 | Symbol                               | Description      |
| --------------------------- | ------------------------------------ | ---------------- |
| `__add__(self, other)`      | `self + other`                       | 加               |
| `__sub__(self, other)`      | `self - other`                       | 減               |
| `__mul__(self, other)`      | `self * other`                       | 乘               |
| `__truediv__(self, other)`  | `self / other`                       | 除               |
| `__floordiv__(self, other)` | `self // other`                      | 整除             |
| `__mod__(self, other)`      | `self % other`                       | 求餘             |
| `__divmod__(self, other)`   | `divmod(self, other)`                |                  |
| `__pow__(self, other)`      | `power(self, other) & self ** other` | 次方             |
| `__lshift__(self, other)`   | `self << other`                      | 左移（位元運算） |
| `__rshift__(self, other)`   | `self >> other`                      | 右移（位元運算） |
| `__and__(self, other)`      | `self & other`                       | 與（位元運算）   |
| `__or__(self, other)`       | `self \| other`                      | 或（位元運算）   |
| `__xor__(self, other)`      | `self ^ other`                       | 異或（位元運算） |

## Right Math Operation ｜被動數學運算符

| Method Name                  | Symbol          | Description |
| ---------------------------- | --------------- | ----------- |
| `__radd__(self, other)`      | `other + self`  | 被加        |
| `__rsub__(self, other)`      | `other - self`  | 被減        |
| `__rmul__(self, other)`      | `other * self`  | 被乘        |
| `__rtruediv__(self, other)`  | `other / self`  | 被除        |
| `__rfloordiv__(self, other)` | `other // self` | 被整除      |
| `__rmod__(self, other)`      | `other % self`  | 被求餘      |
| `__rpow__(self, other)`      | `other ** self` | 被次方      |
| `__rlshift__(self, other)`   | `other << self` | 被左移      |
| `__rrshift__(self, other)`   | `other >> self` | 被右移      |
| `__rand__(self, other)`      | `other & self`  | 被與        |
| `__ror__(self, other)`       | `other \| self` | 被或        |
| `__rxor__(self, other)`      | `other ^ self`  | 被異或      |

## Assign Value Operation ｜賦值數學運算符

| Method Name                  | Symbol           | Description        |
| ---------------------------- | ---------------- | ------------------ |
| `__iadd__(self, other)`      | `self += other`  | 自加               |
| `__isub__(self, other)`      | `self -= other`  | 自減               |
| `__imul__(self, other)`      | `self *= other`  | 自乘               |
| `__itruediv__(self, other)`  | `self /= other`  | 自除               |
| `__ifloordiv__(self, other)` | `self //= other` | 自整除             |
| `__imod__(self, other)`      | `self %= other`  | 自求餘             |
| `__ipow__(self, other)`      | `self **= other` | 自次方             |
| `__ilshift__(self, other)`   | `self <<= other` | 自左移（位元運算） |
| `__irshift__(self, other)`   | `self >>= other` | 自右移（位元運算） |
| `__iand__(self, other)`      | `self &= other`  | 自與（位元運算）   |
| `__ior__(self, other)`       | `self \|= other` | 自或（位元運算）   |
| `__ixor__(self, other)`      | `self ^= other`  | 自異或（位元運算） |

## Unary Operation ｜一元運算符

| Method Name        | Symbol      | Description    |
| ------------------ | ----------- | -------------- |
| `__pos__(self)`    | `+self`     | 正             |
| `__neg__(self)`    | `-self`     | 負             |
| `__abs__(self)`    | `abs(self)` | 絕對值         |
| `__invert__(self)` | `~self`     | 逆（位元運算） |

## Type Conversion ｜類型轉換

| Method Name           | Symbol            | Description |
| --------------------- | ----------------- | ----------- |
| `__complex__(self)`   | `complex(self)`   | 複數        |
| `__int__(self)`       | `int(self)`       | 整數        |
| `__float__(self)`     | `float(self)`     | 浮點數      |
| `__round__(self, n])` | `round(self, n])` | 四捨五入    |
| `__index__(self)`     | 1. <br>2. <br>3.  | 索引        |
| `__repr__(self)`      | `repr(self)`      |             |
| `__bool__(self)`      | `bool(self)`      | 布林值      |
| `__str__(self)`       | `str(self)`       | 字串        |
| `__format__(self)`    | `f"{}"`           |             |

## Context Manager ｜上下文管理器

| Method Name                                    | Symbol    | Description      |
| ---------------------------------------------- | --------- | ---------------- |
| `__enter__(self)`                              | 1. <br>2. | 進入上下文管理器 |
| `__exit__(self, exctype, excvalue, trackback)` | 1. <br>2. | 退出上下文管理器 |

## Container ｜容器

| Method Name                     | Symbol                            | Description     |
| ------------------------------- | --------------------------------- | --------------- |
| `__len__(self)`                 | `len(self)`                       | 容器長度        |
| `__getitem__(self, key)`        | `self[key]`                       | 調用容器值      |
| `__setitem__(self, key, value)` | `self[key] = value`               | 設定容器值      |
| `__delitem__(self, key)`        | `del self[key]`                   | 刪除容器值      |
| `__iter__(self)`                | `iter(self)`                      | 迭代容器        |
| `__reversed__(self)`            | `reversed(self)`                  | 反轉容器        |
| `__contains__(self, item)`      | `item in self & item not in self` | 在 / 不在容器裡 |
