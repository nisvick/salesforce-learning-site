import Link from 'next/link';

const focus = [
  ['⚙️', 'Salesforce Development', 'Apex, triggers, SOQL, governor limits, testing and clean implementation patterns.'],
  ['⚡', 'Lightning Web Components', 'Practical LWC concepts including data flow, events, wire services and Apex integration.'],
  ['🧩', 'Real-world Learning', 'Explaining not only what to do, but why a Salesforce solution works and when to use it.'],
];

export const metadata = {
  title: 'About the Developer | CloudCraft Academy',
  description: 'Learn about the developer and the purpose behind CloudCraft Academy, a practical Salesforce learning platform.',
};

export default function AboutDeveloper() {
  return (
    <main>
      <div className="wrap" style={{ paddingTop: 70, paddingBottom: 80 }}>
        <Link className="pill" href="/">← Home</Link>

        <section style={{ marginTop: 38, maxWidth: 850 }}>
          <div className="eyebrow">About the developer</div>
          <h1 style={{ fontSize: 'clamp(44px, 6vw, 68px)', letterSpacing: -3, marginBottom: 18 }}>
            Building a simpler way to learn Salesforce.
          </h1>
          <p className="muted" style={{ fontSize: 20, lineHeight: 1.7 }}>
            This website was created for anyone who wants to learn Salesforce in a practical, structured and easier-to-understand way.
            The goal is to move beyond memorising definitions and help learners understand the reasoning behind Salesforce
            configuration, automation and development decisions.
          </p>
        </section>

        <section className="section" style={{ paddingBottom: 30 }}>
          <div className="card" style={{ padding: 34, maxWidth: 900 }}>
            <div className="eyebrow">Developer profile</div>
            <h2 style={{ marginTop: 10, marginBottom: 12 }}>Nishant Kumar</h2>
            <p className="muted" style={{ fontSize: 17 }}>
              Salesforce Developer with 5+ years of experience, building this platform to help anyone who wants to learn Salesforce through practical concepts, real-world scenarios and interview preparation.
            </p>
            <div style={{ marginTop: 24 }}>
              <div className="eyebrow">Certifications</div>
              <ul className="muted" style={{ lineHeight: 1.9, paddingLeft: 20, marginTop: 10 }}>
                <li>Salesforce Certified Platform Administrator</li>
                <li>Salesforce Certified Platform Developer</li>
                <li>Salesforce Certified JavaScript Developer</li>
                <li>Salesforce Certified Sales Cloud Consultant</li>
                <li>Salesforce Certified CPQ Specialist</li>
                <li>Salesforce Certified Data 360 Consultant</li>
              </ul>
            </div>

            <div className="actions" style={{ marginTop: 22 }}>
              <Link className="btn primary" href="/courses">Explore courses →</Link>
              <Link className="btn secondary" href="/interview">Practice interviews</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 30 }}>
          <div className="eyebrow">What this platform focuses on</div>
          <h2>Learn the thinking, not just the clicks.</h2>
          <div className="grid" style={{ marginTop: 30 }}>
            {focus.map(([icon, title, description]) => (
              <article className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p className="muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="cta">
            <div>
              <div className="eyebrow">The mission</div>
              <h2 style={{ marginBottom: 8 }}>Make Salesforce easier to learn.</h2>
              <p className="muted" style={{ margin: 0, maxWidth: 650 }}>
                More practical examples, clearer explanations and more scenario-based practice — all in one place.
              </p>
            </div>
            <Link className="btn primary" href="/blog">Read the learning journal →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
