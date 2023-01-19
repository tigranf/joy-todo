import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import { Tooltip } from "@mui/joy";

const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <Tooltip title={mode === "light" ? "Dark Mode" : "Light Mode"} arrow placement="right">
            <IconButton
                variant="plain"
                color="info"
                onClick={() => {
                    setMode(mode === "light" ? "dark" : "light");
                }}
            >
                {mode === "light" ? <NightlightTwoToneIcon /> : <WbSunnyTwoToneIcon />}
            </IconButton>
        </Tooltip>
    )
}

export default ModeToggle