import React from "react";
import "./Getin.css";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaDownload } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Getin() {
  return (
    <div className="getin" id="contact">
      <div className="main">
        <div className="form">
          <div className="getinheading">
            <h1
              style={{ color: "white", margin: "auto", width: "fit-content" }}
            >
              Get in Touch
            </h1>
          </div>

          <div className="contact">
            <div className="getinleft">
              <form action="https://formspree.io/f/xknkqogp" method="POST">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required="true"
                />
                <br />
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required="true"
                />
                <br></br>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required="true"
                />
                <br></br>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required="true"
                ></textarea>
                <br />

                <button
                  type="submit"
                  variant="contained"
                  size="50px"
                  className="btn"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="getinright">
              <div className="getinright1">
                <h4
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontWeight: "500",
                    margin: "15px",
                    fontSize: "18px",
                  }}
                >
                  Let's Connect
                </h4>
              </div>

              <div className="getinright1">
                <Tooltip title={<h1 style={{ color: "white" }}>Linkedin</h1>}>
                  <a target="_blank" href="www.linkedin.com/in/sunil-gour-a12067266">
                    <FaLinkedin className="con" />
                  </a>
                </Tooltip>

                <Tooltip title={<h1 style={{ color: "white" }}>Git Hub</h1>}>
                  <a target="_blank" href="https://github.com/sunil7575">
                    <FaGithub className="con" />
                  </a>
                </Tooltip>

                <Tooltip title={<h1 style={{ color: "white" }}>contect</h1>}>
                  <a target="_blank" href="tel:+917014656208">
                    <FaPhoneAlt className="con" />
                  </a>
                </Tooltip>
                <Tooltip title={<h1 style={{ color: "white" }}>Email</h1>}>
                  <a target="_blank" href="mailto:sunilgaur201995@gmail.com">
                    <IoMailSharp className="con" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getin;
