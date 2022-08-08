import { AppBar, Divider, List, Toolbar, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { mainListItems, secondaryListItems } from "./List";

const AdminMain = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>Dashboard</Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <List
          component="nav"
          sx={{
            flex: "none",
            width: 250,
            py: "20px",
            height: "calc(100vh - 64px)",
          }}
        >
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
        <Divider sx={{ mx: 1 }} orientation="vertical" flexItem />

        {/* Main section */}
        <Outlet />
      </Box>
    </>
  );
};

export default AdminMain;
