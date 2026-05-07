---
title: Docs
search: false
---

<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

# Docs

Страницы документации в этом проекте пишутся в Markdown. Каждый файл `.md` VitePress превращает в отдельную страницу сайта.

- Официальная документация VitePress по Markdown: [vitepress.dev/guide/markdown](https://vitepress.dev/guide/markdown)
- Базовый синтаксис Markdown: [markdownguide.org/basic-syntax](https://www.markdownguide.org/basic-syntax/)

Ниже собраны основные варианты Markdown и VitePress Markdown Extensions. Для каждого пункта сначала показан синтаксис, затем результат. При необходимости одну страницу можно собирать из нескольких Markdown-файлов через include-механику VitePress.

[[toc]]

## **Редактирование страниц через PageCMS**

Контент документации связан с репозиторием через **[PageCMS](https://pagescms.org/)** (интерфейс: [app.pagescms.org](https://app.pagescms.org/)): после входа через GitHub открывается проект этого репозитория и список коллекций из файла `.pages.yml` в корне репозитория.

Страничка входа для редакторов развёрнут на сайте (редирект в PageCMS):

- локально: `http://localhost:5173/site.ams.docs/admin/` (или порт вашего `vitepress dev`)
- на сайте GitHub Pages: `/site.ams.docs/admin/` (полный вид: например `https://<ваш-хостинг>/site.ams.docs/admin/`)

**Политика веток:** правки не должны попадать в `main` напрямую — только через отдельную ветку и **pull request**. В PageCMS выбери рабочую ветку (например `cms-edits`), не `main`; на GitHub включи защиту ветки `main`. Чеклист настроек — в файле `CONTRIBUTING.md` в **корне репозитория** (на GitHub открой его в браузере).

Структура коллекций в PageCMS задаётся в `.pages.yml`. В этом репозитории две коллекции Markdown-файлов с YAML-frontmatter:

| Коллекция в UI PageCMS | Папка в репозитории | Основное поля |
| ---------------------- | ------------------- | ----- |
| **Документация RU** (`docs_ru`) | `docs/ru/` | **Заголовок** (`title`), **Содержимое** (`body`) |
| **Documentation EN** (`docs_en`) | `docs/en/` | **Title**, **Content** (`body`) |

Раздел «Содержимое» / **Content** — редактор Markdown с переключаемым исходником (**switcher**: визуальный режим или сырой Markdown). Поле заголовка попадает в frontmatter страницы и задаёт название файла для новых страниц по шаблону `{primary}.md` (первичное поле — `title`).

### Как отредактировать существующую страницу

1. Открой [PageCMS](https://app.pagescms.org/) и войди через GitHub (у аккаунта должны быть права на запись в репозиторий так же, как при обычном git push).
2. Выбери проект **этого** репозитория.
3. Открой коллекцию **«Документация RU»** или **«Documentation EN»** — в зависимости от языка файла (`docs/ru` или `docs/en`).
4. В **древовидном** списке (**layout: tree** в `.pages.yml`) найди нужный файл (например `docs` для `docs.md` или раздел с `index.md` у страниц-разделов).
5. Измени **Заголовок** / **Title** и/или **Содержимое** / **Content**. Не удаляй из тела критичные для проекта блоки (например `<script setup>` и кастомные Vue-компоненты в Markdown), если это не согласовано с разработкой — иначе страница на VitePress может перестать собираться.
6. Сохрани — PageCMS создаст коммит в **текущую рабочую ветку** проекта (часто это отдельная ветка, а не `main`).
7. Когда правки готовы к ревью, в PageCMS запусти действие **Create PR to main** (настроено в `.pages.yml`: workflow `pages-cms-create-pr.yml`). Оно создаст или обновит pull request из текущей ветки в `main`. После мержа сработает деплой сайта.

### Как добавить страницу или раздел

Ниже — пошагово: **листовая страница**, **раздел** (папка или `index.md`) и **дочерняя страница** внутри родителя. Скрины с коллекции **Documentation EN**; для **Документация RU** интерфейс тот же, путь в модалке будет `docs/ru`.

**1. Коллекция и панель действий**

Открой [PageCMS](https://app.pagescms.org/) → проект → **Documentation EN** или **Документация RU**. Над таблицей: **Search entries…**, **папка с «+»**, **Add an entry**.

![Шаг 1 — список коллекции и панель](/images/pagecms-step-01-collection-toolbar.png)

- **Листовая страница** на текущем уровне → **Add an entry** → форма **New entry** (**шаг 1а**): **Filename**, **Title**, **Content**; имя файла не `index.md`, если только это не [главная страница раздела](#pagecms-section-index-required).
- **Подпапка раздела** → **папка с «+»** → модалка **Create a folder** (см. шаг 2).

#### Подпись к панели {#pagecms-collection-toolbar}

| Элемент | Назначение |
| ------- | ---------- |
| **Search entries…** | Поиск по записям коллекции. |
| **Папка с «+»** | Создать **каталог** раздела под `docs/en` или `docs/ru`. |
| **Add an entry** | Новая **запись**: одна `.md` на текущем уровне (в т.ч. `index.md` для главной страницы раздела — шаг 4). |
| **Edit / ⋮ / + у строки** | Правка, меню, **Add children entry** — дочерняя страница под этой строкой (шаги 3 и 6). |

#### Две кнопки «сверху» {#pagecms-folder-vs-entry}

**Папка с «+»** — новая **папка** в репозитории. **Add an entry** — новый **файл** `.md`. Для раздела по правилам `.pages.yml` у папки нужна главная страница **`index.md`** ([подробнее](#pagecms-section-index-required)).

**1а. После Add an entry — форма New entry (листовая страница)**

Если нажимаешь **Add an entry** для **страницы верхнего уровня** (не из «+» у строки), откроется экран **New entry** (крошки вроде «Documentation EN › New entry»):

- **Filename** — имя файла в репозитории, например `stranica.md` или `page.md` (для стабильных URL в VitePress удобнее **латиница и дефисы**, не пробелы).
- **Title** — обязательный заголовок страницы для отображения и frontmatter.
- **Content** — тело; вкладки **Editor** / **Source** — визуальный редактор или сырой Markdown.
- **Save** — сохранить и закоммитить в текущую ветку.

![После Add an entry — форма New entry для страницы верхнего уровня](/images/pagecms-step-add-entry-top-level.png)

**2. Создать папку раздела (опционально)**

Если выбрала **папку с «+»**, откроется **Create a folder**: введи имя каталога (латиница и дефисы надёжнее для URL), подтверди **Create**. Папка появится под `docs/en` или `docs/ru` в зависимости от коллекции.

![Шаг 2 — модалка Create a folder](/images/pagecms-step-02-create-folder-modal.png)

**3. Дочерняя страница — кнопка «+» у строки**

У нужной строки (страница или раздел) в колонке **Actions** нажми **«+»**. Подсказка: **Add children entry** — откроется форма новой записи **внутри** родителя.

![Шаг 3 — Add children entry](/images/pagecms-step-03-add-children-tooltip.png)

**4. Та же форма New entry — пример для `index.md` (главная страница раздела)**

Те же поля, что в **шаге 1а**, но **Filename** — `index.md`, если создаёшь [вход в раздел](#pagecms-section-index-required) (не путать с листовой `stranica.md` верхнего уровня).

![Шаг 4 — новая запись, пример с index.md](/images/pagecms-step-04-new-entry-index.png)

**5. Список с разделом / узлом**

После сохранения в таблице появляется узел (например **Whatsminer**); у папок и узлов с детьми может быть иконка раскрытия дерева.

![Шаг 5 — список с узлом раздела](/images/pagecms-step-05-list-with-section.png)

**6. Добавить ещё одного ребёнка**

Снова **«+»** у **родительской** строки — та же подсказка **Add children entry**.

![Шаг 6 — плюс у родителя Whatsminer](/images/pagecms-step-06-add-child-whatsminer.png)

**7. Дочерняя страница (файл внутри родителя)**

Та же форма **New entry**, путь к файлу уже внутри родителя. Пример: `podrazdel.md`, заголовок и текст. **Save**.

![Шаг 7 — форма дочерней страницы](/images/pagecms-step-07-new-child-entry.png)

**8. Итоговое дерево**

Дочерние записи отображаются **с отступом** под родителем.

![Шаг 8 — дерево: родитель и подраздел](/images/pagecms-step-08-tree-with-child.png)

**PR в `main`:** когда набор правок готов, в PageCMS запусти **Create PR to main** (см. выше раздел про редактирование).

### Почему у папки-раздела обязательно есть `index.md` {#pagecms-section-index-required}

В файле **`.pages.yml`** в корне репозитория для древа коллекций задано:

```yaml
view:
  node:
    filename: index.md
```

То есть **каждый раздел**, который ты добавляешь иконкой **папки с плюсом**, в репозитории — это каталог вида `docs/ru/<название>/`, а **единственная «главная» страница этого раздела** — файл **`index.md`** в этом каталоге. Именно её открывает PageCMS как страницу раздела и как раз под неё живёт человекочитаемый URL в VitePress (например `…/раздел/` или `…/razdel/` в зависимости от имени папки).

**Обычные страницы** на уровне коллекции по-прежнему создаются как `{заголовок}.md` (**Add an entry**); **`index.md` нужен только у узлов-разделов**, не у каждого файла.

### Что можно редактировать через PageCMS

Через коллекции `docs_ru` и `docs_en` меняются только Markdown-страницы под `docs/ru` и `docs/en`. Тема VitePress, компоненты в `.vitepress`, `config.ts`, `sidebar`, картинки вне настроенного media-пути и другие файлы репозитория в этой админке не редактируются — их меняют через IDE и обычный pull request.

Медиа для вставки в страницы: в `.pages.yml` указано `media.input: docs/public/images` (загрузки обрабатываются PageCMS согласно этой настройке).

## Frontmatter

Frontmatter находится в начале файла и управляет метаданными страницы: заголовком, описанием, sidebar title и другими параметрами. В теле страницы этот блок не отображается.

**Markdown**

```yaml
---
title: Docs
description: Пример страницы документации
---
```

**Результат**

Этот блок влияет на страницу, но не рендерится как видимый контент.

## Кастомные компоненты Vue в Markdown

В VitePress можно использовать свои Vue-компоненты прямо внутри `.md`-страницы. Для этого компонент нужно импортировать в блоке `<script setup>`, а затем вставить его как обычный тег.

В этом проекте есть компонент `DownloadFileButton`. Он принимает такие пропсы:

- `label` - текст на кнопке
- `href` - ссылка на файл

**Markdown**

````md
<script setup>
import DownloadFileButton from '../.vitepress/theme/components/ui/DownloadFileButton.vue'
</script>

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>
````

**Результат**

<DownloadFileButton
  label="User manual.pdf"
  href="/files/user-manual.pdf"
/>

## Кастомный компонент без пропсов

Если пропсы не передавать, компонент использует свои значения по умолчанию.

**Markdown**

```md
<DownloadFileButton />
```

**Результат**

<DownloadFileButton />

## Кастомный компонент с другим текстом

Так можно переиспользовать тот же компонент с другим `label`.

**Markdown**

```md
<DownloadFileButton label="Инструкция по установке.pdf" />
```

**Результат**

<DownloadFileButton label="Инструкция по установке.pdf" />

## Оглавление

`[[toc]]` автоматически строит оглавление по заголовкам на странице.

**Markdown**

```md
[[toc]]
```

**Результат**

Живой пример уже вставлен в верхней части этой страницы.

## Заголовки и якоря {#docs-headings}

У заголовков автоматически создаются якоря. Можно задать и свой собственный `id`.

**Markdown**

```md
## Раздел второго уровня
### Раздел третьего уровня
### Кастомный якорь {#custom-anchor-demo}
```

**Результат**

## Раздел второго уровня
### Раздел третьего уровня
### Кастомный якорь {#custom-anchor-demo}

Ссылка на кастомный якорь: [#custom-anchor-demo](#custom-anchor-demo)

## Параграфы

Новый абзац начинается после пустой строки.

**Markdown**

```md
Это первый абзац.

Это второй абзац.
```

**Результат**

Это первый абзац.

Это второй абзац.

## Выделение текста и inline code

**Markdown**

```md
**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачёркнутый текст~~
`inline code`
```

**Результат**

**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачёркнутый текст~~
`inline code`

## Внешняя ссылка

**Markdown**

```md
[Документация VitePress](https://vitepress.dev/guide/markdown)
```

**Результат**

[Документация VitePress](https://vitepress.dev/guide/markdown)

## Внутренняя ссылка

Внутренние ссылки ведут на другие страницы документации.

**Markdown**

```md
[Главная](/en/)
```

**Результат**

[Главная](/en/)

## Изображение

**Markdown**

```md
![Логотип AMS](/images/logo.svg)
```

**Результат**

![Логотип AMS](/images/logo.svg)

## GIF

GIF вставляется так же, как обычное изображение.

**Markdown**

```md
![Пример GIF](/images/demo.gif)
```

**Результат**

![Пример GIF](https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif)

## Видео

Для видео в Markdown-странице используй HTML-тег `<video>`.  
Обычно файл кладут в `docs/public/videos`, а в `src` указывают путь от корня сайта.

**Markdown**

```html
<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенное видео.
</video>
```

**Результат**

<video controls width="720" preload="metadata">
  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенное видео.
</video>

### Видео с YouTube

Для роликов YouTube используй `iframe` с `embed`-ссылкой.

**Markdown**

```html
<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```

**Результат**

<iframe
  width="720"
  height="405"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

## Маркированный список

**Markdown**

```md
- Первый пункт
- Второй пункт
- Третий пункт
```

**Результат**

- Первый пункт
- Второй пункт
- Третий пункт

## Нумерованный список

**Markdown**

```md
1. Первый шаг
2. Второй шаг
3. Третий шаг
```

**Результат**

1. Первый шаг
2. Второй шаг
3. Третий шаг

## Чеклист

**Markdown**

```md
- [x] Готово
- [ ] Нужно сделать
```

**Результат**

- [x] Готово
- [ ] Нужно сделать

## Цитата

**Markdown**

```md
> Это пример цитаты.
>
> Вторая строка в той же цитате.
```

**Результат**

> Это пример цитаты.
>
> Вторая строка в той же цитате.

## Разделитель

**Markdown**

```md
---
```

**Результат**

---

## Таблица

**Markdown**

```md
| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | ------------: |
| текст     |  центр    |       вправо |
| число     |    42     |           99 |
```

**Результат**

| Колонка A | Колонка B | Выравнивание |
| --------- | :-------: | ------------: |
| текст     |  центр    |       вправо |
| число     |    42     |           99 |

## Emoji

**Markdown**

```md
:tada: :rocket: :+1:
```

**Результат**

:tada: :rocket: :+1:

## Блок `info`

**Markdown**

```md
::: info
Информационный блок.
:::
```

**Результат**

::: info
Информационный блок.
:::

## Блок `tip`

**Markdown**

```md
::: tip
Полезная подсказка.
:::
```

**Результат**

::: tip
Полезная подсказка.
:::

## Блок `warning`

**Markdown**

```md
::: warning
Важное предупреждение.
:::
```

**Результат**

::: warning
Важное предупреждение.
:::

## Блок `danger`

**Markdown**

```md
::: danger
Критичное предупреждение.
:::
```

**Результат**

::: danger
Критичное предупреждение.
:::

## Блок `details`

**Markdown**

````md
::: details Нажми, чтобы раскрыть
Скрытый текст.

```js
console.log('inside details')
```
:::
````

**Результат**

::: details Нажми, чтобы раскрыть
Скрытый текст.

```js
console.log('inside details')
```
:::

## Блок `details` открытый по умолчанию

**Markdown**

````md
::: details Открытый блок {open}
```js
console.log('opened by default')
```
:::
````

**Результат**

::: details Открытый блок {open}
```js
console.log('opened by default')
```
:::

## Блок с кастомным заголовком

**Markdown**

```md
::: danger STOP
Не продолжайте без проверки.
:::
```

**Результат**

::: danger STOP
Не продолжайте без проверки.
:::

## GitHub Alert `NOTE`

**Markdown**

```md
> [!NOTE]
> Этот блок полезен для заметок.
```

**Результат**

> [!NOTE]
> Этот блок полезен для заметок.

## GitHub Alert `TIP`

**Markdown**

```md
> [!TIP]
> Этот блок полезен для подсказок.
```

**Результат**

> [!TIP]
> Этот блок полезен для подсказок.

## GitHub Alert `IMPORTANT`

**Markdown**

```md
> [!IMPORTANT]
> Этот блок подчёркивает обязательную информацию.
```

**Результат**

> [!IMPORTANT]
> Этот блок подчёркивает обязательную информацию.

## GitHub Alert `WARNING`

**Markdown**

```md
> [!WARNING]
> Этот блок предупреждает о рисках.
```

**Результат**

> [!WARNING]
> Этот блок предупреждает о рисках.

## GitHub Alert `CAUTION`

**Markdown**

```md
> [!CAUTION]
> Этот блок описывает негативные последствия.
```

**Результат**

> [!CAUTION]
> Этот блок описывает негативные последствия.

## Кодовый блок с подсветкой

**Markdown**

````md
```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```
````

**Результат**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AMS Docs'
})
```

## Подсветка строк в коде

**Markdown**

````md
```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```
````

**Результат**

```ts {2,4}
const ignored = 1
const highlighted = 2
const alsoIgnored = 3
const alsoHighlighted = 4
```

## Подсветка строки через комментарий

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'подсвечено' // [!code highlight]
    }
  }
}
```

## Фокус на строке

**Markdown**

````md
```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'в фокусе' // [!code focus]
    }
  }
}
```

## Diff-строки в коде

**Markdown**

````md
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
````

**Результат**

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

## Warning и error на строках кода

**Markdown**

````md
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
````

**Результат**

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

## Группа вкладок `code-group`

**Markdown**

````md
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
````

**Результат**

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

## Импорт фрагмента кода

**Markdown**

```md
<<< ../.vitepress/config.ts{6-11}
```

**Результат**

<<< ../.vitepress/config.ts{6-11}

## Кодовый блок без языка

**Markdown**

````md
```
многострочный текст
без подсветки синтаксиса
```
````

**Результат**

```
многострочный текст
без подсветки синтаксиса
```

## Номера строк

**Markdown**

````md
```ts:line-numbers=2
const second = 2
const third = 3
```
````

**Результат**

```ts:line-numbers=2
const second = 2
const third = 3
```

## Сырой HTML через `raw`

**Markdown**

````md
::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML-блок внутри Markdown.
</div>
:::
````

**Результат**

::: raw
<div style="padding: 12px 16px; border: 1px dashed #d9017a; border-radius: 12px;">
  HTML-блок внутри Markdown.
</div>
:::

## Math

Формулы в текущем проекте отключены. Ниже показан синтаксис, который можно включить через `markdown: { math: true }` и установку `markdown-it-mathjax3`.

**Markdown**

```md
When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$.
```

**Результат**

В этом проекте формулы пока не рендерятся, потому что `math` не включён в конфиге.