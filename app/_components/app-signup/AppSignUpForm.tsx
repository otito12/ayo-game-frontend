import {
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function SignUpForm({
  setLogin,
  closeDialog,
}: {
  setLogin: Function;
  closeDialog: any;
}) {
  const [step, setStep] = useState(0);
  const theme = useTheme();
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
    >
      {step == 0 && (
        <Grid container>
          <Grid container justifyContent={"end"}>
            <IconButton
              size={"small"}
              onClick={() => closeDialog()}
              sx={{ background: "#f4f4f4 !important" }}
            >
              <CloseIcon sx={{ color: "black" }} />
            </IconButton>
          </Grid>
          <Grid container>
            <Grid container mb={4}>
              <Grid container mb={2}>
                <Typography variant="h5">Sign Up</Typography>
              </Grid>
              <Typography>
                By continuing, you agree to our User Agreement and acknowledge
                that you understand the Privacy Policy.
              </Typography>
            </Grid>
          

            <Grid container mt={2}>
              <TextField
                fullWidth
                placeholder="Your email"
                type="email"
                color="secondary"
              />
            </Grid>
            <Grid container mt={2}>
              <Typography>
                Already a have an account?{" "}
                <a
                  onClick={() => setLogin(true)}
                  style={{ color: "#4287f5", cursor: "pointer" }}
                >
                  Login
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {step == 1 && (
        <Grid container>
          <Grid container justifyContent={"start"}>
            <IconButton
              size={"small"}
              onClick={() => setStep(0)}
              sx={{ background: "#f4f4f4 !important" }}
            >
              <ArrowBackIcon sx={{ color: "black" }} />
            </IconButton>
          </Grid>
          <Grid container>
            <Grid container mt={2}>
              <Grid container>
                <Typography variant="h5">
                  Create your username and password
                </Typography>
              </Grid>
            </Grid>

            <Grid container mt={2}>
              <TextField
                fullWidth
                placeholder="Username"
                type="email"
                color="secondary"
              />
            </Grid>
            <Grid container mt={2}>
              <TextField
                fullWidth
                placeholder="Your password"
                type="password"
                color="secondary"
              />
            </Grid>
          </Grid>
        </Grid>
      )}

      {step == 0 && (
        <Grid container>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            disableElevation
            onClick={() => setStep(1)}
            sx={{
              textTransform: "none",
              height: "50px",
            }}
          >
            Continue
          </Button>
        </Grid>
      )}

      {step == 1 && (
        <Grid container>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              height: "50px",
            }}
          >
            Continue
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
