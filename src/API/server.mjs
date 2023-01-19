import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 5000;

app.use(
  session({
    secret: "a really super duper long secret key for this session",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

const adapter = new JSONFile("database.json");
const db = new Low(adapter);
await db.read();
db.data ||= { todos: [], users: [] };

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(async function verify(username, password, callback) {
    const user = db.data.users.find((user) => {
      return user.username === username;
    });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return callback(null, false, {
          message: "Incorrect username or password.",
        });
      }
      return callback(null, user);
    } else return callback(null, false, { message: "User does not exist." });
  })
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    const theUser = db.data.users.find((data) => data.id === user.id);
    return cb(null, theUser);
  });
});

app.listen(port, () => {
  console.log(`Express.js server listening on port ${port}`);
});

app.get("/api/todos", async (req, res) => {
  await db.read();
  res.json(db.data.todos);
});

app.post("/api/todos/add", async (req, res) => {
  await db.read();
  let { id, name, priority, status } = req.query;
  db.data.todos.push({
    id: id,
    name: name,
    priority: priority,
    status: status,
  });
  await db.write();
  res.json({
    status: "success",
    todos: db.data.todos,
  });
});

app.post("/api/todos/remove/:id", async (req, res) => {
  await db.read();
  db.data.todos = db.data.todos.filter((todo) => todo.id !== req.params.id);
  await db.write();
  res.json({
    status: "success",
    todos: db.data.todos,
  });
});

app.post("/api/todos/complete/:id", async (req, res) => {
  await db.read();
  db.data.todos = db.data.todos.map((todo) => {
    if (todo.id !== req.params.id) return todo;
    else
      return {
        id: todo.id,
        name: todo.name,
        priority: todo.priority,
        status: "archived",
      };
  });
  await db.write();
  res.json({
    status: "success",
    todos: db.data.todos,
  });
});

app.post("/api/todos/edit/:id", async (req, res) => {
  await db.read();
  db.data.todos = db.data.todos.map((todo) => {
    if (todo.id !== req.params.id) return todo;
    else
      return {
        id: req.params.id,
        name: req.query.name,
        priority: req.query.priority,
        status: req.query.status,
      };
  });
  await db.write();

  res.json({
    status: "success",
    todos: db.data.todos,
  });
});

app.post("/api/auth/register", async (req, res) => {
  console.log(req.session);
  console.log(req.body);
  await db.read();
  let { username, password, email } = req.body;
  let hashedPass = await bcrypt.hash(password, 10);
  db.data.users.push({
    id: db.data.users.length > 0 ? parseInt(db.data.users[db.data.users.length - 1].id) + 1 : 1,
    username: username,
    email: email,
    password: hashedPass,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  await db.write();
  res.json({
    message: 'User registered successfully!',
    users: db.users
  });
  console.log('User registered successfully!');
});
app.post(
  "/api/auth/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    failureMessage: "Authentication failed. Please try again.",
    successRedirect: "/app"
  }),
  (req, res) => {
    console.log(req.session);
    console.log(req.body);
  }
);
