function Profile(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,600&display=swap"
    rel="stylesheet"
  />
  <header>
    <nav>
      <div className="left">PROFILE</div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <section className="firstsection">
      <div className="leftsection">User Information</div>
      <div className="rightsection">
        <img src="im2.webp" alt="Not found" />
      </div>
    </section>
    <hr />
    <section className=" secondsection ">
      <h1 id="name" />
      <h1 id="username" />
      <h1 id="password" />
    </section>
  </main>
</>

    );
}

export default Profile;
