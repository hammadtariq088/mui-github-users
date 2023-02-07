import { makeStyles } from "@material-ui/core";

// menu options
const menuOptions = [
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 1,
    name: "Users",
    url: "/users",
  },
  {
    id: 2,
    name: "Login",
    url: "/login",
  },
  { id: 3, name: "Logout", url: "/logout" },
];

// App Styling
const useStyles = makeStyles({
  headerStyle: {
    backgroundColor: "#1769aa",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  footerStyle: {
    backgroundColor: "#1769aa",
    textAlign: "center",
    padding: "10px 0px",
    color: " #fff",
  },
  logoStyle: {
    fontFamily: "Work Sans, sans-serif",
    textAlign: "left",
    fontWeight: "600",
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#000",
    },
  },
  menuStyle: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "400",
    size: "24px !important",
    marginLeft: "30px",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "#000",
    },
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  MenuDivStyle: {
    display: "flex",
  },
  heroStyle: {
    background: "black",
    height: "100px",
  },
});

export { menuOptions, useStyles };
