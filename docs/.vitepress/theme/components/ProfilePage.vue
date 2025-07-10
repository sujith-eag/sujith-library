<template>
    <div class="profile-container">
      <div class="profile-card">
  
        <!-- Avatar + Name -->
        <div class="image-name-card">
          <img src="/sujith_1.jpg" alt="Sujith's Avatar" class="avatar" />
          <div>
            <h1>Sujith Kumar</h1>
            <p class="tagline">Full-stack Developer | Cyber Security Enthusiast</p>
          </div>
        </div>
  
        <p class="bio">
          I’m passionate about building scalable web apps, exploring cybersecurity concepts, and
          continuously evolving as a developer. I love working with JavaScript, React, Vue, and backend APIs.
        </p>
  
        <!-- Section Cards -->
        <div class="section-card">
          <h3>💼 Links</h3>
          <div class="info-list">
            <a href="https://github.com/sujith-eag" target="_blank"><img src="/logo/github-w.svg" alt="GitHub" /> GitHub</a>
            <a href="mailto:sujith.eag@gmail.com"><img src="/logo/gmail.svg" alt="Email" /> Email</a>
            <a href="https://www.linkedin.com/in/sujith-eag/"><img src="/logo/linkedin_c.svg" alt="LinkedIn" /> LinkedIn</a>
            <!-- <a href="/sujith_resume_1.pdf" target="_blank"><img src="/logo/resume.svg" alt="Resume" /> Resume</a> -->
          </div>
        </div>
    
        <div class="section-card">
          <h3>🧩 Technical Skills</h3>
          <ul class="skills-list">
            <li><b>Languages:</b> C, Bash, Java, Python, SQL, MongoDB</li>
            <li><b>Web Development:</b> React.js, Vue.js, Flask, TypeScript, JavaScript, HTML/CSS</li>
            <li><b>Tools & Libraries:</b> NumPy, Matplotlib, GitHub, VS Code, IntelliJ, Node.js, Obsidian, LaTeX</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h3>📂 Projects</h3>
          <ul class="project-list">
            <li>
              <b>Sujith’s Library</b> – Vue.js, TypeScript, Vite, VitePress, GitHub Actions<br />
              Maintains a 600+ page programming site with code, notes, and visuals. Open-source & auto-deployed.
            </li>
            <li>
              <b>Note’s Library</b> – Hugo, GitHub Pages<br />
              Personal note-based site on programming concepts with searchable topic catalog.
            </li>
          </ul>
        </div>
  
        <div class="section-card">
          <h3>🎓 Education</h3>
          <ul class="edu-list">
            <li><b>MCA</b>, MSRIT – CGPA: 9.66 (2024–2026)</li>
            <li><b>B.Ed</b>, SKC (BNU) – CGPA: 8.86 (2018–2020)</li>
            <li><b>B.Sc (PCM)</b>, SKC (BU) – 56.3% (2011–2014)</li>
            <li><b>PUC (PCMB)</b>, SKC – 51.0% (2009–2011)</li>
            <li><b>SSLC</b>, MABL – 78.1% (2009)</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h3>📚 Publications</h3>
          <ul class="pubs">
            <li><b>Adaptive Chaos-Based Encryption</b>, SRC-2025, Dayananda Sagar</li>
            <li><b>Cryptography via Graph Structures</b>, Case Study, MSRIT</li>
          </ul>
        </div>
  
        <div class="section-card">
          <h3>🛠 Workshops & Trainings</h3>
          <p>
            <b>IoT 4.0:</b> Industry-focused IoT workshop on NodeMCU, Arduino, and sensor automation using Python.
          </p>
        </div>
  
        <div class="section-card">
          <h3>🎯 Goals</h3>
          <p>
            Continue building real-world apps, contribute to open-source projects, and dive deeper into system design and backend engineering.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .profile-container {
  --bg-light: #f8f9fa;
  --bg-dark: #1e1e1e;

  --card-light: #ffffff;
  --card-dark: #2a2a2a;

  --text-light: #212529;
  --text-dark: #f1f1f1;

  --subtext-light: #6c757d;
  --subtext-dark: #b0b0b0;

  --link-light: #0077cc;
  --link-dark: #66aaff;

  --hover-light: #e6f0ff;
  --hover-dark: #3a3a3a;

  --divider-light: #ddd;
  --divider-dark: #444;
  }
  
  .profile-container {
    display: flex;
    justify-content: center;
    padding: 3rem;
    border-radius: 12px;
    background: var(--bg-light);
    max-width:fit-content
    /* background: #f2f2f2; */
    /* background: #3c4148; */
  }
  
  html.dark .profile-container{
    background: var(--bg-dark);
    /* background: #2a2d32; */
  }
  
  .profile-card {
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    border-radius: 12px;
    background: var(--card-light);
    /* background: #ffffff; */
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-light);
  }
  
  html.dark .profile-card {
  /* background: #1f1f1f; */
  /* color: #e0e0e0; */
  /* color: #c71515; */
  background: var(--card-dark);
  color: var(--text-dark);
}
  
  .image-name-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin: 0;
  }
  
  .tagline {
    font-style: italic;
    color: var(--subtext-light);
    /* color: #666; */
    margin-top: 0.3rem;
  }
  
  html.dark .tagline {
    color: var(--subtext-dark);
    /* color: #aaa; */
  }
  
  .bio {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--text-light);
    /* color: #333; */
  }
  
  html.dark .bio {
    color: var(--text-dark);
    /* color: #ccc; */
  }
  
  .section-card {
    margin-bottom: 1rem;
    padding: 1.5rem;
    background: #f1f1f1;
    /* background: #e6e6e6; */
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    /* box-shadow: 0 1px 4px rgba(118, 111, 111, 0.5); */
  }

  html.dark .section-card {
    background: #2e2e2e;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  /* background: #2f2f2f;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6); */
  }

  .section-card h3 {
    /* all: unset; */
    margin-bottom: 1rem;
    margin-top: 0.2rem;
    color: var(--text-light);
    /* color: #2c3e50; */
    font-size: 1.2rem;
    /* border-bottom: 1px solid #ddd; */
    border-bottom: 1px solid var(--divider-light);
    padding-bottom: 0.5rem;
  
  }
  
  html.dark .section-card h3 {
  /* color: #ddd; */
  color: var(--text-dark);
  border-bottom: 1px solid var(--divider-dark);
  /* border-bottom: 1px solid #444; */
  }

  .info-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  /* justify-content: center; */
  align-items: center;
  margin-top: 1.4rem;
}

.info-list a {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-decoration: none;
  color: var(--link-light);
  /* color: #007acc; */
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  /* background: #f0f4f8; */
  background: #eef5fa;
  border-radius: 8px;
  transition: background 0.2s ease;
}

html.dark .info-list a {
  /* background: #444; */
  background: #3a3a3a;
  color: var(--link-dark);
  /* color: #66aaff; */
}

.info-list a:hover {
  /* background: #e1effc; */
  background: var(--hover-light);
}

html.dark .info-list a:hover {
  /* background: #555; */
  background: var(--hover-dark);
}

.info-list img {
  width: 24px;
  height: 24px;
  margin: 0;
}
   
.skills-list, 
.project-list, 
.edu-list, 
.pubs {
    list-style: none;
    padding-left: 0;
}

.skills-list li, 
.project-list li, 
.edu-list li, 
.pubs li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

@media (max-width: 600px) {
  .profile-container {
    padding: 1rem;
  }

  .image-name-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .info-list {
    justify-content: center;
  }
  .info-list img{
    height: 18px;
    width: 18px;
  }
  .profile-card {
    font-size: 0.9rem;
  }
}

</style>
