# Software-Enginnering-Ki-222

Проєкт для лабораторної роботи №2 з дисципліни "Інженерія програмного забезпечення".

## CI/CD Pipeline (GitHub Actions)

В репозиторії налаштовано GitHub Actions (`.github/workflows/main.yml`), який виконує наступні кроки при кожному пуші або PR в гілку `main`:
1.  **Linter**: Перевірка HTML (`htmlhint`) та CSS (`stylelint`).
2.  **Build Docker Image**: Збірка Docker-образу на основі `Dockerfile`.
3.  **Push to Registry**: Пуш образу до GitHub Container Registry (GHCR).

## Локальний запуск Docker контейнера

Для того, щоб запустити контейнер локально на основі образу з GHCR:

1.  Залогіньтесь в GHCR (використовуйте GitHub Personal Access Token з правами `read:packages`):
    ```bash
    echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
    ```

2.  Стягніть та запустіть контейнер:
    ```bash
    docker run -d -p 8080:80 ghcr.io/tsarikartem2402/software-enginnering-ki-222:main
    ```
    Після цього сайт буде доступний за адресою `http://localhost:8080`.

## Renovate Bot

Renovate Bot налаштовано за допомогою файлу `renovate.json`. Він автоматично:
- Відслідковує оновлення для npm-пакетів (`htmlhint`, `stylelint`).
- Відслідковує оновлення базового Docker-образу (`nginx:alpine`).
- Відслідковує оновлення GitHub Actions.
- Створює Pull Requests для оновлення залежностей.

Для повної активації необхідно встановити додаток [Renovate](https://github.com/apps/renovate) на ваш репозиторій.
