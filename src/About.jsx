import Header from './Components/Header';

function About() {
  return (
    <div className="page-container">
      <Header />
      <h1>About This Website</h1>
      <p>
        This website was a project I made as part of The Odin Project, an open source
        curriculum for self-taught web developers.
        <br />
        <br />
        Thank you to the Wimmelbilder subreddit for teaching me about Wimmelbilder illustrations.
        If Wimmelbilders interest you then check out the community here.
        {' '}

      </p>
    </div>
  );
}

export default About;
