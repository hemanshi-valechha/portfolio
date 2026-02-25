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
      <div class="hero-tag">iOS &amp; SAP Mobile Developer</div>
      <h1 class="hero-name">
        Hemanshi<br><span>Valechha</span>
      </h1>
      <p class="hero-role">
        Senior iOS Developer @ <strong>CalyzaTech</strong> · Ahmedabad, Gujarat
      </p>
      <p class="hero-desc">
        Building enterprise-grade iOS applications with deep expertise in SAP mobile integration
        and native Swift development. 3+ years delivering high-impact solutions for 1000+ daily active users.
      </p>
      <div class="hero-ctas">
        <a href="#sap" class="btn-primary">View SAP Work ↓</a>
        <a href="#contact" class="btn-outline">Get In Touch</a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="stat-num">3+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div>
          <div class="stat-num">5+</div>
          <div class="stat-label">Apps Published</div>
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
          <img src="images/hemanshi.png" alt="Hemanshi">
        </div>
        <div class="chip chip-1"><span class="chip-dot"></span>Swift Expert</div>
        <div class="chip chip-2"><span class="chip-dot"></span>SAP Mobile</div>
      </div>
      <div class="company-badge">
        <div class="company-icon">C</div>
        <div>
          <div class="company-name">CalyzaTech</div>
          <div class="company-sub">Enterprise SAP Integration Partner</div>
        </div>
      </div>
    </div>
  </section>
  `);
})();
