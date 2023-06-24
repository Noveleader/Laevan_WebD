// We code react app here
function Some(){
    return (
        <>
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div class="container">
    <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVB2K5x6ikhS13sqXBQzcPkET2lcuHB615CCI-OvTicFSOU5ckxbUjt7CG3WXHSFftXaFu-1WL_8&usqp=CAU&ec=48600112" alt="Image" />
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