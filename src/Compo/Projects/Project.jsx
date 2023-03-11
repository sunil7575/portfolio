import React from "react";
import "./Project.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ipo from "../../images/policybaz.png";
import sogo from "../../images/SogoHotle.png";
import dice from "../../images/dicepassing.png";
import wa from "../../images/wa.gif";
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialUi } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  btn: {
    backgroundColor: "#3498db",
  },
}));

function Project() {
  const classes = useStyles();

  return (
    <div id="projects" className="project">
      <h1 className="project_header">Projects</h1>
      <br />
      <br></br>

      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img src={ipo} alt="shine" className="shine_img" />
                  <div class="content-details fadeIn-top">
                    <h3>Policybazaar.com</h3>
                    {/* <p>E-Commerce Website</p> */}
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/Prashant-Sharma-TWS/policybazaar"
                    target="_blank"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a
                    href="https://prashant-sharma-tws.github.io/policybazaar/"
                    target="_blank"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Policybazaar.com</h4>
                  <p>
                    A website which allows user to register and login where user
                    can choose a insurance and buy it.
                  </p>
                  <p>Project duration: 6 days</p>
                  <p>TechStack: React, Redux, HTML, CSS</p>
                  <p>Team: 3 members</p>
                </div>
                <div>
                  <FaReact style={{ color: "#475569", fontSize: "40px" }} />
                  <SiRedux style={{ color: "#475569", fontSize: "40px" }} />
                  <IoLogoJavascript
                    style={{ color: "#475569", fontSize: "40px" }}
                  />
                  <FaHtml5 style={{ color: "#475569", fontSize: "40px" }} />
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Dice Passing</h4>
                  <p>
                    This is a simple Dice Pasing Game for all user and i use
                    HTML, CSS, and JAVASCRIPT
                  </p>
                  <p>Project duration: 1 days</p>
                  <p>TechStack: HTML, CSS, JAVASCRIPT</p>
                  <p>Team: 1 members</p>
                </div>
                <div>
                  <FaHtml5 style={{ color: "#475569", fontSize: "40px" }} />
                  <FaCss3Alt style={{ color: "#475569", fontSize: "40px" }} />
                  <IoLogoJavascript
                    style={{ color: "#475569", fontSize: "40px" }}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="ss_img" src={dice} alt="shopperstop" />
                  <div class="content-details fadeIn-top">
                    <h3>Dice Passing</h3>
                    <p>Online Dice Passing Game</p>
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://github.com/sunil7575/DIcepassing-game/tree/master/Dicepassing-game-main"
                    target="_blank"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a href="http://dicepassing-game.vercel.app/" target="_blank">
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="ss_img" src={sogo} alt="shopperstop" />
                  <div class="content-details fadeIn-top">
                    <h3>Sogohotle.com</h3>
                    <p>Online Hotle Services</p>
                  </div>
                </div>

                <div className="gitlive">
                  <a
                    href="https://Sogo-Hotel-Website"
                    target="_blank"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      GitHub
                    </Button>
                  </a>
                  <div style={{ width: "20px" }} />
                  <a
                    href="https://karthik257Sogo-Hotel-Websitl"
                    target="_blank"
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      style={{ fontSize: "14px" }}
                    >
                      Live
                    </Button>
                  </a>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="projectdiv"
          >
            <Paper>
              <div className="container1">
                <div className="content1">
                  <h4>Sogohotel.com</h4>
                  <p>
                    Sogo Hotel is a website that allows users to book hotel
                    rooms online by exploring various rooms with price
                    comparisons.
                  </p>
                  <p>Project duration: 6 days</p>
                  <p>TechStack: HTML, CSS, JAVASCRIPT</p>
                  <p>Team: 3 members</p>
                </div>
                <div>
                  <FaHtml5 style={{ color: "#475569", fontSize: "40px" }} />
                  <FaCss3Alt style={{ color: "#475569", fontSize: "40px" }} />
                  <IoLogoJavascript
                    style={{ color: "#475569", fontSize: "40px" }}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Project;
