import React from "react";
import "../Home.css";
import ban from "../../images/ban.svg";
import Typical from "react-typical";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home_top" className="home_top">
      <div className="home_banner">
        <div>
          <img src={ban} alt="img" className="home_image" />
        </div>

        <div className="home_profile">
          <h1 className="home_tag">Full Stack Developer</h1>
          <h1 className="home_name">
            <strong>Sunil Gour</strong>
          </h1>
          <Typical
            steps={[
              "Frontend",
              800,
              "Backend",
              800,
              "Data structures and algorithms",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
            className="home_subtag"
          />
          <div className="buttons">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="marginrigth"
            >
              <div className="home_getstarted">
                <p className="mywork">View my work</p>
                <p></p>
              </div>
            </Link>
            <div className="home_getstarted">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1B_SDs-dI5qo8xpCb_Wz8HrlY___3a8Ac/view?usp=drivesdk"
              >
                <p className="mywork">Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
