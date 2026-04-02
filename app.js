// Імпорт необхідних модулів
const express = require("express");
const mongoose = require("mongoose");

// Створення додатку Express
const app = express();
const jsonParser = express.json();


const {
    MONGO_DB_HOSTNAME, 
    MONGO_DB_PORT,     
    MONGO_DB           
} = process.env


const mongoUri = `mongodb://${MONGO_DB_HOSTNAME}:${MONGO_DB_PORT}/${MONGO_DB}`;


const mongooseOptions = {
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

// Модель користувача
const User = mongoose.model("User", userSchema);

app.use(express.static(__dirname + "/public"));

// Головна асинхронна функція для запуску сервера
async function startServer() {
    try {
        // Підключення до MongoDB через Mongoose
        await mongoose.connect(mongoUri, mongooseOptions);
        console.log(`Підключення до MongoDB за адресою: ${mongoUri} встановлено`);

        // Запуск веб-сервера Express
        app.listen(3000, () => {
            console.log("Сервер запущено на порту 3000");
        });
    } catch (err) {
        // У разі помилки виводимо повідомлення та завершуємо роботу
        console.error("Помилка підключення до MongoDB:", err.message);
        process.exit(1); 
    }
}

startServer();

// --- CRUD операції (Залишаються без змін) ---

// Отримати всіх користувачів
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: "Помилка при отриманні даних", error: err.message });
    }
});

// Отримати одного користувача за ID
app.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ message: "Користувача не знайдено" });
        res.send(user);
    } catch (err) {
        res.status(400).send({ message: "Некоректний ID користувача", error: err.message });
    }
});

// Додати нового користувача
app.post("/api/users", jsonParser, async (req, res) => {
    try {
        const { name, age } = req.body;
        if (!name || !age) return res.status(400).send({ message: "Неповні дані" });

        const user = new User({ name, age: parseInt(age) });
        const result = await user.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({ message: "Помилка при додаванні користувача", error: err.message });
    }
});

// Оновити користувача
app.put("/api/users", jsonParser, async (req, res) => {
    try {
        const { id, name, age } = req.body;
        if (!id || !name || !age) return res.status(400).send({ message: "Неповні дані" });

        const result = await User.findByIdAndUpdate(
            id,
            { name, age: parseInt(age) },
            { new: true, runValidators: true }
        );

        if (!result) return res.status(404).send({ message: "Користувача не знайдено для оновлення" });

        res.send(result);
    } catch (err) {
        res.status(500).send({ message: "Помилка при оновленні даних", error: err.message });
    }
});

// Видалити користувача
app.delete("/api/users/:id", async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);

        if (!result) return res.status(404).send({ message: "Користувача не знайдено для видалення" });

        res.send(result);
    } catch (err) {
        res.status(400).send({ message: "Некоректний ID користувача", error: err.message });
    }
});

// Коректне завершення роботи програми
process.on("SIGINT", async () => {
    await mongoose.disconnect();
    console.log("Підключення до MongoDB (Mongoose) закрито");
    process.exit(0);
});