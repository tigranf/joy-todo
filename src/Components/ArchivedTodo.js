import { ListItem, Typography, Tooltip, IconButton } from "@mui/joy";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const ArchivedTodo = ({ todo, handleDelete, handleRestore }) => {
    const onDelete = async () => {
        handleDelete(todo);
    };

    const onRestore = () => {
        handleRestore(todo);
    };

    return (
        <ListItem
            key={todo.id}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography level="body1">{todo.name}</Typography>
            <Typography level="body2" sx={{ ml: "auto", pr: 2 }}>
                {todo.priority}
            </Typography>
            <Tooltip
                title="Restore"
                arrow
                placement="left"
                sx={{ zIndex: "9999!important" }}
            >
                <IconButton
                    color="success"
                    variant="plain"
                    size="sm"
                    onClick={onRestore}
                >
                    <FileUploadTwoToneIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="Delete"
                arrow
                placement="right"
                sx={{ zIndex: "9999!important" }}
            >
                <IconButton color="danger" variant="plain" size="sm" onClick={onDelete}>
                    <DeleteTwoToneIcon />
                </IconButton>
            </Tooltip>
        </ListItem>
    );
};

export default ArchivedTodo;
