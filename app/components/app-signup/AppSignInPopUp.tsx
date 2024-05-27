import * as React from "react";
import Dialog from "@mui/material/Dialog";
import useTheme from "@mui/material/styles/useTheme";
import LoginForm from "./AppLoginForm";
import { useEffect, useState } from "react";
import SignUpForm from "./AppSignUpForm";
import { useMediaQuery } from "@mui/material";

export default function SignInPopUp({
  onClose,
  open,
}: {
  onClose: any;
  open: boolean;
}) {
  const [login, setLogin] = useState(true);
  const closeDialog = () => {
    onClose();
    setTimeout(() => setLogin(true), 500);
  };

  return (
    <Dialog
      sx={{
        ".MuiPaper-root": {
          borderRadius: "8px",
          height: "600px",
          background: "#262522",
        },
      }}
      onClose={closeDialog}
      open={open}
    >
      {login ? (
        <LoginForm setLogin={setLogin} closeDialog={closeDialog} />
      ) : (
        <SignUpForm setLogin={setLogin} closeDialog={closeDialog} />
      )}
    </Dialog>
  );
}
