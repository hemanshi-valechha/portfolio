/* =====================================================
   COMPONENT: Projects Section
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- PROJECTS -->
  <section id="projects">
    <div class="section-tag">Key Projects</div>
    <h2 class="section-title">What I've <span>Built</span></h2>
    <p class="section-sub">A selection of enterprise mobile applications — from SAP-connected field apps to real-time
      consumer platforms.</p>

    <div class="projects-grid">

      <!-- SAP Project -->
      <div class="project-card sap-card reveal">
        <div class="project-header">
          <div class="project-icon sap">🏭</div>
          <span class="project-badge sap">SAP Mobile</span>
        </div>
        <div class="project-name">SAP Enterprise iOS Application</div>
        <div class="project-desc">End-to-end iOS application integrated with SAP ERP — built as a client demo at
          CalyzaTech. Covers MM, SD, and PM modules with real-time OData connectivity, offline capability, and
          Fiori-inspired UI design.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">SwiftUI</span>
          <span class="tech-tag">SAP OData</span>
          <span class="tech-tag">RFC</span>
          <span class="tech-tag">Core Data</span>
          <span class="tech-tag">OAuth 2.0</span>
        </div>
        <div class="project-metric">Real-time SAP ERP data on mobile · Offline-first sync</div>
      </div>

      <!-- Restaurant POS -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🍽️</div>
          <span class="project-badge">4 iOS Apps</span>
        </div>
        <div class="project-name">Restaurant Management System</div>
        <div class="project-desc">Suite of 4 interconnected apps (POS, Customer Display, User App, Driver App) serving
          1000+ daily active users. Real-time data sync with Razorpay &amp; Pine Labs payment integration and live GPS
          tracking.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">UIKit</span>
          <span class="tech-tag">Alamofire</span>
          <span class="tech-tag">MapKit</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">Razorpay</span>
        </div>
        <div class="project-metric">99.5% API success rate · 30% reduced tech debt</div>
      </div>

      <!-- Healthcare -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🏥</div>
          <span class="project-badge">Healthcare</span>
        </div>
        <div class="project-name">Healthcare Management System</div>
        <div class="project-desc">HIPAA-conscious healthcare app with MVVM architecture and reactive programming via
          Combine. Firebase Auth + Firestore with full offline sync. Reduced crash rate by 40% through systematic
          performance optimization.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Combine</span>
          <span class="tech-tag">Firebase Auth</span>
          <span class="tech-tag">Firestore</span>
          <span class="tech-tag">Auto Layout</span>
        </div>
        <div class="project-metric">40% crash reduction · Offline sync enabled</div>
      </div>

      <!-- Marketplace -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🛒</div>
          <span class="project-badge">Marketplace</span>
        </div>
        <div class="project-name">Service Provider Marketplace</div>
        <div class="project-desc">Multi-tenant service marketplace with MVC architecture. Type-safe networking using
          Codable, Core Location for geo-based matching, and APNs/FCM push notifications. Mentored 2 junior developers
          on best practices.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVC</span>
          <span class="tech-tag">Core Location</span>
          <span class="tech-tag">APNs</span>
          <span class="tech-tag">FCM</span>
          <span class="tech-tag">Codable</span>
        </div>
        <div class="project-metric">60% performance improvement through optimization</div>
      </div>

      <!-- Real-time Chat -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">💬</div>
          <span class="project-badge">Real-time</span>
        </div>
        <div class="project-name">Real-Time Chat Application</div>
        <div class="project-desc">Full-featured messaging app with MVVM architecture. Firebase Auth and Firestore with
          offline persistence. Protocol-oriented reusable UI components. Achieved 70% unit test code coverage with
          XCTest.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">XCTest</span>
          <span class="tech-tag">Protocol-oriented</span>
        </div>
        <div class="project-metric">70% code coverage · Offline persistence enabled</div>
      </div>

      <!-- Jain Panchang — spans all 3 columns -->
      <div class="project-card jain-card reveal" style="grid-column: span 3;">
        <div class="jain-top-row">
          <div class="jain-info">
            <div class="project-name" style="font-size:1.15rem;">🕉️ &nbsp;Jain Panchang — Community Calendar App</div>
            <div class="project-desc" style="font-size:0.88rem;max-width:680px;">A comprehensive Jain community
              application built in <strong style="color:var(--text);">SwiftUI with MVVM architecture</strong>, serving
              the Jain community with a rich feature set covering sacred festivals, Sangh management, Hora timings,
              events, community rules, and donation tracking — all powered by the authentic Jain Panchang lunar
              calendar system.
            </div>
            <div class="project-tech" style="margin-top:14px;">
              <span class="tech-tag">SwiftUI</span>
              <span class="tech-tag">MVVM</span>
              <span class="tech-tag">Combine</span>
              <span class="tech-tag">Core Data</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Swift Charts</span>
              <span class="tech-tag">UserNotifications</span>
              <span class="tech-tag">JSON Parsing</span>
            </div>
            <div class="project-metric" style="margin-top:14px;">Full Jain Panchang engine · Push alerts for Parvas · Sangh community management</div>
          </div>
          <div class="jain-badge-col">
            <span class="project-badge" style="background:rgba(255,200,80,0.12);color:#f0c040;border-color:rgba(255,200,80,0.28);">Freelance</span>
            <span class="project-badge" style="background:rgba(255,200,80,0.08);color:#f0c040;border-color:rgba(255,200,80,0.2);margin-top:8px;">Sayamak Techlabs</span>
          </div>
        </div>
        <div class="jain-chips-strip">
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">📅</div>
            <div class="jain-feat-name">Paryushana Parva</div>
            <div class="jain-feat-sub">8–10 day festival tracker with daily rituals &amp; Samvatsari reminders</div>
          </div>
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">🌙</div>
            <div class="jain-feat-name">Hora &amp; Tithi</div>
            <div class="jain-feat-sub">Hour-by-hour Hora listings &amp; auspicious timings per Jain Panchang</div>
          </div>
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">🏛️</div>
            <div class="jain-feat-name">Sangh Management</div>
            <div class="jain-feat-sub">Members, committees, Trustees, roles &amp; community announcements</div>
          </div>
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">💛</div>
            <div class="jain-feat-name">Donations &amp; Dana</div>
            <div class="jain-feat-sub">Track donations, generate receipts &amp; yearly Sangh summaries</div>
          </div>
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">📖</div>
            <div class="jain-feat-name">Jain Niyam &amp; Rules</div>
            <div class="jain-feat-sub">Dietary rules, fasting types &amp; Paushadh guidelines</div>
          </div>
          <div class="jain-feat-chip">
            <div class="jain-feat-icon">🔔</div>
            <div class="jain-feat-name">Festival Alerts</div>
            <div class="jain-feat-sub">Push alerts for Mahavir Jayanti, Navpad Oli, Diwali &amp; all Parvas</div>
          </div>
        </div>
      </div>

    </div>
  </section>
  `);
})();
