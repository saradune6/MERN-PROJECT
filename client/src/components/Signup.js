import React, { useState } from "react";
import signupimage from "../images/signup.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    for (let key in user) {
      if (!user[key]) {
        window.alert("Please fill in all fields");
        return;
      }
    }

    // Additional password matching check
    if (user.password !== user.cpassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }


    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          work: user.work,
          password: user.password,
          cpassword: user.cpassword,
        }),
      });

      const data = await res.json();

      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert("An error occurred during registration");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account-circle material-icons-links"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-links"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-links"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    minLength={10}
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshare material-icons-links"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock-outline material-icons-links"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-links"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Your Password"
                  />
                </div>

                {!passwordMatch && user.password && user.cpassword && (
                  <p>Passwords do not match!</p>
                )}
                {passwordMatch && user.password && user.cpassword && (
                  <p>Passwords match!</p>
                )}

                <div className=" form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="shadow__btn1"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signupimage} alt="signup image" />
              </figure>
              <a href="/login" className="signup-imgage-link">
                {" "}
                I am Already Registered
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
