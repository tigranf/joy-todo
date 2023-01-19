import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"
import List from "@mui/joy/List"
import TextField from "@mui/joy/TextField"
import IconButton from "@mui/joy/IconButton"
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone"
import { useState } from "react"
import Habit from "./Habit"

let habits = ['Go for a run', 'Eat less processed food', 'Don\'t pile laundry on sofa']

const Habits = () => {
    const [trackedHabits, setTrackedHabits] = useState(habits);

    function handleHabit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const habitName = formData.get("habitName");
        setTrackedHabits([...trackedHabits, habitName]);
    }

    function handleHabitDelete(habit) {
        setTrackedHabits(trackedHabits.filter(h => JSON.stringify(h) !== JSON.stringify(habit)));
    }

    return (
        <div>
            <Sheet
                color="neutral"
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
                <Typography level="h2" color="warning">Habit Tracker</Typography>
                <List aria-label="habit-list" size="lg">
                    {trackedHabits.map((habit) => (
                        <Habit
                            key={trackedHabits.indexOf(habit)}
                            habit={habit}
                            onDeleteClick={handleHabitDelete}
                        />
                    ))}
                </List>
                <form
                    action="addHabit"
                    onSubmit={handleHabit}
                >
                    <TextField
                        size="lg"
                        variant="soft"
                        name="habitName"
                        placeholder="Enter a new habit to track"
                        type="text"
                        autoComplete="off"
                        required={true}
                        endDecorator={
                            <IconButton color="neutral" variant="outlined" type="submit">
                                <AddTwoToneIcon />
                            </IconButton>
                        }
                    />
                </form>
            </Sheet>
        </div>
    )
}

export default Habits