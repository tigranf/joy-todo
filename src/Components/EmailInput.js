import { TextField, Sheet, List, ListItem, Typography } from "@mui/joy";
import { useState, useEffect } from "react";

const EmailInput = ({ clearClick }) => {
    const [email, setEmail] = useState("");
    const [match, setMatch] = useState(false);
    const [color, setColor] = useState("primary");

    useEffect(() => {
        if (clearClick) setEmail("");
    }, [clearClick]);

    useEffect(() => {
        if (
            email.length > 0 &&
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(
                email
            )
        ) {
            setColor("danger");
        }
        else {
            setColor("primary");
        }
    }, [email]);

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(
                e.target.value
            )
        ) setMatch(true);
        else setMatch(false);
    };

    return (
        <>
            <TextField
                id="email-input"
                label="Email"
                color={color}
                value={email}
                onChange={handleChange}
                type="email"
                required={true}
            />
            {email.length > 0 && !match && (
                <Sheet variant="outlined" color="danger">
                    <List size="sm">
                        <ListItem>
                            <Typography variant="plain" fontSize={12}>Email is invalid.</Typography>
                        </ListItem>
                    </List>
                </Sheet>
            )}
        </>
    );
};

export default EmailInput;
