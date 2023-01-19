import { useState } from "react";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { Typography, Stack, Button, Sheet, Box } from "@mui/joy";

const LoginArea = () => {
  const [password, setPassword] = useState("");
  console.log("🚀 ~ password", password);
  const [clear, setClear] = useState(false);

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleClear = () => {
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 0);
  };

  const handleAuthLogin = async (username, password) => {
    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  };

  return (
    <Sheet
      variant="soft"
      sx={{
        py: 16.1,
        px: 4,
        maxWidth: 600,
        width: "100%",
        height: "100%",
        borderRadius: 16,
      }}
    >
      <Typography variant="h4" component="div" textAlign={"center"}>
        Log In Form
      </Typography>
      <Typography textAlign={"center"} mt={0.5} mb={2} color="GrayText">
        Fill in the information below.
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAuthLogin(event.target[0].value, event.target[1].value);
        }}
      >
        <Stack spacing={2} width={"65%"} mx={"auto"}>
          <UsernameInput clearClick={clear} />
          <PasswordInput clearClick={clear} handlePassword={handlePassword} />
          <Box sx={{ display: "flex", gap: 2, flexDirection: "row-reverse" }}>
            <Button
              size="lg"
              variant="soft"
              fullWidth
              type="submit"
              color="primary"
            >
              Submit
            </Button>
            <Button
              size="lg"
              variant="soft"
              fullWidth
              type="button"
              color="danger"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Box>
        </Stack>
      </form>
    </Sheet>
  );
};

export default LoginArea;
