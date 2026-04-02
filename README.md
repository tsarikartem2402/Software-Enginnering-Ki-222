# Software-Engineering-KI-222
Tsarik Artem

## Лабораторна робота №3 + №4 (Об'єднаний проект)

### Склад проекту:
- **Node.js + MongoDB**: Основний додаток.
- **Liquibase**: Керування версіями БД (налаштовано для MongoDB).
- **Docker**: Контейнеризація (Dockerfile, docker-compose.yaml).
- **k6**: Тести навантаження (папка k6/).

### Як працювати з проектом:
1. Для роботи з Liquibase:
   - liquibase status - перевірка стану.
   - liquibase update - завантаження 10 користувачів у MongoDB.
   - liquibase rollback --tag=version1 - відкат змін.

2. Для запуску додатку в Docker:
   - docker-compose up --build
