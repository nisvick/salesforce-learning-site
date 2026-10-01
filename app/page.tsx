import Link from 'next/link';

const courses=[
 ['⚙️','Salesforce Admin','Start with the platform: objects, data model, security, automation, reports and dashboards.','Beginner','12 lessons'],
 ['⌘','Apex Development','Learn Apex classes, triggers, SOQL, DML, governor limits and testing through real scenarios.','Intermediate','18 lessons'],
 ['⚡','Lightning Web Components','Build modern Salesforce UIs with HTML, JavaScript, Apex, wire services and events.','Intermediate','16 lessons'],
 ['🔐','Security & Sharing','Understand profiles, permission sets, roles, OWD, sharing rules and record access.','Beginner','10 lessons'],
 ['🔄','Flow Automation','Master record-triggered flows, screen flows, decisions, collections and fault handling.','Beginner','14 lessons'],
 ['🌐','Integration','Understand REST/SOAP APIs, Named Credentials, callouts and external-system patterns.','Advanced','11 lessons']
];

export default function Home(){return <>
<header className="nav"><div className="wrap" style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}><Link href="/" className="logo"><span className="logoMark">S</span>CloudCraft Academy</Link><nav className="links"><Link href="/courses">Courses</Link><Link href="/interview">Interview Prep</Link><Link href="/blog">Blog</Link><Link href="/about-developer">About Developer</Link><a href="#roadmap">Roadmap</a></nav></div></header>
<main>
<section className="hero"><div className="wrap"><div className="eyebrow">Salesforce learning, without the noise</div><h1>Learn Salesforce by <span>building real things.</span></h1><p>Practical lessons for Salesforce Admins and Developers — from objects and security to Apex, LWC, Flow and integrations. Clear explanations. Real scenarios. Interview-ready thinking.</p><div className="actions"><Link className="btn primary" href="/courses">Start learning →</Link><Link className="btn secondary" href="/interview">Explore interview prep</Link></div></div></section>
<section className="section"><div className="wrap"><div className="eyebrow">Core curriculum</div><h2>Everything you need to grow</h2><p className="muted">Follow a structured path or jump straight into the topic you need today.</p><div className="grid" style={{marginTop:30}}>{courses.map(([icon,title,desc,level,count])=><article className="card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p className="muted">{desc}</p><span className="tag">{level}</span><div className="courseMeta"><span>{count}</span><span>Learn →</span></div></article>)}</div></div></section>
<section className="section" id="roadmap"><div className="wrap"><div className="eyebrow">Learning roadmap</div><h2>From zero to job-ready</h2><div className="roadmap"><div className="step"><div className="num">01 · FOUNDATION</div><h3>Platform Basics</h3><p className="muted">CRM, orgs, objects, fields, relationships and data.</p></div><div className="step"><div className="num">02 · ADMIN</div><h3>Configure</h3><p className="muted">Security, Flow, reports, dashboards and automation.</p></div><div className="step"><div className="num">03 · DEVELOPMENT</div><h3>Build</h3><p className="muted">Apex, SOQL, triggers, testing and LWC.</p></div><div className="step"><div className="num">04 · REAL WORLD</div><h3>Integrate</h3><p className="muted">APIs, architecture, debugging and projects.</p></div></div></div></section>
<section className="section"><div className="wrap"><div className="cta"><div><div className="eyebrow">Practice beats memorization</div><h2 style={{marginBottom:8}}>Train for the interview.</h2><p className="muted" style={{margin:0,maxWidth:650}}>Scenario-based questions covering Apex, LWC, Flow, security, order of execution and integration.</p></div><Link className="btn primary" href="/interview">Practice questions →</Link></div></div></section>
</main><footer className="footer"><div className="wrap">© 2026 CloudCraft Academy · Learn Salesforce with practical, structured lessons.</div></footer>
</>}
