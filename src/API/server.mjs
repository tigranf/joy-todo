import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const app = express();
app.use(express.json())
const port = 5000;

const adapter = new JSONFile("database.json");
const db = new Low(adapter);
await db.read();
if(!db.data) db.data = { todos: [] }

app.listen(port, () => {
    console.log(`Express.js server listening on port ${port}`);
});

app.get("/api/", (req, res) => {
    res.json({
        message: "Hello from the express.js server!",
    });
});

app.get("/api/todos", (req, res) => {
    res.json(db.data.todos);
});

app.post("/api/todos/add", async (req, res) => {
    let { id, name, priority } = req.query;
    db.data.todos.push({ id: id, name: name, priority: priority})
    await db.write();
    res.json({
        "status": "success",
        "todos": db.data.todos
    })
});

app.post("/api/todos/remove/:id", async (req, res) => {
    db.data.todos = db.data.todos.filter(todo => todo.id !== req.params.id);
    await db.write();
    res.json({
        "status": "success",
        "todos": db.data.todos
    })
});

app.post("/api/todos/edit/:id", async (req, res) => {
    db.data.todos = db.data.todos.map(todo => {
        if (todo.id !== req.params.id) return todo;
        else return {
            id: req.params.id,
            name: req.query.name,
            priority: req.query.priority
        }
    });
    await db.write()
    
    res.json({
        "status": "success",
        "todos": db.data.todos
    });
});
