/* =====================================================
   COMPONENT: Contact Section
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- CONTACT -->
  <section id="contact">
    <div class="section-tag" style="justify-content:center;">Let's Connect</div>
    <h2 class="section-title reveal" style="text-align:center;">Open to <span>New Opportunities</span></h2>
    <p class="section-sub reveal" style="text-align:center;margin:0 auto 0;">Whether you're looking for a frontend developer, a mobile developer, or someone who can do both — let's talk.</p>
    <div class="contact-cards reveal">
      <a href="tel:+919825618764" class="contact-card">
        <div class="contact-icon">📱</div>
        <div>
          <div class="contact-label">Phone</div>
          <div class="contact-value">+91 98256 18764</div>
        </div>
      </a>
      <a href="mailto:honeyvalechha46@gmail.com" class="contact-card">
        <div class="contact-icon">✉️</div>
        <div>
          <div class="contact-label">Email</div>
          <div class="contact-value">honeyvalechha46@gmail.com</div>
        </div>
      </a>
      <a href="https://www.google.com/maps/search/?api=1&amp;query=Gandhidham%2C%20Gujarat" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="View Gandhidham, Gujarat on Google Maps">
        <div class="contact-icon">📍</div>
        <div>
          <div class="contact-label">Location</div>
          <div class="contact-value">Gandhidham, Gujarat · Open to Relocate</div>
        </div>
      </a>
    </div>

    <!-- Resume Download -->
    <div class="reveal" style="text-align:center;margin-top:48px;">
      <p style="color:var(--muted);margin-bottom:16px;font-size:0.95rem;">Want a copy of my resume?</p>
      <a href="resume/hemanshi_valechha_resume.pdf" download="Hemanshi_Valechha_Resume.pdf" class="btn-primary" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;">
        <span>📄</span> Download Resume
      </a>
    </div>
  </section>
  `);
})();
