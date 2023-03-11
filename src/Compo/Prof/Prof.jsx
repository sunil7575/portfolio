import React from "react";
import "./Prof.css";
import back from "../../images/backend.png";
import algo from "../../images/algo.png";
import front from "../../images/frontend.png";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Prof() {
  const classes = useStyles();

  return (
    <div id="profs" className="prof">
      <h1 className="prof_header">Proficiency</h1>

      <div className={classes.root}>
        <Grid
          container
          spacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={back} />
              <p className="heading">Backend</p>
              <p className="subheading">Express.js, MongoDB</p>
            </div>
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={front} />
              <p className="heading">Frontend</p>
              <p className="subheading">
                HTML, CSS, React, Redux, Javascript, Bootstrap
              </p>
            </div>
          </Grid>
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <div className="prof_block">
              <img src={algo} />
              <p className="heading">DS & Algo</p>
              <p className="subheading">Intermediate level of Data Structure</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Prof;
