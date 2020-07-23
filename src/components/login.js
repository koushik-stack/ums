import React from 'react';
import {Grid, Container, Typography, Box} from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import logo from "../Images/seu-logo.png"
import "../CSS/login.css"


const Login = () => {
    return (
        <Grid container className={"login-main"}>

            {/*Left-side*/}
            <Grid className={"login-left"} item xs={12} md={6}>
                <Box component={"div"} className="login-left-inner">
                    <Typography align={"center"} className="left-logo" component="div">
                        <img src={logo} alt=""/>
                    </Typography>
                    <Box className={"left-title"}>
                        <Typography align={"center"} variant="h1">Welcome to
                            southeast <br/><span>university</span></Typography>
                    </Box>
                </Box>
            </Grid>


            {/*Right-side*/}
            <Grid className="login-right" item xs={12} md={6}>
                <Box component={"div"} className="login-right-inner">
                    <Typography align={"center"} component={"div"} className={"right-logo"} style={{display: "none"}}>
                        <img src={logo} alt=""/>
                    </Typography>
                    <Box className={"right-form"}>
                        <Typography component="h1" align="center" variant="h1">Login</Typography>
                        <Typography component="p" align="center" variant="p">If you are in SEU.</Typography>
                        <Typography component="div" align="center" variant="div" className="input">
                            <MailOutlineIcon className="form-icon"/>
                            <input type="text" placeholder="Username"/>
                        </Typography>
                        <Typography component="div" align="center" variant="div" className="input">
                            <LockOpenIcon className="form-icon"/>
                            <input type="text" placeholder="Password"/>
                        </Typography>
                        <Typography component="div" align="center" variant="div">
                            <button type="submit">Login</button>
                        </Typography>
                        <Typography component="div" align="center" variant="div" className="forgot-pass">
                            <a href="#">Forgotten password?</a>
                        </Typography>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
