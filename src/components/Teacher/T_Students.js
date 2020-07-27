import React from 'react';
import {Grid, Icon, Typography} from "@material-ui/core";
import ContentHeader from "../ContentHeader";
import {makeStyles} from "@material-ui/core/styles";
import InfoCard from "../infoCard";
import students1 from "../../Images/card_student_1.svg"
import students2 from "../../Images/card_student_2.svg"
import Table from "../Table";

const useStyles = makeStyles({
    content_header: {
        padding: "20px 0 20px 0",
        color: "#867aee",
    },
});

const tableColumn = [
    "Id",
    "Name",
    "Email",
    "Course"
]




const TStudents = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                <Grid xs={12} className="">
                    <ContentHeader
                        title="Students"
                        style={classes.content_header}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InfoCard
                        number={50}
                        title="Total student under your Advise"
                        icon={students1}
                       /* contentBgColor={"red"}
                        bottomBgColor={"green"}*/

                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InfoCard
                        number={50}
                        title="Total student on your Classes"
                        icon={students2}
                         contentBgColor={"#DD4C39"}
                         bottomBgColor={"#C74432"}

                    />
                </Grid>
                <Grid item xs={12}>
                    <Table
                        column={tableColumn}
                    />
                </Grid>


            </Grid>
        </>
    );
};

export default TStudents;