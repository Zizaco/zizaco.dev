import Phrase from "../islands/Phrase.tsx";

export default function Home() {
  return (
    <main>
      <section className="section is-spaced">
        <div className="container">
          <p className="subtitle is-family-monospace is-1 is-size-4-mobile is-spaced is-typewritter">
            Helping{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
            >
              MongoDB
            </a>{" "}
            users <Phrase></Phrase>
            <span className="typing-cursor">|</span>
          </p>
          <hr className="is-hidden-tablet mt-6"></hr>
          <p className="subtitle is-4 is-size-5-mobile">
            15 years of software engineering experience. With a proven track
            record of leading teams to deliver reliable software that scales and
            delivers value to customers.
          </p>
          <p>
            <br></br>Certified Product Owner.<br></br>Certified TOGAF® 9
            Architect.<br></br>Certified MongoDB DBA.
          </p>
        </div>
      </section>
    </main>
  );
}
