# Вклад в репозиторий

Запрет прямых push в ветку `main` включается **только на GitHub** — в коде проекта этого не задаёшь.

## Rulesets

1. Репозиторий → **Settings** → **Rules** → **Rulesets** → создать ruleset для ветки **`main`**.
2. Рекомендуется включить: требование **pull request** перед слиянием в `main`, запрет необоснованных push (как описано в UI), запрет удаления защищённой ветки (`Restrict deletions`).

Подробнее: [About rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets).

## Branch protection (классика)

Репозиторий → **Settings** → **Branches** → **Add branch protection rule** для `main`:

- **Require a pull request before merging**
- По необходимости: **Restrict who can push**, **Do not allow bypassing**
- Отключить **Allow force pushes** для `main`

Подробнее: [About protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## PageCMS и прочее

Ставь правила так, чтобы **ни редакторы через PageCMS, ни локальный `git push`** без PR не могли перезаписывать `main`. У PageCMS активной должна быть **рабочая ветка** (не `main`), а вливание — через merge PR.
