export default function App() {
  return (
    <div style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>
      <style>{`html{color-scheme:light;background:#fff} body{background:#fff!important;color:#111!important;margin:0;font-family:-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased} a{color:#0366d6;text-decoration:none} a:hover{text-decoration:underline;text-underline-offset:3px} *{box-sizing:border-box}`}</style>
      <main style={{ maxWidth: 680, margin: '0 auto', padding: '32px 20px', background: '#fff' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, color: '#111' }}>Monika Malik</h1>
        <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: '#666' }}>
          San Francisco, CA · <a href="mailto:monika@monikamalik.com" style={{ color: '#666' }}>monika@monikamalik.com</a>
        </div>
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>About</h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#111' }}>
            I specialize in launching and scaling 0–1 products. I’ve worked across several of Meta’s core monetization teams and currently focus on subscription growth. I care deeply about building clear growth strategies, enabling teams to make fast data-informed decisions, and scaling early-stage products from ambiguity to traction to sustainable growth.
          </p>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Experience</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 15, lineHeight: 1.6 }}>
            <li style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#111' }}>Meta — Product Growth, Mar 2021 – Present</div>
              <div style={{ marginTop: 4, color: '#222' }}>Product growth across core monetization teams, including Shops. Currently focused on subscription growth. Specialize in 0–1 launches, data-driven experimentation, rapid iteration, and cross-functional execution to scale early-stage products.</div>
            </li>
            <li style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#111' }}>Pensa Systems — Product Analyst, Jan 2021 – Feb 2021</div>
              <div style={{ marginTop: 4, color: '#222' }}>Helped define shelf intelligence and translate it into actionable insights for enterprise customers.</div>
            </li>
            <li style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#111' }}>Accenture — Data Engineering Expert, Jul 2011 – Dec 2019</div>
              <div style={{ marginTop: 4, color: '#222' }}>Helped enterprises build scalable analytics systems.</div>
            </li>
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Education</h2>
          <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, lineHeight: 1.6, color: '#111' }}>
            <li style={{ marginBottom: 8 }}>University of Connecticut, USA — MS in Business Analytics and Project Management, 2020</li>
            <li>Guru Gobind Singh Indraprastha University (GGSIPU), India — B.Tech in Computer Science Engineering, 2007–2011</li>
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Focus Areas</h2>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#111' }}>Awareness, Acquisition, Retention, Virality — building and optimizing loops across the full growth lifecycle.</p>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Projects</h2>
          <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, lineHeight: 1.6, color: '#111' }}>
            <li style={{ marginBottom: 8 }}><strong>Growth Roast</strong> — A tool to analyze and teardown growth strategies across awareness, acquisition, retention, and virality.</li>
            <li><strong>OnlyTails</strong> — Manage your pet's life in one place.</li>
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Writing</h2>
          <ul style={{ paddingLeft: 20, margin: 0, fontSize: 15, lineHeight: 1.6, color: '#111' }}>
            <li><strong>What is Product Growth and how it complements and differs from Product Management</strong> <span style={{ color: '#666' }}>— Coming soon</span></li>
          </ul>
        </section>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '48px 0 16px 0', color: '#111' }}>Contact</h2>
          <div style={{ fontSize: 15, lineHeight: 1.6, color: '#111' }}>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/monika-malik-689a846a" target="_blank" rel="noopener noreferrer">linkedin.com/in/monika-malik-689a846a</a></div>
            <div>Email: <a href="mailto:monika@monikamalik.com">monika@monikamalik.com</a></div>
          </div>
        </section>
        <footer style={{ marginTop: 64, paddingTop: 16, borderTop: '1px solid #eee', fontSize: 13, color: '#666' }}>
          © 2026 Monika Malik
        </footer>
      </main>
    </div>
  )
}
