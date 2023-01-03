import IconButton from "@mui/joy/IconButton";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';

const Todo = ({ todo, priority, onCompleteClick }) => {

    function handleCompleteClick() {
        onCompleteClick([todo, priority]);
    }

    return (
        <ListItem sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

        }}>
            <Typography level="body1">{todo}</Typography>
            <Typography level="body2" sx={{ ml: 'auto', pr: 2 }}>{priority}</Typography>
            <IconButton color="success" variant="plain" size="lg" onClick={handleCompleteClick}><DoneOutlineTwoToneIcon /></IconButton>
        </ListItem>
    );
};

export default Todo;
