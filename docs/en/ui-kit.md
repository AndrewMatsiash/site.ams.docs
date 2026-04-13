---
title: UI Kit
---

<script setup lang="ts">
import ThemeBrandColorControls from '../.vitepress/theme/components/ui/ThemeBrandColorControls.vue'
</script>

## Theme colors (`--vp-c-brand-*`)

The controls below set CSS variables on `<html>` so you can see the effect on links and accents on this page.

<ThemeBrandColorControls />

---

## Markdown reference (VitePress)

Live examples of VitePress Markdown extensions. Full reference: [Markdown Extensions](https://vitepress.dev/guide/markdown).

### Оглавление вставки `[[toc]]`

[[toc]]

### Заголовки и свой якорь {#md-custom-anchor}

Ссылка на этот блок: `#md-custom-anchor`. Синтаксис: `## Текст {#id}`.

#### Заголовок 4-го уровня

### Выделение и инлайн-код

**жирный**, *курсив*, ***жирный курсив***, ~~зачёркнуто~~, `инлайн-код`.

### Списки

1. Нумерованный
2. Второй пункт

- Маркированный
- Ещё пункт

- [x] задача выполнена (GFM)
- [ ] не выполнена

### Таблица (GitHub-стиль)

| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | -------------: |
| текст     |  центр    |         вправо |
| ячейка    |     ○     |            123 |

### Цитата

> Цитата одной строкой.
>
> Вторая строка в той же цитате.

### Разделитель

---

### Ссылки

Внешняя: [Vue.js](https://vuejs.org/) (откроется в новой вкладке).

Internal link example: [Guide](./guide.md).

### Emoji

:tada: :+1: :rocket:

### Badge (компонент темы)

<Badge type="info" text="info" />
<Badge type="tip" text="tip" />
<Badge type="warning" text="warning" />
<Badge type="danger" text="danger" />

### Контейнеры `::: type`

::: info
Контейнер **info**.
:::

::: tip
Контейнер **tip**.
:::

::: warning
Контейнер **warning**.
:::

::: danger
Контейнер **danger**.
:::

::: details Нажми, чтобы раскрыть
Скрытый текст. Внутри может быть код:

```js
console.log('inside details')
```

:::

### GitHub-стиль алертов

> [!NOTE]
> Заметка (NOTE).

> [!TIP]
> Подсказка (TIP).

> [!IMPORTANT]
> Важно (IMPORTANT).

> [!WARNING]
> Предупреждение (WARNING).

> [!CAUTION]
> Осторожно (CAUTION).

### Код: подсветка и копирование

Обычный блок — Shiki + кнопка копирования:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

### Код: подсветка строк `{n}`

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

### Код: маркер на строке

```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```

### Код: фокус на строке

```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```

### Код: diff-строки

```js
export default {
  data() {
    return {
      old: 'удалено' // [!code --]
      neu: 'добавлено' // [!code ++]
    }
  }
}
```

### Код: warning / error на строке

```js
export default {
  data() {
    return {
      err: 'ошибка', // [!code error]
      warn: 'предупреждение' // [!code warning]
    }
  }
}
```

### Код: группа вкладок `::: code-group`

::: code-group

```js [config.js]
export default {
  title: 'JS'
}
```

```ts [config.ts]
export default {
  title: 'TS' as const
}
```

:::

### Код: импорт фрагмента из файла `<<<`

Фрагмент из `docs/.vitepress/config.ts` (строки 6–11):

<<< ../.vitepress/config.ts{6-11}

### Блок без языка

```
многострочный текст
без подсветки синтаксиса
```

### Номера строк (если включены в конфиге)

Через суффикс языка `:line-numbers` (глобально: `markdown.lineNumbers` в `config`):

```ts:line-numbers
const a = 1
const b = 2
```

### Math (нужно включить вручную)

Сейчас в проекте **выключено**. Чтобы работали формулы: `npm add -D markdown-it-mathjax3@^4` и в `config`: `markdown: { math: true }`. Пример из доки:

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

### Включение другого `.md` (оператор `!!!`)

Можно собирать страницу из частей: `!!! parts/fragment.md` — см. [Markdown File Inclusion](https://vitepress.dev/guide/markdown#markdown-file-inclusion). Отдельный файл под пример здесь не добавлялся.

### Сырой HTML / изоляция `::: raw`

Для вставки разметки, которая конфликтует с VitePress, используют `::: raw` или класс `vp-raw` — см. [raw](https://vitepress.dev/guide/markdown#raw).
