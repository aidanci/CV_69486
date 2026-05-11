// Numer indeksu: 69486

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/api/contact", function (req, res) {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Wszystkie pola są wymagane."
        });
    }

    const newMessage = {
        firstName,
        lastName,
        email,
        message,
        date: new Date().toISOString()
    };

    const filePath = path.join(__dirname, "messages.json");

    fs.readFile(filePath, "utf8", function (err, data) {
        let messages = [];

        if (!err && data) {
            messages = JSON.parse(data);
        }

        messages.push(newMessage);

        fs.writeFile(filePath, JSON.stringify(messages, null, 2), function (writeErr) {
            if (writeErr) {
                return res.status(500).json({
                    success: false,
                    message: "Błąd zapisu danych."
                });
            }

            res.json({
                success: true,
                message: "Dane zostały zapisane na serwerze."
            });
        });
    });
});

app.listen(PORT, function () {
    console.log(`Serwer działa: http://localhost:${PORT}`);
});