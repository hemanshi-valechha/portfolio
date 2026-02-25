/* =====================================================
   COMPONENT: SAP Mobile Section (with screenshot carousel)
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- SAP SECTION -->
  <section id="sap">
    <div class="section-tag">SAP Mobile Development</div>

    <div class="sap-hero reveal">
      <div>
        <div class="sap-badge-big">🏭 Enterprise SAP Integration</div>
        <h2 class="sap-title">Native iOS Apps Connected to <span>SAP Ecosystem</span></h2>
        <p class="sap-desc">
          At CalyzaTech, I developed a custom SAP-integrated iOS mobile application as a client demonstration —
          showcasing how iOS apps can seamlessly connect with SAP ERP, SAP Fiori, and OData services to enable
          real-time enterprise data access on mobile devices.
        </p>
        <div class="sap-features">
          <div class="sap-feature">
            <div class="sap-feature-icon">🔗</div>
            <div>
              <div class="sap-feature-title">SAP OData &amp; RFC Integration</div>
              <div class="sap-feature-desc">Connected iOS app to SAP backend via OData v2/v4 services and RFC function
                modules, enabling real-time synchronization of ERP data including inventory, sales orders, and
                production records.</div>
            </div>
          </div>
          <div class="sap-feature">
            <div class="sap-feature-icon">📊</div>
            <div>
              <div class="sap-feature-title">SAP Fiori-Inspired Mobile UI</div>
              <div class="sap-feature-desc">Designed and implemented Fiori-aligned iOS interfaces using SwiftUI,
                providing SAP users a native mobile experience consistent with enterprise Fiori design principles.</div>
            </div>
          </div>
          <div class="sap-feature">
            <div class="sap-feature-icon">🔐</div>
            <div>
              <div class="sap-feature-title">SAP Authentication &amp; Security</div>
              <div class="sap-feature-desc">Integrated SAP SSO, OAuth 2.0 with SAP BTP Identity Provider, and secure
                session management following SAP enterprise security standards.</div>
            </div>
          </div>
          <div class="sap-feature">
            <div class="sap-feature-icon">⚡</div>
            <div>
              <div class="sap-feature-title">Offline-First Architecture</div>
              <div class="sap-feature-desc">Built delta-sync mechanism with Core Data for offline SAP data access,
                enabling field workers to continue operations without network connectivity and sync on reconnection.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SAP APP SCREENSHOT CAROUSEL -->
      <div class="sap-screen-panel">
        <div class="sap-carousel-row">
          <button class="carousel-btn prev" id="carouselPrev" aria-label="Previous">&#8249;</button>

          <div class="sap-carousel" id="sapCarousel">
            <div class="sap-carousel-track" id="sapCarouselTrack">
              <div class="sap-carousel-slide">
                <img src="images/sap_login.png" alt="SAP Approval Hub — Login screen" loading="lazy">
              </div>
              <div class="sap-carousel-slide">
                <img src="images/sap_dashboard.png" alt="SAP Approval Hub — Dashboard" loading="lazy">
              </div>
              <div class="sap-carousel-slide">
                <img src="images/sap_approvals.png" alt="SAP Approval Hub — Approvals list" loading="lazy">
              </div>
              <div class="sap-carousel-slide">
                <img src="images/sap_approval_detail.png" alt="SAP Approval Hub — Approval detail" loading="lazy">
              </div>
              <div class="sap-carousel-slide">
                <img src="images/sap_documents.png" alt="SAP Approval Hub — Documents screen" loading="lazy">
              </div>
              <div class="sap-carousel-slide">
                <img src="images/sap_doc_detail.png" alt="SAP Approval Hub — Document detail" loading="lazy">
              </div>
            </div>
          </div>

          <button class="carousel-btn next" id="carouselNext" aria-label="Next">&#8250;</button>
        </div>

        <div class="slide-label" id="slideLabel">Login Screen · 1 / 6</div>

        <div class="carousel-dots" id="carouselDots">
          <button class="carousel-dot active" data-index="0" aria-label="Slide 1"></button>
          <button class="carousel-dot" data-index="1" aria-label="Slide 2"></button>
          <button class="carousel-dot" data-index="2" aria-label="Slide 3"></button>
          <button class="carousel-dot" data-index="3" aria-label="Slide 4"></button>
          <button class="carousel-dot" data-index="4" aria-label="Slide 5"></button>
          <button class="carousel-dot" data-index="5" aria-label="Slide 6"></button>
        </div>
      </div>
    </div>

    <!-- SAP Modules Grid -->
    <div class="reveal">
      <h3 style="font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:24px;">
        SAP Modules Integrated in iOS Application
      </h3>
      <div class="sap-modules">
        <div class="sap-module">
          <div class="sap-module-icon">🏭</div>
          <div class="sap-module-name">SAP MM (Materials)</div>
          <div class="sap-module-desc">Real-time inventory lookup, goods receipt, stock transfer orders — all from iOS
            with barcode scanning integration.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">OData</span>
            <span class="sap-module-tag">Barcode</span>
            <span class="sap-module-tag">Offline Sync</span>
          </div>
        </div>
        <div class="sap-module">
          <div class="sap-module-icon">💼</div>
          <div class="sap-module-name">SAP SD (Sales)</div>
          <div class="sap-module-desc">Field sales order creation, customer master data access, and pricing conditions
            via native iOS forms.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">RFC</span>
            <span class="sap-module-tag">CRM</span>
            <span class="sap-module-tag">Approvals</span>
          </div>
        </div>
        <div class="sap-module">
          <div class="sap-module-icon">🔧</div>
          <div class="sap-module-name">SAP PM (Plant Maint.)</div>
          <div class="sap-module-desc">Work order management, equipment notifications, and maintenance checklists for
            field technicians on iOS.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">Work Orders</span>
            <span class="sap-module-tag">GPS</span>
            <span class="sap-module-tag">Photo Upload</span>
          </div>
        </div>
        <div class="sap-module">
          <div class="sap-module-icon">📋</div>
          <div class="sap-module-name">SAP HR / HCM</div>
          <div class="sap-module-desc">Employee self-service, leave applications, attendance marking, and payslip
            access via mobile app.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">ESS/MSS</span>
            <span class="sap-module-tag">Biometric</span>
            <span class="sap-module-tag">Push Alerts</span>
          </div>
        </div>
        <div class="sap-module">
          <div class="sap-module-icon">📊</div>
          <div class="sap-module-name">SAP Analytics</div>
          <div class="sap-module-desc">Live KPI dashboards, SAP Analytics Cloud integration, and custom Charts
            framework for executive reporting.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">SAP AC</span>
            <span class="sap-module-tag">Charts</span>
            <span class="sap-module-tag">Drill-down</span>
          </div>
        </div>
        <div class="sap-module">
          <div class="sap-module-icon">🔐</div>
          <div class="sap-module-name">SAP BTP &amp; Auth</div>
          <div class="sap-module-desc">SAP Business Technology Platform integration, SSO with Corporate IDP, and
            role-based access control.</div>
          <div class="sap-module-tags">
            <span class="sap-module-tag">BTP</span>
            <span class="sap-module-tag">SSO</span>
            <span class="sap-module-tag">RBAC</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
})();
