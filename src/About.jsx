import Header from './Components/Header';

function About() {
  return (
    <div className="page-container">
      <Header />
      <main className="about">
        <h1>About This Website</h1>
        <br />
        <p>
          Wimby was made as part of
          <a href="https://www.theodinproject.com/"> The Odin Project.</a>
          <br />
          <br />
          You can see the source code for this website on my
          <a href="https://github.com/Fenroe/Wim-Build"> Github.</a>
          <br />
          <br />
          You can find more Wimmelbilders over at the
          <a href="https://www.reddit.com/r/wimmelbilder/"> Wimmelbilder subreddit.</a>
          <br />
          <br />
          XBOX 360 and PS2 were both drawn by Pierre Roussel. Support him over at his
          <a href="https://www.artstation.com/pierreroussel"> Artstation </a>
          page.
          <br />
          <br />
          AD 2222 was drawn by Egor Klyuchnyk. Consider supporting him on
          <a href="https://www.patreon.com/Egor"> Patreon.</a>
          <br />
          <br />
          Thanks for visiting!
          {' '}

        </p>
      </main>
    </div>
  );
}

export default About;
