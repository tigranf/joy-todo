import { useState } from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import Radio from "@mui/joy/Radio";
import Button from "@mui/joy/Button";
import Tooltip from "@mui/joy/Tooltip";
import ListItem from "@mui/joy/ListItem";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import RadioGroup from "@mui/joy/RadioGroup";
import ModalDialog from "@mui/joy/ModalDialog";
import ModeTwoToneIcon from "@mui/icons-material/ModeTwoTone";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

const Todo = ({ todo, priority, todoObj, onCompleteClick, onEditClick }) => {
    const [open, setOpen] = useState(false);
    const [todoName, setTodoName] = useState(todo);
    const [todoPriority, setTodoPriority] = useState(priority);

    function handleCompleteClick() {
        onCompleteClick(todoObj);
    }

    function handleEditClick(event) {
        event.preventDefault();
        setOpen(false);
        onEditClick(todoObj.id, todoName, todoPriority, "active");
    }

    return (
        <ListItem
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography level="body1">{todo}</Typography>
            <Typography level="body2" sx={{ ml: "auto", pr: 2 }}>
                {priority}
            </Typography>
            <Tooltip
                title="Complete"
                arrow
                placement="left"
                sx={{ zIndex: "9999!important" }}
            >
                <IconButton
                    color="success"
                    variant="plain"
                    size="sm"
                    onClick={handleCompleteClick}
                >
                    <DoneOutlineTwoToneIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="Edit"
                arrow
                placement="right"
                sx={{ zIndex: "9999!important" }}
            >
                <IconButton
                    color="warning"
                    variant="plain"
                    size="sm"
                    onClick={(_) => setOpen(true)}
                >
                    <ModeTwoToneIcon />
                </IconButton>
            </Tooltip>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                disableAutoFocus
                disableEnforceFocus
            >
                <ModalDialog
                    sx={{
                        maxWidth: 540,
                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                    }}
                >
                    <Typography
                        id="basic-modal-dialog-title"
                        component="h2"
                        level="inherit"
                        fontSize="1.25em"
                        mb="0.25em"
                    >
                        Edit Todo
                    </Typography>
                    <Typography
                        id="basic-modal-dialog-description"
                        mt={0.5}
                        mb={2}
                        textColor="text.tertiary"
                    >
                        Change the information below and hit Submit.
                    </Typography>
                    <form onSubmit={handleEditClick}>
                        <Stack spacing={2}>
                            <Box>
                                <RadioGroup
                                    overlay
                                    value={todoPriority}
                                    onChange={(event) => setTodoPriority(event.target.value)}
                                >
                                    <List
                                        component="div"
                                        variant="plain"
                                        color="primary"
                                        row
                                        sx={{
                                            borderRadius: "sm",
                                            boxShadow: "sm",
                                            bgcolor: "background.body",
                                        }}
                                    >
                                        {["Low Priority", "Medium Priority", "High Priority"].map(
                                            (value, index) => (
                                                <div key={index}>
                                                    <ListItem>
                                                        <Radio id={value} value={value} label={value} />
                                                    </ListItem>
                                                </div>
                                            )
                                        )}
                                    </List>
                                </RadioGroup>
                            </Box>
                            <TextField
                                size="lg"
                                variant="soft"
                                color="neutral"
                                name="todoName"
                                placeholder="Enter a new task"
                                type="text"
                                autoComplete="off"
                                autoFocus
                                value={todoName}
                                required={true}
                                onChange={(e) => {
                                    setTodoName(e.target.value);
                                }}
                            />
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </ListItem>
    );
};

export default Todo;
