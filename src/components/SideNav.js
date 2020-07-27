import React, {useState} from 'react';
import {Grid, Typography, Icon, Link} from "@material-ui/core";
import logo from "../Images/seu-logo.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DashboardIcon from '@material-ui/icons/Dashboard';
import "../css/sideNav.css"
import student from "../Images/s1.svg"
import classes from "../Images/classes.svg"
import assignment from "../Images/assignment.svg"
import attendance from "../Images/attendance.svg"

const SideNav = (props) => {
    const [arrowActive, setArrowActive] = useState(false)
    return (
        <Typography component="div" className={arrowActive ? "wrapper active " : "wrapper"}>
            <Grid container>
                <Typography component="div" align="left" className="sidebar_menu">
                    <Typography align={"left"} component={"div"} className={"main-logo"}>
                        <img src={logo} alt=""/>
                    </Typography>
                    <span className="hr1"> </span>
                    <div className="hamburger" onClick={() => {
                        arrowActive ? setArrowActive(false) : setArrowActive(true)
                    }}>
                        <div className="inner_hamburger">
                            <span className="arrow">
                                <ArrowBackIcon className="backArrow" style={{display: "none"}}/>
                                <ArrowForwardIcon className="forwardArrow" />
                            </span>
                        </div>
                    </div>

                    <Typography component="div" className="sidebar_menu_content">
                        <ul>
                            <li>
                                <Link href="#" className="active" underline={"none"}>
                                <span className="icon">
                                    <Icon component={DashboardIcon}> </Icon>
                                </span>
                                    <span className="list">Dashboard</span>
                                </Link>

                            </li>
                            <li>
                                <Link href="#" underline={"none"}>
                                <span className="icon">
                                   <Icon> <img src={student} alt="Student icon"/> </Icon>
                                </span>
                                    <span className="list">Students</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" underline={"none"}>
                                <span className="icon">
                                    <Icon> <img src={classes} alt="Classes icon"/> </Icon>
                                </span>
                                    <span className="list">Classes</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" underline={"none"}>
                                <span className="icon">
                                    <Icon> <img src={assignment} alt="Assignment icon"/> </Icon>
                                </span>
                                    <span className="list">Assignment</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" underline={"none"}>
                                <span className="icon">
                                    <Icon> <img src={attendance} alt="Attendance icon"/> </Icon>
                                </span>
                                    <span className="list">Attendance</span>
                                </Link>
                            </li>
                        </ul>
                    </Typography>


                </Typography>
            </Grid>
        </Typography>
    );
};

export default SideNav;