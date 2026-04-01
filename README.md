# Software-Engineering-KI-222
Tsarik Artem

## 📂 Об'єднаний проект (Lab 3 + Lab 4)
Весь проект тепер знаходиться в одній папці **`lab4/`**.

### 🛠️ Склад проекту:
- **Node.js + MongoDB**: Основний додаток (з Лаб 3).
- **Liquibase**: Система керування версіями бази даних (з Лаб 4).
- **Docker**: Контейнеризація всього стеку.
- **k6**: Тести навантаження.

### 🚀 Як працювати з проектом:
1. Перейдіть до папки проекту: `cd lab4/`
2. Для роботи з Liquibase:
   - `liquibase status` — перевірка стану.
   - `liquibase update` — застосування змін до БД.
   - `liquibase rollback --tag=version1` — відкат змін.

3. Для запуску додатку в Docker:
   - `docker-compose up --build`

### ⚠️ Виправлення помилки "Invalid license key"
Якщо у вас встановлена версія "Liquibase Secure", вона вимагатиме платний ключ. Щоб використовувати безкоштовну версію, виконайте ці команди у вашому терміналі (MINGW64):

1. **Завантажити та розпакувати Community версію:**
   ```bash
   curl -L https://github.com/liquibase/liquibase/releases/download/v4.27.0/liquibase-4.27.0.zip -o liquibase.zip && unzip -o liquibase.zip -d ./liquibase_bin && rm liquibase.zip
   ```

2. **Використовуйте локальний запуск замість глобального:**
   - Перевірка: `./liquibase_bin/liquibase status`
   - Оновлення: `./liquibase_bin/liquibase update`
   - Відкат: `./liquibase_bin/liquibase rollback --tag=version1`
