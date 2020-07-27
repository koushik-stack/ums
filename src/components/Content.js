import React from 'react';
import { Container, Box} from "@material-ui/core";
import "../css/content.css"

import TeacherDashboard from "./Teacher/TeacherDashboard";
import {Switch,  Route,} from "react-router-dom"
import TStudents from "./Teacher/T_Students";

const Content = () => {


    return (

        <Switch>
            <Box component={"div"} className="main_content">
                <Container maxWidth={"xl"}>
                    <Route exact path="/main/dashboard" component={TeacherDashboard}/>
                    <Route exact path="/main/t_student" component={TStudents}/>
                </Container>
            </Box>
        </Switch>
    );
};

export default Content;