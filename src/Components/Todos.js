import Todo from "./Todo";
import { useState, useEffect } from "react";
import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Autocomplete from "@mui/joy/Autocomplete";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Todos = () => {
    const [todo, setTodo] = useState("");
    const [priority, setPriority] = useState(null);
    const [trackedTodos, setTrackedTodos] = useState([]);
    const [addErr, setAddErr] = useState(false);

    useEffect(() => {
        fetch("/api/todos")
            .then((res) => res.json())
            .then((todos) => {
                setTrackedTodos(todos);
            });
    }, []);

    const handleTodo = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const todoName = formData.get("todoName");
        const todoPriority = formData.get("todoPriority");
        const todoExists = trackedTodos.some(
            (t) => t.name.toLowerCase() === todoName.toLowerCase()
        );
        if (todoExists) {
            setAddErr(true);
            setTimeout((_) => {
                setAddErr(false);
            }, 3210);
            return;
        }

        let res = await fetch(
            `/api/todos/add?id=${parseInt(trackedTodos[trackedTodos.length - 1].id) + 1
            }&name=${todoName}&priority=${todoPriority}`,
            { method: "POST" }
        );
        let newTodos = await res.json();
        setTrackedTodos(newTodos.todos);
        setTodo("");
        setPriority(null);
    };

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriority(event.target.innerText);
    };

    const handleCompleteClick = async (todo) => {
        let res = await fetch(`/api/todos/remove/${todo.id}`, { method: "POST" });
        let todoData = await res.json();
        setTrackedTodos(todoData.todos);
    };

    const handleEditClick = async (id, editedTodo, editedPriority) => {
        const todoExists = trackedTodos.some(
            (t) =>
                t.name.toLowerCase() === editedTodo.toLowerCase() &&
                t.priority === editedPriority
        );
        if (todoExists) {
            setAddErr(true);
            setTimeout((_) => {
                setAddErr(false);
            }, 3210);
            return;
        }

        let res = await fetch(
            `/api/todos/edit/${id}?name=${editedTodo}&priority=${editedPriority}`,
            { method: "POST" }
        );
        let todoData = await res.json();
        setTrackedTodos(todoData.todos);
    };

    return (
        <>
            <Sheet
                color="primary"
                variant="soft"
                sx={{
                    maxWidth: "720px",
                    p: 2,
                    my: 1,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    borderRadius: 16,
                }}
            >
                <Typography level="h3" sx={{ textAlign: "center" }}>
                    ToDo List
                </Typography>
                <List aria-label="todo-list" size="lg">
                    {trackedTodos.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo.name}
                            priority={todo.priority}
                            todoObj={todo}
                            onCompleteClick={handleCompleteClick}
                            onEditClick={handleEditClick}
                        />
                    ))}
                </List>
                <form
                    onSubmit={handleTodo}
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                    <TextField
                        size="lg"
                        variant="soft"
                        color="primary"
                        name="todoName"
                        placeholder="Enter a new task"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={todo}
                        required={true}
                        onChange={handleTodoChange}
                        sx={{ flexGrow: 1 }}
                        endDecorator={
                            <Autocomplete
                                name="todoPriority"
                                placeholder="Priority"
                                color="primary"
                                options={["High Priority", "Medium Priority", "Low Priority"]}
                                disableCloseOnSelect
                                selectOnFocus
                                autoHighlight
                                openOnFocus
                                value={priority}
                                onChange={handlePriorityChange}
                                required={true}
                                sx={{ width: 200 }}
                            />
                        }
                    />
                    <IconButton color="primary" variant="outlined" type="submit">
                        <AddTwoToneIcon />
                    </IconButton>
                </form>
                {addErr && (
                    <Alert
                        sx={{ alignItems: "flex-start" }}
                        startDecorator={<InfoIcon />}
                        variant="soft"
                        color="warning"
                        endDecorator={
                            <IconButton
                                variant="soft"
                                size="sm"
                                color="warning"
                                onClick={() => setAddErr(false)}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        }
                    >
                        <div>
                            <Typography fontWeight="lg" mt={0.25}>
                                Uh, oh!
                            </Typography>
                            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                                A todo with the same details already exists.
                            </Typography>
                        </div>
                    </Alert>
                )}
            </Sheet>
        </>
    );
};

export default Todos;
