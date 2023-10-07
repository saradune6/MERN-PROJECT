
import React , {useState} from "react";
import loginpic from "../images/login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        email:email,
        password:password,
      })
    });
    const data = res.json();
    
    if (res.status === 400 || !data){
      window.alert("Invalid Credentials");

    }else{
      window.alert("LogIn Successful");
      navigate("/about");
    }
  }
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} alt="signin image" />
              </figure>
              <a href="/signup" className="signin-imgage-link">
                {" "}
                Create an account..!!
              </a>
            </div>
            <div className="signin-form">
              <h2 className="login-title" style={{ fontWeight: "bolder" }}>
                Log In
              </h2>
              <form method="POST" className="login-register-form " id="register-form">
                <div className="login-form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-links"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock-outline material-icons-links"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                </div>
              </form>
              <br />
              <div className="form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="shadow__btn2"
                  value="  Log In"
                  onClick={loginUser}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
