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
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>

        {/* Main section */}
        <Outlet />
      </Box>
    </>
  );
};

export default AdminMain;
