# Software-Engineering-KI-222
Tsarik Artem

## 📂 Структура репозиторію
- **lab3/**: Робота з MongoDB, Node.js та Docker (App: mongoapp).
- **lab4/** (Інтегровано в `lab3/mongoapp/`): Контроль версій БД за допомогою **Liquibase**.

### 🛠️ Лабораторна робота №4 (Liquibase)
Ця гілка `lab4-full` поєднує код 3-ї та 4-ї лабораторних робіт.
Файли конфігурації:
- `lab3/mongoapp/liquibase.properties` — параметри БД.
- `lab3/mongoapp/db/changelog/changelog.xml` — журнал змін БД.

#### Команди для запуску:
1. Перейдіть до папки: `cd lab3/mongoapp/`.
2. Перевірте статус: `liquibase status`.
3. Застосуйте зміни: `liquibase update`.
4. Відкат до версії 1: `liquibase rollback --tag=version1`.
