/* =====================================================
   COMPONENT: Experience Timeline
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- EXPERIENCE -->
  <section id="experience" style="background:var(--surface);">
    <div class="section-tag">Work Experience</div>
    <h2 class="section-title reveal">Career <span>Timeline</span></h2>

    <div class="timeline reveal">

      <!-- Samyak Tech Labs — Current -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot" style="border-color:var(--accent);box-shadow:0 0 12px rgba(99,179,237,0.4);"></div>
          <div class="timeline-date" style="color:var(--accent);">Jan 2026 – Present</div>
        <div class="timeline-company"><a href="https://samyaktechlabs.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Samyak Tech Labs website">Samyak Tech Labs</a> · Mumbai (Remote)</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">Frontend &amp; Mobile Developer</div>
          <ul class="timeline-points">
            <li>Owned full development lifecycle across 3 live applications — from UI design and coding to QA, App Store upload, and client delivery</li>
            <li>Designed and built app UIs from scratch using <strong>SwiftUI</strong>, applying modern layout patterns, custom components, and smooth animations</li>
            <li>Implemented <strong>MVVM architecture</strong> across all projects, ensuring clean separation of concerns and testable, maintainable code</li>
            <li>Built local data persistence and caching layers using <strong>Core Data</strong> and <strong>UserDefaults</strong> for offline-first experiences</li>
            <li>Used <strong>AI-assisted workflows</strong> to explore UI options and speed up repetitive development tasks</li>
            <li>Structured projects with scalable folder organisation, reusable components, and consistent naming conventions</li>
            <li>Managed <strong>App Store Connect</strong> submissions end-to-end — build uploads, metadata, screenshots, review responses, and release management</li>
            <li>Collaborated directly with clients to gather requirements, iterate on feedback, and deliver polished final products</li>
          </ul>
        </div>
      </div>

      <!-- Xceltec -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Jan 2025 – Sep 2025</div>
          <div class="timeline-company"><a href="https://www.xceltec.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Xceltec Interactive website">Xceltec Interactive</a> · Ahmedabad</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer</div>
          <ul class="timeline-points">
            <li>Delivered four connected iOS apps for restaurant POS, customer display, ordering, and delivery workflows</li>
            <li>Integrated backend APIs with Alamofire and coordinated data updates across the restaurant apps</li>
            <li>Integrated payment gateways (Razorpay, Pine Labs) and live GPS tracking via MapKit; managed full App Store release cycle</li>
            <li>Developed doctor and patient apps with MVVM and Firebase — reduced crash rate by <strong>40%</strong></li>
            <li>Implemented Firebase Auth, Firestore with offline sync, and responsive Auto Layout UI for iPhone and iPad</li>
            <li>Mentored 2 junior developers through code reviews and pair programming sessions</li>
          </ul>
        </div>
      </div>

      <!-- Prismetric -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Jan 2023 – Dec 2024</div>
          <div class="timeline-company"><a href="https://www.prismetric.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Prismetric website">Prismetric Pvt Ltd</a> · Ahmedabad</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer</div>
          <ul class="timeline-points">
            <li>Built a multi-tenant Service Provider Marketplace with MVC architecture; improved performance by <strong>60%</strong> through lazy loading and memory optimisation</li>
            <li>Designed type-safe RESTful API layer using URLSession and Codable; integrated Core Location and MapKit for geo-based service matching</li>
            <li>Configured APNs and Firebase Cloud Messaging for push notifications; implemented StoreKit in-app purchases</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  `);
})();
