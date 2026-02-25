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

      <!-- CalyzaTech -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot sap"></div>
          <div class="timeline-date sap">Current Role</div>
          <div class="timeline-company">CalyzaTech · Ahmedabad</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer (SAP &amp; Enterprise Mobile)</div>
          <ul class="timeline-points">
            <li class="sap">Developed SAP-integrated iOS demo application covering MM, SD, and PM modules with OData and
              RFC connectivity for client demonstrations</li>
            <li class="sap">Implemented SAP Fiori-inspired UI design in SwiftUI, enabling enterprise clients to
              visualize SAP data on native iOS</li>
            <li class="sap">Built offline-first sync architecture with Core Data for SAP data persistence and delta sync
              on reconnection</li>
          </ul>
        </div>
      </div>

      <!-- Sayamak Techlabs -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot" style="border-color:#f0c040;box-shadow:0 0 12px rgba(240,192,64,0.4);"></div>
          <div class="timeline-company" style="margin-top:4px;">Sayamak Techlabs · Freelance</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer — Freelance</div>
          <ul class="timeline-points">
            <li style="color:var(--text);">Built <strong>Jain Panchang Community App</strong> in SwiftUI with MVVM — a
              full-featured Jain calendar covering festivals, Sangh management, Hora timings, donations, and community
              rules</li>
            <li>Implemented full Jain Panchang engine with Tithi calculations, Parva reminders, and auspicious hora
              timings using Combine reactive data flow</li>
            <li>Designed Sangh management module with member directory, committee roles, and community announcements via
              Firebase Firestore</li>
            <li>Built donation tracking system (Navkarshi, Ekasana, Biyasana) with receipt generation and yearly
              financial summary reports</li>
            <li>Configured push notification system for all major Jain festivals — Paryushana, Mahavir Jayanti, Navpad
              Oli, Akshaya Tritiya</li>
          </ul>
        </div>
      </div>

      <!-- Xceltec -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Jan 2025 – Sept 2025</div>
          <div class="timeline-company">Xceltec Interactive · Ahmedabad</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer</div>
          <ul class="timeline-points">
            <li>Delivered 4 interconnected iOS apps (POS, Customer Display, User, Driver) serving 1000+ daily users</li>
            <li>Built real-time data sync with Alamofire achieving 99.5% API success rate; reduced technical debt by 30%</li>
            <li>Integrated payment gateways (Razorpay, Pine Labs) and GPS tracking; managed end-to-end App Store releases</li>
            <li>Built healthcare apps with MVVM and reactive programming — reduced crash rate by 40%</li>
          </ul>
        </div>
      </div>

      <!-- Prismetric -->
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot"></div>
          <div class="timeline-date">Jan 2023 – Dec 2024</div>
          <div class="timeline-company">Prismetric Pvt Ltd · Ahmedabad</div>
        </div>
        <div class="timeline-right">
          <div class="timeline-role">iOS Developer</div>
          <ul class="timeline-points">
            <li>Developed multi-tenant service marketplace with MVC; improved performance by 60% through targeted
              optimization</li>
            <li>Designed type-safe RESTful API integration using Codable with Core Location and MapKit</li>
            <li>Configured APNs and FCM push notifications; mentored 2 junior developers on Swift best practices</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  `);
})();
