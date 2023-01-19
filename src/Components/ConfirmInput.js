import { TextField, Sheet, List, ListItem, Typography } from "@mui/joy";
import { useState, useEffect } from "react";

const ConfirmInput = ({ password, clearClick }) => {
    const [confirm, setConfirm] = useState("");
    const [match, setMatch] = useState(false);
    const [color, setColor] = useState("primary");

    useEffect(() => {
        if (confirm.length > 0 && confirm !== password) {
            setColor("error");
        }
        else {
            setColor("primary");
        }
    }, [confirm, password]);

    useEffect(() => {
        if (clearClick) setConfirm("");
    }, [clearClick]);

    const handleChange = (e) => {
        setConfirm(e.target.value);
        if (e.target.value === password) setMatch(true);
        else setMatch(false);
    };
    const handleCopyPaste = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <TextField
                id="confirm-input"
                label="Confirm Password"
                color={color}
                value={confirm}
                onChange={handleChange}
                onCut={handleCopyPaste}
                onCopy={handleCopyPaste}
                onPaste={handleCopyPaste}
                type="password"
                required={true}
            />
            {confirm.length > 0 && !match && (
                <Sheet variant="outlined" color="danger">
                    <List size="sm">
                        <ListItem>
                            <Typography variant="plain" fontSize={12}>Passwords must match.</Typography>
                        </ListItem>
                    </List>
                </Sheet>
            )}
        </>
    );
};

export default ConfirmInput;
