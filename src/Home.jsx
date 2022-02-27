import Header from './Components/Header';

function Home() {
  return (
    <div className="page-container">
      <Header />
      <article className="home-content-container">
        <h1 className="home-heading">What Is This?</h1>
        <br />
        <section className="home-text-container">
          <p className="home-text">
            Wimmelbilder images are highly detailed illustrations filled with lots of little
            things for the viewer to find. The picture-book series &quot;Where&apos;s Wally?&quot;
            is a good mainstream example of these kind of drawings.
            <br />
            <br />
            This website&apos;s purpose is to showcase some of these pictures in a fun and
            interesting way.
            <br />
            <br />
            Click the link below to play a game. You&apos;ll be able to choose a picture
            from our selection, and will have ten minutes to find three characters hidden inside
            the image.
            <br />
            <br />
            Once you find them all, you can submit your time to our leaderboards.
            <br />
            <br />
            Have fun!
            {' '}
          </p>
          <br />
          <a className="home-link" href="/game">Play The Game</a>
          <br />
          <br />
          <a className="home-link" href="/leaderboards">See The Leaderboards</a>
        </section>

      </article>

    </div>
  );
}

export default Home;
