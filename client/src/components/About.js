import React, { useEffect, useState } from "react";
import saraImage from "../images/sara.jpg";
import aboutImage from "../images/about.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [item, setItem] = useState("About");
  const [con, setCondition] = useState(true);
  

  const handleClick = () => {
    setCondition(!con);
    if (!con) {
      setItem("About");
    } else {
      setItem("Timeline");
    }
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {      
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="containerez emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={userData && userData.name === "Sara Choudhary" ? saraImage : aboutImage} alt="sara" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData && userData.name}</h5>
                <h6>{userData && userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING<span style={{ fontWeight: "bold" }}> 1/10</span>
                </p>

                <div className="col-md-2">
                  <input
                    type="text"
                    className="btn-12 "
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </div>

                <ul className="nav" role="tablist">
                  <li className="nav-item" onClick={handleClick}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      {item}
                    </a>
                  </li>
                  {/*<li className="nav-item active">
                    <a
                      className="nav-link "
                      aria-current="page"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                    >
                      Timeline
                    </a>
  </li>*/}
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {/*right side url*/}
            <div className="col-md-6">
              <div className="profile-work">
                <p>PROJECT..!!</p>
                <a
                  href="https://uiverse.io/abrahamcalsin/sour-donkey-65"
                  target="blank"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Uiverse.io
                </a>
                <br />
                <br />

                <a
                  href="https://uiverse.io/abrahamcalsin/sour-donkey-65"
                  target="blank"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Uiverse.io
                </a>
                <br />
                <br />
                <a
                  href="https://uiverse.io/abrahamcalsin/sour-donkey-65"
                  target="blank"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Uiverse.io
                </a>
                <br />
                <br />
                <a
                  href="https://uiverse.io/abrahamcalsin/sour-donkey-65"
                  target="blank"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Uiverse.io
                </a>
                <br />
                <br />
                <a
                  href="https://uiverse.io/abrahamcalsin/sour-donkey-65"
                  target="blank"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Uiverse.io
                </a>
                <br />
                <br />
              </div>
            </div>

            <div className="col md-8 pls-5 about-info">
              <div className="tab-content profile-tab " id="myTabContent">
                {con ? (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>7834762</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{ userData && userData.name}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{ userData && userData.email}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{ userData && userData.phone}</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData &&  userData.work}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Fresher</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>100Hr</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Total Project</label>
                      </div>
                      <div className="col-md-6">
                        <p>10+</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>College CGPA</label>
                      </div>
                      <div className="col-md-6">
                        <p>8.5</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
