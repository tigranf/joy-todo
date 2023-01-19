import React, { useEffect, useState } from "react";
import { Sheet, List, ListItem, Typography, TextField } from "@mui/joy";

let unavailableNames = ["admin", "test", "moderator", "user", "tigran"];

const UsernameInput = ({ clearClick }) => {
  const [userName, setUserName] = useState("");
  const [color, setColor] = useState("primary");

  useEffect(() => {
    if (unavailableNames.some((name) => name === userName)) {
      setColor("danger");
    } else {
      setColor("primary");
    }
  }, [userName]);

  useEffect(() => {
    if (clearClick) setUserName("");
  }, [clearClick]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <TextField
        label="Username"
        color={color}
        value={userName}
        onChange={handleChange}
        type="text"
        fullWidth
        autoComplete="off"
        required={true}
      />
      {unavailableNames.some((name) => name === userName) && (
        <Sheet variant="outlined" color="danger">
          <List size="sm">
            <ListItem>
              <Typography variant="plain" fontSize={12} >
                This username is not available.
              </Typography>
            </ListItem>
          </List>
        </Sheet>
      )}
    </>
  );
};

export default UsernameInput;
