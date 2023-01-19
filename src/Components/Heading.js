import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import ModeToggle from "./ModeToggle";
import PlaylistAddTwoToneIcon from '@mui/icons-material/PlaylistAddTwoTone';

const Heading = () => {
    return (
        <div>
            <Sheet
                sx={{
                    width: "100%",
                    maxWidth: "720px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    px: 2,
                    my: 2,
                    mx: "auto",
                    borderRadius: 20,
                }}
            >
                <Typography level="h1" component="h2">
                    <PlaylistAddTwoToneIcon/>ReacToDo
                </Typography>
                <ModeToggle />
            </Sheet>
        </div>
    );
};

export default Heading;
