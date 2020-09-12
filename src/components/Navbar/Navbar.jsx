/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Link,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "../Icon"
import classes from "./navbar.module.css";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Navbar = () => {
    const MUIclasses = useStyles();
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar className={classes.nav}>
                <div className={classes.navParentRight}>
                    <IconButton
                        edge="start"
                        className={MUIclasses.menuButton && classes.hamburger}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.navLeft}>
                        <Link href="#" className={classes.navLinks}>
                            <Icon/>
                        </Link>
                        <Link href="#About" className={classes.navLinks}>
                            <Typography variant="h6" noWrap>
                                About
                            </Typography>
                        </Link>
                        <Link
                            href="#Organizations"
                            className={classes.navLinks}
                        >
                            <Typography variant="h6" noWrap>
                                Organizations
                            </Typography>
                        </Link>
                        <Link href="#Speakers" className={classes.navLinks}>
                            <Typography variant="h6" noWrap>
                                Speakers
                            </Typography>
                        </Link>
                        <Link href="#Team" className={classes.navLinks}>
                            <Typography variant="h6" noWrap>
                                Team
                            </Typography>
                        </Link>
                        <Link href="#FAQs" className={classes.navLinks}>
                            <Typography variant="h6" noWrap>
                                FAQs
                            </Typography>
                        </Link>
                    </div>
                </div>
                <div className={classes.navRight}>
                    <Button className={classes.navBtns}>Join Discord</Button>
                    <Button className={classes.navBtns}>Apply Now</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
