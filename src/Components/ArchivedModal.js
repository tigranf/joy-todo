import {
    IconButton,
    Typography,
    Modal,
    ModalDialog,
    List,
    Tooltip,
} from "@mui/joy";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { useState } from "react";
import { Transition } from "react-transition-group";
import ArchivedTodos from "./ArchivedTodos";

const ArchivedModal = ({ handleDelete, handleRestore, todos }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Completed ToDos" arrow placement="left">
                <IconButton variant="plain" color="info" onClick={() => setOpen(true)}>
                    <VisibilityTwoToneIcon />
                </IconButton>
            </Tooltip>
            <Transition in={open} timeout={500}>
                {(state) => (
                    <Modal
                        keepMounted
                        open={!["exited", "exiting"].includes(state)}
                        onClose={() => setOpen(false)}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: "none",
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: "blur(8px)" },
                                        entered: { opacity: 1, backdropFilter: "blur(8px)" },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === "exited" ? "hidden" : "visible",
                        }}
                    >
                        <ModalDialog
                            variant="soft"
                            size="lg"
                            sx={{
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                                minWidth: 410,
                                width: "75%",
                                maxWidth: 750,
                            }}
                        >
                            <Typography
                                component="h2"
                                level="inherit"
                                fontSize="1.5em"
                                mb="0.25em"
                                color="info"
                            >
                                Completed ToDos
                            </Typography>
                            <List>
                                <ArchivedTodos
                                    todos={todos}
                                    handleDelete={handleDelete}
                                    handleRestore={handleRestore}
                                />
                            </List>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
        </>
    );
};

export default ArchivedModal;
