import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { menuOptions, useStyles } from "../utils";

const Header = () => {
  const [menu, setMenu] = useState(menuOptions);
  const { headerStyle, logoStyle, menuStyle, toolbarStyle, MenuDivStyle } =
    useStyles();
  return (
    <>
      <AppBar className={headerStyle}>
        <Toolbar className={toolbarStyle}>
          <Typography variant="h6" component="h1">
            <Link to="/" className={logoStyle}>
              Github Users
            </Link>
          </Typography>
          <div className={MenuDivStyle}>
            {menu.map((menu) => {
              const { id, name, url } = menu;
              return (
                <Typography key={id}>
                  <Link to={url} className={menuStyle}>
                    {name}
                  </Link>
                </Typography>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
