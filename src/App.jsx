// We code react app here
function Some(){
    return (
        <>
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="image-container">
    <img src="https://www.dreamstime.com/photos-images/law.html" alt="Image" />
  </div>
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
        <input type="submit-login" defaultValue="Login" />
      </div>
      <div className="input-submit">
        <input type="submit-register" defaultValue="Register" />
      </div>
    </form>
  </div>
</>
    );
    }

export default function main() {
    return (
        <>
        < Some/>
        </>
    );
}