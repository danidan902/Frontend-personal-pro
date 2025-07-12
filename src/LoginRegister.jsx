import { useState } from "react"
import axios from 'axios'
function LoginRegister() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage ] = useState("")
   
  // https://backend-pro-1-a0s3.onrender.com

       const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:5001/api/register", {
          
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          
          body: JSON.stringify({
            name: document.getElementById('name').value,
            email,
            password,
            message: document.getElementById('message').value,
          })
        
        })
       
        const data = await res.json()
        console.log("Response", data)
       }
      

      function LoginRegister() {
        const content = document.getElementById("content")
        const registerBtn = document.getElementById("register")
        const loginBtn = document.getElementById("login")

        registerBtn.addEventListener('click', () => {
            content.classList.add("active")
        })
        loginBtn.addEventListener('click', () => {
            content.classList.remove("active")
        })
       }

  return (
    <div
      className="content justify-content-center align-items-center d-flex shadow-lg"
    id="content"
    >
      {/* first registration form */}

      <div className="columns-md-20 d-flex justify-content-center contect-box"  >
        <form>
          <div className="header-text mb-4">
            <h2>Create Account</h2>



            
          </div>

          <div className="input-group">
            <input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Name"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
              
            ></input>
          </div>

          <div className="input-group">
            <input
            required
            id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
            ></input>
          </div>

          <div className="input-group">
            <input
             required
             id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
            ></input>
          </div>

          <div className="input-group">
            <textarea
             id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="message"
              placeholder="Message"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
            ></textarea>
          </div>

          <div className="input-group justify-content-center">
            <button
             onSubmit={handleSubmit}
              type="submit"
              className="btn border-white text-white p-2  fs-6 mb-3"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      {/* second registration form */}

      <div className="columns-md-6 right-box">
        <form>
          <div className="header-text mb-4">
            <h2>Sign In</h2>
          </div>

          <div className="input-group">
            <input
              id="email"
              required
              //  value={email}
              // onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
            ></input>
          </div>

          <div className="input-group">
            <input
               id="password"
               required
              //   value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="form-control form-control-lg bg-lint fs-6 mb-3"
            ></input>
          </div>

          <div
            className="input-group  mb-5 d-flex gap-0.1"
            style={{ justifyContent: "space-between" }}
          >
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label
                htmlFor="formcheck"
                className="form-check-label text-secondary"
              >
                <small>Remember me</small>
              </label>
            </div>
            <div className="forgot">
              <small>
                <a href="#">Forgot Password?</a>
              </small>
            </div>
          </div>

          <div className="input-group justify-content-center">
            <button
              type="submit"
              className="btn border-white text-white w-50 fs-6 mb-3"
            >
              Log In
            </button>
          </div>
        </form>
      </div>

      <div className="switch-content">
        <div className="switch">
          <div className="switch-pannel switch-left">
            <h1>Hello Again</h1>
            <p>We are happy to see you back</p>
            <button
              className=" hidden btn text-white w-50 fs-6 border"
              id="login" onClick={LoginRegister}
            >
              Log In
            </button>
          </div>

          <div className="switch-pannel switch-right">
            <h1>Welcome </h1>
            <p>Join Our unique platform Explore new expiriance</p>
            <button
              className="hidden btn text-white p-2 fs-6 border"
              id="register"
              onClick={LoginRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
