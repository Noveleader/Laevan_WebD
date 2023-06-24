function About(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,600&display=swap"
    rel="stylesheet"
  />
  <header>
    <nav>
      <div className="left">About Us</div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Profile</a>
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
      <div className="leftsection">
        Hi, We are a Group of
        <span className="purple">Passionate Developers,</span> From Vit Chennai
        <span id="element" />
      </div>
      <div className="rightsection">
        <img src="im3.avif" alt="Not found" />
      </div>
    </section>
    <hr />
    <section className=" secondsection ">
      <span className="text-gray">What we will do in Future</span>
      <h1>Our Vision</h1>
      <div className="box">
        <p>
          Welcome to our vibrant online community, where the power of knowledge
          intersects with the spirit of collaboration. Our vision is to create a
          dynamic webpage that serves as a haven for individuals seeking
          guidance and discussions on legal matters. Step into a world where the
          complexities of the law are demystified, and everyone has a voice.
          Join us as we revolutionize the way people interact with the legal
          system, providing a platform that is inclusive, accessible, and
          inspiring.
        </p>
        <p>
          At the heart of our vision is the belief that no one should face legal
          challenges alone. We have meticulously crafted a welcoming space where
          individuals from all walks of life can gather to discuss, seek advice,
          and lend support. Our user-friendly interface ensures seamless
          navigation, enabling you to explore various legal topics effortlessly.
          Engage in insightful conversations with legal professionals, scholars,
          and experts passionate about sharing their knowledge. Together, we
          will build a vibrant community that fosters understanding, compassion,
          and empowerment.
        </p>
        <p>
          Dive into our diverse discussion categories, carefully curated to
          cater to your specific needs. Whether you're grappling with civil law,
          criminal law, family matters, or intellectual property, our platform
          offers dedicated sections where you can immerse yourself in meaningful
          exchanges. Connect with others who have faced similar legal
          challenges, drawing strength from their experiences and gaining
          valuable insights. In this collaborative environment, peer-to-peer
          support flourishes, creating a nurturing space where everyone's voice
          matters.
        </p>
        <p>
          But our vision extends beyond discussions alone. We recognize the
          importance of reliable resources to navigate the intricacies of the
          legal landscape. Discover our extensive collection of legal guides,
          meticulously curated to provide you with accurate and up-to-date
          information. Stay informed with news updates on court rulings and
          legal developments. Empower yourself with the knowledge needed to make
          informed decisions and take control of your legal journey.
        </p>
        <p>
          Join us today and become part of a revolutionary community that
          celebrates legal literacy, fosters inclusivity, and empowers
          individuals to overcome legal hurdles with confidence. Together, let's
          build a brighter future where knowledge, collaboration, and justice
          prevail.
        </p>
        <h1>About Laewan</h1>
        <div className="box">
          <p>We are a group of 5 people</p>
          <br />{" "}
        </div>
      </div>
    </section>
  </main>
</>

    );
}

export default About;
