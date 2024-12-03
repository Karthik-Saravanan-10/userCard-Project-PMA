import * as React from "react";
import Button from "@mui/material/Button";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import Stack from "@mui/material/Stack";

import "./header.css";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Stack direction="row" spacing={2}>
            <NavLink to="/">
              <Button
                variant="outlined"
                sx={{ color: "white" }}
                startIcon={<ViewCarouselOutlinedIcon />}
              >
                View Cards
              </Button>
            </NavLink>
            <NavLink to="/form">
              <Button
                variant="contained"
                startIcon={<PersonAddAltOutlinedIcon />}
              >
                Add
              </Button>
            </NavLink>
          </Stack>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
