import { TextField, Sheet, List, ListItem, Typography } from "@mui/joy";
import { useState, useEffect } from "react";

const PasswordInput = ({ handlePassword, clearClick }) => {
    const [password, setPassword] = useState("");
    const [color, setColor] = useState("primary");
    let conditions = [];

    useEffect(() => {
        if (clearClick) setPassword("");
    }, [clearClick]);


    useEffect(() => {
        if (
            password.length > 0 &&
            (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password))
        ) {
            setColor("error");
        }
        else {
            setColor("primary");
        }
    }, [password]);

    const handleChange = (e) => {
        let newPassword = e.target.value;
        handlePassword(newPassword);
        setPassword(newPassword);
    };
    const handleCopyPaste = (e) => {
        e.preventDefault();
    };

    const lengthCondition = (
        <ListItem key={1}>
            <Typography variant="plain" fontSize={12}>
                Password must be at least 8 characters long.
            </Typography>
        </ListItem>
    );
    const numCondition = (
        <ListItem key={2}>
            <Typography variant="plain" fontSize={12}>Password must contain a number.</Typography>
        </ListItem>
    );
    const caseCondition = (
        <ListItem key={3}>
            <Typography variant="plain" fontSize={12}>
                Password must contain an uppercase letter
            </Typography>
        </ListItem>
    );
    if (password.length < 8) {
        conditions = [...conditions, lengthCondition];
    }
    if (!/\d/.test(password)) {
        conditions = [...conditions, numCondition];
    }
    if (!/[A-Z]/.test(password)) {
        conditions = [...conditions, caseCondition];
    }

    return (
        <>
            <TextField
                label="Password"
                color={color}
                value={password}
                onChange={handleChange}
                onCut={handleCopyPaste}
                onCopy={handleCopyPaste}
                onPaste={handleCopyPaste}
                type="password"
                required={true}
            />
            {password.length > 0 && (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) &&
                <Sheet variant="outlined" color="danger">
                    <List size="sm">
                        {conditions}
                    </List>
                </Sheet>
            }
        </>
    );
};

export default PasswordInput;
