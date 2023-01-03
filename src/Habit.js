import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import { useState } from "react";
import Sheet from "@mui/joy/Sheet";

const Habit = ({ habit, onDeleteClick }) => {
    const [tally, setTally] = useState(0);

    function handleUpHabit() {
        setTally(tally + 1);
    }
    function handleDownHabit() {
        setTally(tally - 1);
    }

    function handleDeleteClick() {
        onDeleteClick(habit);
        console.log("deleting habit:", habit);
    }

    return (
        <div>
            <ListItem
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <IconButton variant="plain" color="danger" size="lg" onClick={handleDeleteClick}>
                    <ClearTwoToneIcon />
                </IconButton>
                <Typography level="body1" sx={{ px: 1 }}>
                    {habit}
                </Typography>
                <Sheet
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        background: "none",
                        ml: "auto",
                    }}
                >
                    <IconButton
                        color="warning"
                        variant="plain"
                        size="sm"
                        onClick={handleDownHabit}
                    >
                        <ArrowBackIosNewTwoToneIcon />
                    </IconButton>
                    <Typography level="h5" sx={{ mx: 1 }}>
                        {tally}
                    </Typography>
                    <IconButton
                        color="success"
                        variant="plain"
                        size="sm"
                        onClick={handleUpHabit}
                    >
                        <ArrowForwardIosTwoToneIcon />
                    </IconButton>
                </Sheet>
            </ListItem>
        </div>
    );
};

export default Habit;
