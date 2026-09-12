const practice = [
  {
    index: "01",
    title: "Interface design",
    body: "Layout, type and colour decided in the browser. The file is the artefact, not a picture of one.",
    invert: false,
  },
  {
    index: "02",
    title: "Design systems",
    body: "Tokens, primitives and the documentation that stops a team inventing a fifth button.",
    invert: true,
  },
  {
    index: "03",
    title: "Front-end engineering",
    body: "React, TypeScript and CSS a stranger can read a year from now.",
    invert: true,
  },
  {
    index: "04",
    title: "Accessibility",
    body: "Keyboard paths, contrast and reduced motion, settled at design time instead of in a remediation ticket.",
    invert: false,
  },
];

const work = [
  {
    index: "01",
    name: "Halflight",
    role: "Design + build",
    body: "Cut checkout abandonment by a third. Three screens replaced eleven, the account gate went in the bin, and it shipped in six weeks.",
  },
  {
    index: "02",
    name: "Meridian",
    role: "Design system",
    body: "Eleven product teams now ship from one set of primitives. Four component libraries became forty tokens, a grid and a page of rules.",
  },
  {
    index: "03",
    name: "Nocturne",
    role: "Front-end",
    body: "First paint went from 4.1s to 0.8s. The whole catalogue renders on the server and 300kb of client JavaScript is gone.",
  },
];

const finePrint = [
  "Replies within a day",
  "Seoul — UTC+9",
  "Available January 2027",
  "Open to remote work",
];

export default function Page() {
  return (
    <>
      <a className="skip button" href="#main">
        Skip to content
      </a>

      <main id="main">
        <header className="shell">
          <div className="kicker">
            <p className="label">Jae Lee</p>
            <p className="label">Design Engineer</p>
            <p className="label">Seoul</p>
          </div>

          <div className="hero">
            <h1 className="display">
              <span className="hero__line solid">Design</span>{" "}
              <span className="hero__line">
                <span className="outline">in</span>{" "}
                <span className="accent">code</span>
              </span>
            </h1>

            <div className="hero__foot">
              <p className="hero__lead">
                I design interfaces and then build them. No handoff, no deck, no
                waiting on someone else&rsquo;s sprint. The work ships or it does
                not count.
              </p>
              <div className="hero__actions">
                <p className="tag">Available January 2027</p>
                <a className="button" href="#hello">
                  Say hello
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="section shell" id="practice">
          <div className="section__head">
            <p className="label">01</p>
            <h2 className="label">Practice</h2>
          </div>
          <div className="practice">
            {practice.map((item) => (
              <article
                className={item.invert ? "cell cell--invert" : "cell"}
                key={item.index}
              >
                <p className="label">{item.index}</p>
                <h3 className="cell__title">{item.title}</h3>
                <p className="cell__body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="work">
          <div className="section__head">
            <p className="label">02</p>
            <h2 className="label">Selected work</h2>
          </div>
          <div className="work">
            {work.map((item) => (
              <article className="work__row" key={item.index}>
                <p className="label">{item.index}</p>
                <h3 className="display work__name">{item.name}</h3>
                <div className="work__meta">
                  <p className="label work__role">{item.role}</p>
                  <p className="work__body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section__head">
            <p className="label">03</p>
            <h2 className="label">About</h2>
          </div>
          <div className="about">
            <blockquote className="about__quote">
              <p>
                A page gets about one second to say what it is. Everything I do
                is an argument about how to spend that second.
              </p>
            </blockquote>
            <div className="about__body">
              <p>
                I started in print, setting type for gallery catalogues in Seoul.
                The grid habits stuck. So did the belief that a page should be
                legible across a room before it is legible in your hand.
              </p>
              <p>
                The web took the work, so I learned to build. Handing a drawing
                to someone else and hoping was the worst part of the job. Now the
                thing I show you is the thing that ships.
              </p>
              <p>
                I work alone, or as the design half of a small team. I like a
                brief with a real constraint in it. I do not like decks, and I do
                not run rounds of exploration nobody intends to build.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell" id="hello">
          <div className="section__head">
            <p className="label">04</p>
            <h2 className="label">Say hello</h2>
          </div>
          <a className="link hello__mail" href="mailto:jaequery@gmail.com">
            jaequery@gmail.com
          </a>
          <div className="hello__fine">
            {finePrint.map((line) => (
              <p className="label" key={line}>
                {line}
              </p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
