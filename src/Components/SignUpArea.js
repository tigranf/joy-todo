import { useState } from "react";
import ConfirmInput from "./ConfirmInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { Typography, Stack, Button, Sheet, Box } from "@mui/joy";

const SignUpArea = () => {
  const [password, setPassword] = useState("");
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

  const handleAuthRegister = async (username, password, email) => {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      }),
    });
  };

  return (
    <Sheet
      variant="soft"
      sx={{
        py: 6,
        px: 4,
        maxWidth: 600,
        width: "100%",
        borderRadius: 16,
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        Sign Up Form
      </Typography>
      <Typography textAlign={"center"} mt={0.5} mb={2} color="GrayText">
        Fill in the information below.
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.dir(event.target);
          handleAuthRegister(
            event.target[0].value,
            event.target[1].value,
            event.target[3].value
          );
        }}
      >
        <Stack spacing={2} width={"65%"} mx={"auto"}>
          <UsernameInput clearClick={clear} />
          <PasswordInput clearClick={clear} handlePassword={handlePassword} />
          <ConfirmInput clearClick={clear} password={password} />
          <EmailInput clearClick={clear} />
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

export default SignUpArea;
