import {
  Button,
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Logo from "@/public/ayo-logo.svg";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SignInPopUp from "../app-signup/AppSignInPopUp";
import { getSession, signOut } from "next-auth/react";
import { AccountCircle, Logout } from "@mui/icons-material";

export default function AppHeader() {
  const theme = useTheme();
  const router = useRouter();
  const path = usePathname();

  const [userSession, setUserSession] = useState<any>(null);

  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  async function getUserSession() {
    const session = (await getSession()) as any;
    if (!session) {
      setUserSession({});
      return;
    }
    setUserSession(session);
  }
  useEffect(() => {
    getUserSession();
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(path);
  useEffect(() => {
    setSelectedIndex(path);
  }, [path]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setDrawerOpen((prevState) => !prevState);
  };
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  const [scroll, setScroll] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const userMenuOpen = Boolean(anchorEl);
  const handleUserMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [user, setUser] = useState<any>({
    first_name: "Bosmos",
    last_name: "User",
  });
  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      pl={1}
      pr={1}
      sx={{
        background: theme.palette.background.paper,
        height: "60px",
        position: "fixed",
        zIndex: 100,
      }}
      alignContent={"center"}
    >
      <Button disableRipple sx={{ p: 0 }} onClick={() => router.push("/")}>
        <Image
          src={Logo}
          style={{
            paddingLeft: "2px",
            width: "60px",
            objectFit: "contain",
          }}
          alt="ass"
        />
      </Button>

      <Grid
        container
        flex={1}
        justifyContent={"end"}
        alignItems={"center"}
        columnGap={2}
      >
        {!userSession ? (
          <></>
        ) : Object.keys(userSession).length === 0 ? (
          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
            onClick={() => handleLoginOpen()}
          >
            <Typography color={"secondary.contrastText"}>Login</Typography>
          </Button>
        ) : (
          <Button
            id="basic-button"
            aria-controls={userMenuOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={userMenuOpen ? "true" : undefined}
            onClick={(event) => handleUserMenuClick(event)}
            sx={{
              ml: 1,
              borderRadius: "8px",
              border: `1px solid ${theme.palette.primary.main}`,
              pl: 2,
              pr: 2,
              display: matchesBreakpoint ? "none" : "block",
              height: "40px",
              textTransform: "none",
              background: "#00000000 !important",
              color: `${theme.palette.primary.main} !important`,
              ":hover": {
                background: "#FFFFFF10 !important",
              },
            }}
          >
            <Grid container alignItems={"center"}>
              {user && (
                <Typography sx={{ mr: 1.5 }}>
                  {userSession.user?.user}
                </Typography>
              )}
              <AccountCircle sx={{ color: theme.palette.secondary.main }} />
            </Grid>
          </Button>
        )}

        <SignInPopUp onClose={handleLoginClose} open={openLogin} />

        <Grid container>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={userMenuOpen}
            onClose={handleUserMenuClose}
            sx={{
              mt: 1,
              width: "300px !important",
              display: "flex",
              ".MuiButtonBase-root": {
                height: "45px",
                borderRadius: "5px",
              },
              "& .MuiPaper-root": {
                minWidth: 180,
                p: 1,
                pt: 0,
                pb: 0,
              },
              ".MuiSvgIcon-root": {
                color: theme.palette.secondary.main,
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleUserMenuClose();
              }}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              Profile
            </MenuItem>

            <MenuItem onClick={() => signOut()}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
}
