// import Counter from "../islands/Counter.tsx";
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
    // <div class="px-4 py-8 mx-auto bg-[#86efac]">
    //   <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
    //     <img
    //       class="my-6"
    //       src="/logo.svg"
    //       width="128"
    //       height="128"
    //       alt="the Fresh logo: a sliced lemon dripping with juice"
    //     />
    //     <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
    //     <p class="my-4">
    //       Nice try updating this message in the
    //       <code class="mx-2">./routes/index.tsx</code> file, and refresh.
    //     </p>
    //     <Counter count={count} />
    //   </div>
    // </div>
  );
}
