import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
  CssBaseline,
  styled,
} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import theme from "../../styles/theme";

const drawerWidth = 240;
// Update navItems to include IDs for scrolling
export const navItems = [
  { label: "Home", id: "home" },
  // { label: "Industries", id: "industries" },
  { label: "Services", id: "services" },
  // { label: "Careers", id: "careers" },
  { label: "About Us", id: "about" },
  // { label: "Contact Us", id: "contact" },
];

const StyledAppBar = styled(MuiAppBar)`
  box-shadow: none;
  position: fixed;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 10.5%, rgba(255, 255, 255, 0.9) 98.5%);
  transition: background 0.3s ease-in-out;
`;


const AppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollTo = (id:string) => {
    window.location.hash = '';
    window.location.hash = id;
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        flex: 1,
      }}
    >
      <IconButton
        edge="start"
        color="default"
        aria-label="Kovalty Technologies"
      >
        <a href="#home">
          <Box
            component="img"
            src="/assets/kovalty-icon.svg"
            alt="Kovalty Technologies"
            sx={{
              height: "40px",
              width: "auto",
            }}
          />
        </a>
      </IconButton>
      <Divider variant="middle" />
      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleScrollTo(id)}>
              <ListItemText
                primary={label}
                style={{
                  color: theme.palette.text.secondary,
                  fontWeight: "700",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <StyledAppBar position="fixed" color="default" style={{boxShadow:'none'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Box sx={{ ml: 2, display: { xs: "block", sm: "none" } }}>
            <a href="#home">
              <Box
                component="img"
                src="/assets/kovalty-icon.svg"
                alt="Kovalty Technologies"
                style={{ height: "80px",
                  width: "160px", }}
              />
            </a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <a href="#home">
              <img
                src="/assets/kovalty-icon.svg"
                alt="Kovalty Technologies"
                style={{ height: "100px",
                  width: "220px", }}
              />
            </a>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ label, id }) => (
              <Button
                key={id}
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: "700",
                  textTransform: "none",
                  fontSize:"18px",
                }}
                onClick={() => handleScrollTo(id)}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            backgroundColor: theme.palette.background.default,
          }}
          style={{
            backgroundColor: theme.palette.background.default,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default AppBar;
