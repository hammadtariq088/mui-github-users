import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useStyles } from "../utils";

const Footer = () => {
  const { footerStyle, logoStyle } = useStyles();
  return (
    <Box className={footerStyle}>
      <Typography>
        Copyright 2023
        <Link to="/" className={logoStyle}>
          &nbsp;Github Users&nbsp;
        </Link>
        - All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
