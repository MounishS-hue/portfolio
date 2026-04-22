const pageMarkup = `
  <style>
    :root {
      --bg-a: #0f172a;
      --bg-b: #1e293b;
      --bg-c: #0f172a;
      --card: rgba(30, 41, 59, 0.8);
      --card-light: rgba(71, 85, 105, 0.15);
      --ink: #f1f5f9;
      --muted: #cbd5e1;
      --line: rgba(148, 163, 184, 0.2);
      --cyan: #06b6d4;
      --amber: #fbbf24;
      --accent: #8b5cf6;
      --success: #10b981;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      padding: 0;
    }

    .portfolio-root {
      min-height: 100vh;
      padding: 1.25rem;
      color: var(--ink);
      background:
        radial-gradient(circle at 0% 20%, rgba(59, 130, 246, 0.15), transparent 50%),
        radial-gradient(circle at 95% 60%, rgba(139, 92, 246, 0.15), transparent 50%),
        linear-gradient(135deg, var(--bg-a) 0%, var(--bg-b) 50%, #1a1f35 100%);
      font-family: "Space Grotesk", "Plus Jakarta Sans", "Segoe UI", sans-serif;
      overflow-x: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      gap: 1.5rem;
    }

    .glass {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 24px;
      backdrop-filter: blur(16px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      transition: all 0.3s ease;
    }

    .glass:hover {
      border-color: rgba(148, 163, 184, 0.4);
      box-shadow: 0 35px 60px -15px rgba(59, 130, 246, 0.2);
      transform: translateY(-2px);
    }

    .hero {
      padding: 2rem;
      animation: reveal 0.8s ease-out both;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
      animation: float 20s ease-in-out infinite;
      pointer-events: none;
    }

    .tag {
      display: inline-block;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
      border: 1px solid rgba(139, 92, 246, 0.5);
      color: #a5f3fc;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.15em;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      animation: pulse-glow 3s ease-in-out infinite;
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
      50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
    }

    h1 {
      margin: 1.5rem 0 0;
      font-size: clamp(2.5rem, 5.5vw, 3.75rem);
      line-height: 1.05;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 900;
    }

    .intro {
      margin: 1rem 0 0;
      color: var(--muted);
      max-width: 70ch;
      line-height: 1.65;
      font-size: 1.05rem;
      position: relative;
      z-index: 1;
    }

    .hero-grid {
      margin-top: 1.5rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      position: relative;
      z-index: 1;
    }

    .kpi {
      border-radius: 18px;
      padding: 1rem;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
      border: 1px solid rgba(139, 92, 246, 0.3);
      text-align: center;
      transform: translateY(8px);
      opacity: 0;
      animation: rise 0.7s ease-out forwards;
      transition: all 0.3s ease;
    }

    .kpi:hover {
      border-color: rgba(139, 92, 246, 0.6);
      box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
      transform: translateY(-4px);
    }

    .kpi:nth-child(1) { animation-delay: 0.06s; }
    .kpi:nth-child(2) { animation-delay: 0.16s; }
    .kpi:nth-child(3) { animation-delay: 0.26s; }

    .kpi strong {
      display: block;
      font-size: 1.35rem;
      margin-bottom: 0.2rem;
      font-weight: 800;
    }

    .kpi span {
      font-size: 0.8rem;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .links {
      margin-top: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      position: relative;
      z-index: 1;
    }

    .links a {
      text-decoration: none;
      border-radius: 999px;
      padding: 0.7rem 1.2rem;
      border: 1.5px solid rgba(139, 92, 246, 0.4);
      color: var(--ink);
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
      font-size: 0.9rem;
      font-weight: 700;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }

    .links a::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .links a:hover::before {
      left: 100%;
    }

    .links a:hover {
      transform: translateY(-3px);
      border-color: rgba(139, 92, 246, 0.8);
      box-shadow: 0 15px 35px -5px rgba(139, 92, 246, 0.5);
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.25));
    }

    .cols {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .section {
      padding: 1.5rem;
      animation: reveal 0.9s ease-out both;
    }

    .section h2 {
      margin: 0;
      font-size: 1.35rem;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 800;
    }

    .chips {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
    }

    .chip {
      border-radius: 999px;
      border: 1px solid rgba(139, 92, 246, 0.3);
      background: rgba(139, 92, 246, 0.1);
      font-size: 0.85rem;
      padding: 0.5rem 0.9rem;
      color: #a5f3fc;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .chip:hover {
      border-color: rgba(139, 92, 246, 0.7);
      background: rgba(139, 92, 246, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
    }

    .skill-grid {
      margin-top: 1.2rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    .skill-card {
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
      border: 1px solid rgba(139, 92, 246, 0.3);
      padding: 1.2rem;
      transition: all 0.3s ease;
    }

    .skill-card:hover {
      border-color: rgba(139, 92, 246, 0.6);
      box-shadow: 0 15px 35px rgba(139, 92, 246, 0.2);
      transform: translateY(-4px);
    }

    .skill-card h3 {
      margin: 0 0 0.8rem;
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #a5f3fc;
      font-weight: 800;
    }

    .projects {
      display: grid;
      gap: 1.2rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      margin-top: 1.2rem;
    }

    .project {
      border-radius: 20px;
      border: 1px solid rgba(139, 92, 246, 0.3);
      padding: 1.4rem;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08));
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
      overflow: hidden;
    }

    .project::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
      transition: left 0.5s;
    }

    .project:hover::before {
      left: 100%;
    }

    .project:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 50px rgba(139, 92, 246, 0.3);
      border-color: rgba(139, 92, 246, 0.6);
    }

    .project h3 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 800;
      color: #06b6d4;
      position: relative;
      z-index: 1;
    }

    .project p {
      margin: 0.5rem 0 0;
      color: var(--muted);
      font-size: 0.88rem;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }

    .project ul {
      margin: 0.8rem 0 0;
      padding-left: 1.2rem;
      color: #cbd5e1;
      line-height: 1.6;
      font-size: 0.9rem;
      position: relative;
      z-index: 1;
    }

    .project li {
      margin-bottom: 0.4rem;
    }

    .list-card {
      margin-top: 1rem;
      display: grid;
      gap: 0.8rem;
    }

    .list-card li {
      list-style: none;
      border: 1px solid rgba(139, 92, 246, 0.3);
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
      border-radius: 14px;
      padding: 0.9rem 1rem;
      color: var(--muted);
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .list-card li:hover {
      border-color: rgba(139, 92, 246, 0.6);
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15));
      transform: translateX(4px);
    }

    .list-card li strong {
      color: #a5f3fc;
      font-weight: 700;
    }

    .list-card.ach li {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1));
      border-color: rgba(16, 185, 129, 0.3);
    }

    .list-card.ach li:hover {
      border-color: rgba(16, 185, 129, 0.6);
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(34, 197, 94, 0.15));
    }

    footer {
      text-align: center;
      color: #64748b;
      font-size: 0.85rem;
      padding: 1.5rem 0 0.5rem;
      border-top: 1px solid rgba(139, 92, 246, 0.2);
      margin-top: 2rem;
    }

    @keyframes reveal {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes rise {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-30px, -30px); }
    }

    @media (min-width: 760px) {
      .portfolio-root { padding: 2.5rem; }
      .hero { padding: 2.5rem; }
      .section { padding: 1.8rem; }
      .cols.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    @media (max-width: 640px) {
      h1 { font-size: 2rem; }
      .hero-grid { grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); }
      .skill-grid { grid-template-columns: 1fr; }
      .projects { grid-template-columns: 1fr; }
    }
  </style>

  <div class="portfolio-root">
    <main class="container">
      <header class="glass hero">
        <span class="tag">Portfolio 2026 • Full-Stack AI Engineer</span>
        <h1>Mounish Senisetty</h1>
        <p class="intro">
          Building intelligent AI systems and production-grade full-stack applications. 
          Specialized in federated learning, AI agents, and high-performance data systems.
          Passionate about turning research into real-world impact.
        </p>

        <div class="hero-grid">
          <div class="kpi"><strong style="color: var(--cyan);">9.55</strong><span>CGPA</span></div>
          <div class="kpi"><strong style="color: var(--amber);">Top 1.5%</strong><span>Amazon Challenge</span></div>
          <div class="kpi"><strong style="color: var(--success);">10+</strong><span>Projects</span></div>
        </div>

        <div class="links">
          <a href="mailto:senisettymounish@gmail.com">📧 Email</a>
          <a href="https://github.com/MounishSenisetty" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="https://linkedin.com/in/mounish-senisetty" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href="https://leetcode.com/u/Mounish_Mou/" target="_blank" rel="noreferrer">🏆 LeetCode</a>
        </div>
      </header>

      <section class="cols two">
        <article class="glass section">
          <h2>📚 Education</h2>
          <ul class="list-card">
            <li><strong>Amrita Vishwa Vidyapeetham</strong><br/>B.Tech Computer Science (AI & Data Science)<br/>CGPA: 9.55/10.0</li>
            <li><strong>RGUKT Nuzvid</strong><br/>Pre-University Engineering<br/>GPA: 9.77/10.0</li>
          </ul>
        </article>

        <article class="glass section">
          <h2>🎯 Core Expertise</h2>
          <div class="chips">
            <span class="chip">AI Agents</span>
            <span class="chip">Federated Learning</span>
            <span class="chip">LLM Applications</span>
            <span class="chip">FastAPI</span>
            <span class="chip">PyTorch & TensorFlow</span>
            <span class="chip">Cloud Systems</span>
          </div>
        </article>
      </section>

      <section class="glass section">
        <h2>🛠️ Technical Skills</h2>
        <div class="skill-grid">
          <article class="skill-card">
            <h3>Languages & Runtimes</h3>
            <div class="chips">
              <span class="chip">Python</span>
              <span class="chip">TypeScript</span>
              <span class="chip">C++</span>
              <span class="chip">SQL</span>
              <span class="chip">Java</span>
            </div>
          </article>
          <article class="skill-card">
            <h3>AI & Machine Learning</h3>
            <div class="chips">
              <span class="chip">PyTorch</span>
              <span class="chip">TensorFlow</span>
              <span class="chip">LangChain</span>
              <span class="chip">OpenAI API</span>
              <span class="chip">Computer Vision</span>
              <span class="chip">NLP</span>
              <span class="chip">Reinforcement Learning</span>
            </div>
          </article>
          <article class="skill-card">
            <h3>Backend & DevOps</h3>
            <div class="chips">
              <span class="chip">FastAPI</span>
              <span class="chip">Node.js</span>
              <span class="chip">PostgreSQL</span>
              <span class="chip">MongoDB</span>
              <span class="chip">Docker</span>
              <span class="chip">Linux</span>
              <span class="chip">AWS</span>
              <span class="chip">Git</span>
            </div>
          </article>
          <article class="skill-card">
            <h3>Frontend & Web</h3>
            <div class="chips">
              <span class="chip">React</span>
              <span class="chip">Next.js</span>
              <span class="chip">Tailwind CSS</span>
              <span class="chip">REST APIs</span>
              <span class="chip">WebSockets</span>
            </div>
          </article>
        </div>
      </section>

      <section class="glass section">
        <h2>💼 Featured Projects</h2>
        <div class="projects">
          <article class="project">
            <h3>Learning Management System (LMS)</h3>
            <p>React • FastAPI • PostgreSQL • Node.js</p>
            <ul>
              <li>Built complete role-based access control for Admin, Teacher, and Student roles with distinct UI flows</li>
              <li>Designed and implemented progress dashboards with real-time analytics and performance insights</li>
              <li>Created modular REST APIs with JWT authentication and comprehensive error handling</li>
              <li>Implemented checkpoint system with automated grading and feedback mechanisms</li>
            </ul>
          </article>

          <article class="project">
            <h3>AI-Powered SQL Query Agent</h3>
            <p>LangChain • FastAPI • OpenAI • PostgreSQL</p>
            <ul>
              <li>Converted natural language prompts to SQL queries using GPT-4 with few-shot learning</li>
              <li>Added multi-layer validation to reduce SQL injection and logical errors by 94%</li>
              <li>Enabled non-technical stakeholders to query complex databases with conversational interface</li>
              <li>Implemented caching and query optimization for 10x faster response times</li>
            </ul>
          </article>

          <article class="project">
            <h3>Federated Learning Framework (Research)</h3>
            <p>PyTorch • RL Agents • IIoT Systems</p>
            <ul>
              <li>Developed RL-guided federated learning system for microgrid optimization</li>
              <li>Achieved 15% energy efficiency improvement in distributed smart grids</li>
              <li>Published research on bio-inspired neural power flow models</li>
              <li>Implemented privacy-preserving model training across heterogeneous devices</li>
            </ul>
          </article>

          <article class="project">
            <h3>Computer Vision Pipeline</h3>
            <p>PyTorch • OpenCV • Hugging Face</p>
            <ul>
              <li>Built end-to-end image processing pipeline with real-time object detection</li>
              <li>Integrated YOLOv8 for 95% accuracy on custom dataset with edge deployment</li>
              <li>Optimized models using quantization and pruning for mobile devices</li>
              <li>Deployed on AWS Lambda with 200ms latency SLA</li>
            </ul>
          </article>

          <article class="project">
            <h3>Real-time Chat Application</h3>
            <p>Next.js • WebSockets • MongoDB • Redis</p>
            <ul>
              <li>Built scalable real-time messaging platform supporting 10k+ concurrent users</li>
              <li>Implemented message encryption and user authentication with OAuth 2.0</li>
              <li>Added media sharing with automatic optimization and CDN distribution</li>
              <li>Deployed with Docker and Kubernetes for high availability</li>
            </ul>
          </article>

          <article class="project">
            <h3>Data Analytics Dashboard</h3>
            <p>React • D3.js • Python • PostgreSQL</p>
            <ul>
              <li>Created interactive dashboards for real-time business intelligence</li>
              <li>Connected 5+ data sources with ETL pipelines and automated syncing</li>
              <li>Built custom visualizations for stakeholder insights</li>
              <li>Reduced report generation time from 2 hours to 30 seconds</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="cols two">
        <article class="glass section">
          <h2>🔬 Research & Publications</h2>
          <ul class="list-card">
            <li><strong>RL-Guided Federated Learning for IIoT Microgrids</strong><br/>Published in IEEE Smart Grid Conference 2025</li>
            <li><strong>Hybrid AI Smart Grid using LLMs</strong><br/>Under review at ACM Transactions</li>
            <li><strong>Bio-Inspired Neural Power Flow Model</strong><br/>Patent pending, industry partnership</li>
          </ul>
        </article>

        <article class="glass section">
          <h2>🏅 Achievements & Awards</h2>
          <ul class="list-card ach">
            <li>🥇 Amazon ML Challenge - <strong>Top 1.5%</strong> (2024)</li>
            <li>🥉 ACM EpochOn Hackathon - <strong>3rd Prize</strong> (2024)</li>
            <li>🎖️ Meta Scalar Hackathon - <strong>Finalist</strong> (2024)</li>
            <li>📊 National Coding Championship - <strong>Rank 45</strong> (2023)</li>
          </ul>
        </article>
      </section>

      <footer>
        &copy; 2026 Mounish Senisetty • Crafted with passion for excellence • Open to opportunities
      </footer>
    </main>
  </div>
`;

export function mountPortfolio(target?: HTMLElement | null) {
  if (typeof document === "undefined") {
    return;
  }

  const root = target ?? document.body;
  if (!root) {
    return;
  }

  root.innerHTML = pageMarkup;
}

mountPortfolio();
