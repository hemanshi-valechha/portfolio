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
    <p class="section-sub">A selection of real-world applications — from vehicle tracking platforms to community apps — all built, tested, and shipped.</p>

    <div class="projects-grid">

      <!-- Vehicle Management App -->
      <div class="project-card reveal" style="grid-column: span 2;">
        <div class="project-header">
          <div class="project-icon" style="background:rgba(99,179,237,0.12);border-color:rgba(99,179,237,0.25);">🚗</div>
          <span class="project-badge" style="background:rgba(99,179,237,0.1);color:var(--accent);border-color:rgba(99,179,237,0.25);">Samyak Tech Labs</span>
        </div>
        <div class="project-name">Vehicle Management App</div>
        <div class="project-desc">A full-featured vehicle management iOS app that helps users track their vehicles, manage service history, monitor fuel expenses, and stay on top of insurance and document renewals. Built entirely in SwiftUI with a clean, intuitive interface and offline-first local data management.</div>
        <div class="project-tech">
          <span class="tech-tag">SwiftUI</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Core Data</span>
          <span class="tech-tag">Local Caching</span>
          <span class="tech-tag">Charts</span>
          <span class="tech-tag">UserNotifications</span>
          <span class="tech-tag">AI Integration</span>
        </div>
        <div class="project-metric">Full dev lifecycle · UI design → code → test → App Store live</div>
      </div>

      <!-- Jain Community App 1 -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon" style="background:rgba(240,192,64,0.12);border-color:rgba(240,192,64,0.25);">🕉️</div>
          <span class="project-badge" style="background:rgba(240,192,64,0.1);color:#f0c040;border-color:rgba(240,192,64,0.25);">Samyak Tech Labs</span>
        </div>
        <div class="project-name">Jain Community App — Panchang &amp; Events</div>
        <div class="project-desc">A comprehensive Jain community platform featuring a full Panchang calendar, festival reminders, Hora timings, Tithi listings, and community event management. Built with SwiftUI and MVVM, backed by local data caching for offline access.</div>
        <div class="project-tech">
          <span class="tech-tag">SwiftUI</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Core Data</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">UserNotifications</span>
          <span class="tech-tag">Combine</span>
        </div>
        <div class="project-metric">Festival push alerts · Offline calendar · Live on App Store</div>
      </div>

      <!-- Jain Community App 2 -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon" style="background:rgba(240,192,64,0.12);border-color:rgba(240,192,64,0.25);">🏛️</div>
          <span class="project-badge" style="background:rgba(240,192,64,0.1);color:#f0c040;border-color:rgba(240,192,64,0.25);">Samyak Tech Labs</span>
        </div>
        <div class="project-name">Jain Community App — Sangh &amp; Donations</div>
        <div class="project-desc">A community management app for Jain Sanghs covering member directories, committee roles, donation tracking, receipt generation, and yearly financial summaries. Designed with a focus on ease of use for all age groups, delivered as a production app to the client.</div>
        <div class="project-tech">
          <span class="tech-tag">SwiftUI</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Firebase Firestore</span>
          <span class="tech-tag">Core Data</span>
          <span class="tech-tag">Swift Charts</span>
          <span class="tech-tag">PDF Generation</span>
        </div>
        <div class="project-metric">Member management · Donation receipts · Client delivered</div>
      </div>

      <!-- Restaurant Management -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🍽️</div>
          <span class="project-badge">4 iOS Apps</span>
        </div>
        <div class="project-name">Restaurant Management System</div>
        <div class="project-desc">Suite of four connected iOS apps for restaurant POS, customer display, ordering, and delivery. Integrated backend APIs with Alamofire, Razorpay and Pine Labs payments, and MapKit tracking for delivery workflows.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">UIKit</span>
          <span class="tech-tag">MVC</span>
          <span class="tech-tag">Alamofire</span>
          <span class="tech-tag">MapKit</span>
          <span class="tech-tag">Razorpay</span>
        </div>
        <div class="project-metric">Four connected apps · Payments · Delivery tracking</div>
      </div>

      <!-- Healthcare -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🏥</div>
          <span class="project-badge">Healthcare</span>
        </div>
        <div class="project-name">Healthcare Management System</div>
        <div class="project-desc">Doctor and patient iOS apps built with MVVM, Firebase Auth, and Firestore offline sync. Reduced crash rate by 40% through Instruments-based performance profiling and memory leak resolution.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">Auto Layout</span>
          <span class="tech-tag">XCTest</span>
        </div>
        <div class="project-metric">40% crash reduction · Offline sync · Role-based access</div>
      </div>

      <!-- Service Marketplace -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">🛒</div>
          <span class="project-badge">Marketplace</span>
        </div>
        <div class="project-name">Service Provider Marketplace</div>
        <div class="project-desc">Multi-tenant service platform connecting property owners with local service providers. Type-safe networking with Codable, geo-based matching using Core Location and MapKit, APNs/FCM push notifications, and StoreKit in-app purchases.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVC</span>
          <span class="tech-tag">Core Location</span>
          <span class="tech-tag">APNs / FCM</span>
          <span class="tech-tag">Codable</span>
          <span class="tech-tag">StoreKit</span>
        </div>
        <div class="project-metric">60% performance improvement · Location-based matching</div>
      </div>

      <!-- Chat App -->
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">💬</div>
          <span class="project-badge">Personal Project</span>
        </div>
        <div class="project-name">Real-Time Chat Application</div>
        <div class="project-desc">Full-featured messaging app with MVVM architecture. Firebase Auth and Firestore for real-time sync with offline persistence. Protocol-oriented reusable UI components with custom table views. Achieved 70% unit test code coverage with XCTest.</div>
        <div class="project-tech">
          <span class="tech-tag">Swift</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Firebase</span>
          <span class="tech-tag">XCTest</span>
          <span class="tech-tag">FCM</span>
          <span class="tech-tag">Offline Persistence</span>
        </div>
        <div class="project-metric">70% code coverage · Real-time sync · Offline enabled</div>
      </div>

    </div>
  </section>
  `);
})();
