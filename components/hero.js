/* =====================================================
   COMPONENT: Hero Section
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- HERO -->
  <section id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>

    <div class="hero-content">
      <div class="hero-tag">Frontend & Mobile Developer</div>
      <h1 class="hero-name">
        Hemanshi<br><span>Valechha</span>
      </h1>
      <p class="hero-role">
        Developer @ <strong>Samyak Tech Labs</strong> · Based in <a class="hero-location" href="https://www.google.com/maps/search/?api=1&amp;query=Gandhidham%2C%20Gujarat" target="_blank" rel="noopener noreferrer" aria-label="View Gandhidham, Gujarat on Google Maps">Gandhidham, Gujarat</a>
      </p>
      <p class="hero-desc">
        Building polished iOS apps and frontend experiences — from UI design to App Store delivery.
        3+ years shipping production apps with clean architecture, smooth UX, and zero corners cut.
      </p>
      <div class="hero-ctas">
        <a href="#projects" class="btn-primary">View My Work ↓</a>
        <a href="#contact" class="btn-outline">Get In Touch</a>
        <a href="resume/hemanshi_valechha_resume.pdf" download="Hemanshi_Valechha_Resume.pdf" class="btn-outline" style="margin-left:0;">Download Resume ↓</a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="stat-num">3+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div>
          <div class="stat-num">5+</div>
          <div class="stat-label">Apps Delivered</div>
        </div>
        <div>
          <div class="stat-num">40%</div>
          <div class="stat-label">Crash Reduction</div>
        </div>
        <div>
          <div class="stat-num">60%</div>
          <div class="stat-label">Perf. Improved</div>
        </div>
      </div>
    </div>

    <div class="hero-visual">
      <div class="avatar-container">
        <div class="avatar-ring"></div>
        <div class="avatar-ring2"></div>
        <div class="avatar-base-circle"></div>
        <div class="avatar-half-inside">
          <img src="images/hemanshi.png" alt="Hemanshi Valechha">
        </div>
        <div class="chip chip-1"><span class="chip-dot"></span>Swift &amp; SwiftUI</div>
        <div class="chip chip-2"><span class="chip-dot"></span>Frontend Dev</div>
      </div>
    </div>
  </section>
  `);
})();
