import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Register() {
    return (
      <>
        <div className="register-container">
          <title>Registration Form</title>
          <h2 className="form-heading">Registration Form</h2>
          <form>
            <div className="reg">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
              <label htmlFor="UserName">UserName:</label>
              <input
                type="text"
                id="username"
                name="UserName"
                placeholder="Enter your E-mail address"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="input-submit">
                
                  <button>Register</button>
                
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  

function Some() {
  return (
    <>
      <title>Login Page</title>
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="input-submit">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required="" />
            </div>
            <div className="input-submit">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required="" />
            </div>
            <div className="input-submit">
              <button type="submit" className="submit-login">Login</button>
            </div>
            <div className="input-submit">
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Some />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

