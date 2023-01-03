import { useColorScheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';

const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <IconButton
            variant="plain"
            color="info"
            onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
            }}
        >
            {mode === "light" ? <NightlightTwoToneIcon /> : <WbSunnyTwoToneIcon />}
        </IconButton>
    )
}

export default ModeToggle