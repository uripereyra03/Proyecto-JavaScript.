const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(cors());


app.get("/api/tasks", (req, res) => {
    try {
        const tasks = [
            { title: "Tarea 1", completed: false },
            { title: "Tarea 2", completed: true },
        ];
        res.json({ tasks }); 
    } catch (error) {
        console.error("Error al obtener tareas:", error);
        res.status(500).json({ error: "Error al obtener tareas" }); 
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
