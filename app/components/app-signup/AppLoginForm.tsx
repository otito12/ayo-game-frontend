import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { signIn, useSession } from "next-auth/react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Loading from "../Loading";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";

export default function LoginForm({
  setLogin,
  closeDialog,
}: {
  setLogin: Function;
  closeDialog: any;
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value);
  };
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const handlePassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleSignin: any = async () => {
    setDisableSubmitButton(true);
    signIn("credentials", {
      username: username, // set to actual inputs
      password: password,
      redirect: true,
      callbackUrl: "/play",
    });
  };
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      p={matchesBreakpoint ? 3 : 8}
      pt={matchesBreakpoint ? 2 : 4}
      pb={matchesBreakpoint ? 2 : 6}
      maxWidth={"450px"}
      height={"100%"}
      alignContent={"space-between"}
      justifyContent={"center"}
      sx={{}}
    >
      <form
        style={{
          maxWidth: "500px",
          height: "100%",
          minWidth: "300px",
        }}
      >
        <Grid
          container
          direction={"column"}
          rowGap={4}
          justifyContent={"space-between"}
        >
          <Grid container justifyContent={"end"}>
            <IconButton
              disableRipple
              onClick={() => closeDialog()}
              sx={{ padding: 0 }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </Grid>
          <Grid container justifyContent={"center"} rowGap={2}>
            <Image
              src={Logo}
              style={{
                width: "80px",
                objectFit: "contain",
              }}
              alt="logo"
            />
          </Grid>

          <FormControl variant="outlined">
            <OutlinedInput
              placeholder="username"
              fullWidth
              color="secondary"
              value={username}
              onChange={(event) => handleUsername(event)}
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="outlined">
            <OutlinedInput
              placeholder="Password"
              fullWidth
              color="secondary"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => handlePassword(event)}
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {/* <Typography>
            New Ayo?{" "}
            <a
              onClick={() => setLogin(false)}
              style={{ color: "#4287f5", cursor: "pointer" }}
            >
              Sign Up
            </a>
          </Typography> */}

          <Button
            fullWidth
            color="secondary"
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              height: "50px",
            }}
            disabled={disableSubmitButton}
            onClick={() => handleSignin()}
          >
            {disableSubmitButton ? (
              <Loading showText={false} size={30} />
            ) : (
              <Typography fontSize={"20"} color={"primary"}>
                Login
              </Typography>
            )}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
