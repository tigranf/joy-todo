import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import Autocomplete from "@mui/joy/Autocomplete";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import Todo from "./Todo";
import { useState } from "react";
import Typography from "@mui/joy/Typography";
// import _ from 'lodash';

let todos = [
    ["Vacuum apartment", "Medium Priority"],
    ["Clean dishes", "Medium Priority"],
    ["Feed cat", "Low Priority"],
    ["Dust TV area", "Low Priority"],
    ["Sweep balcony", "High Priority"],
    ["Buy groceries", "High Priority"],
];

const Todos = () => {
    const [trackedTodos, setTrackedTodos] = useState(todos);
    // const [trackedTodos, setTrackedTodos] = useState([]);

    const handleTodo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const todoName = formData.get("todoName");
        const todoPriority = formData.get("todoPriority");
        setTrackedTodos([...trackedTodos, [todoName, todoPriority]]);
    };

    const handleCompleteClick = (todo) => {
        // setTrackedTodos(trackedTodos.filter((t) => !_.isEqual(t,todo)));
        setTrackedTodos(trackedTodos.filter((t) => JSON.stringify(t) !== JSON.stringify(todo)));
    };

    return (
        <div>
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
                <Typography level="h3" sx={{ textAlign: 'center' }}>ToDo List</Typography>
                <List aria-label="todo-list" size="lg">
                    {trackedTodos.map((todo) => (
                        <Todo
                            key={trackedTodos.indexOf(todo)}
                            todo={todo[0]}
                            priority={todo[1]}
                            onCompleteClick={handleCompleteClick}
                        />
                    ))}
                </List>
                <form action="addTodo" onSubmit={handleTodo}>
                    <TextField
                        size="lg"
                        variant="soft"
                        color="primary"
                        name="todoName"
                        label="Add ToDo"
                        placeholder="Enter a new task"
                        type="text"
                        autoComplete="off"
                        required={true}
                        startDecorator={
                            <Autocomplete
                                name="todoPriority"
                                placeholder="Priority"
                                options={["High Priority", "Medium Priority", "Low Priority"]}
                                disableCloseOnSelect
                                selectOnFocus
                                autoHighlight
                                openOnFocus
                                sx={{ width: 166 }}
                            />
                        }
                        endDecorator={
                            <IconButton color="neutral" variant="outlined" type="submit">
                                <AddTwoToneIcon />
                            </IconButton>
                        }
                    />
                </form>
            </Sheet>
        </div>
    );
};

export default Todos;
