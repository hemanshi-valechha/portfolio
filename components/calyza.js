/* =====================================================
   COMPONENT: CalyzaTech Section
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- CALYZA TECH -->
  <section id="calyza">
    <div class="section-tag">Our Company</div>
    <div class="calyza-grid reveal">
      <div>
        <h2 class="section-title">CalyzaTech —<br><span>SAP Integration Partner</span></h2>
        <p style="color:var(--muted);line-height:1.8;margin-bottom:36px;">CalyzaTech is a specialized enterprise solutions provider
          delivering mission-critical mobile applications across Manufacturing, Healthcare, Logistics, and
          FinTech. We bridge the gap between complex SAP backends and seamless native iOS experiences.</p>

        <div class="case-study-card">
          <div class="case-study-header">
            <div class="case-study-industry">🏭 Manufacturing</div>
            <div class="case-study-aws"><span class="aws-chip" style="background:rgba(99, 179, 237, 0.1);color:var(--accent);">SAP PM</span></div>
          </div>
          <div class="case-study-title">Plant Maintenance Mobile Hub</div>
          <div class="case-study-desc">Replaced paper-based maintenance logs with an offline-first iOS app connecting directly to SAP PM via OData. Enabled 300+ technicians to log work orders and scan barcodes without internet access.</div>
        </div>

        <div class="case-study-card">
          <div class="case-study-header">
            <div class="case-study-industry">🚚 Logistics</div>
            <div class="case-study-aws"><span class="aws-chip" style="background:rgba(99, 179, 237, 0.1);color:var(--accent);">SAP SD</span></div>
          </div>
          <div class="case-study-title">Sales &amp; Distribution Tracker</div>
          <div class="case-study-desc">Real-time inventory and delivery tracking app for sales reps. Integrated with SAP SD leveraging RFC calls to provide instant stock visibility and automated order creation.</div>
        </div>

        <div class="case-study-card">
          <div class="case-study-header">
            <div class="case-study-industry">💼 Enterprise</div>
            <div class="case-study-aws"><span class="aws-chip" style="background:rgba(99, 179, 237, 0.1);color:var(--accent);">SAP MM</span></div>
          </div>
          <div class="case-study-title">Materials Management Approvals</div>
          <div class="case-study-desc">Executive iOS dashboard for instant purchase requisition and order approvals. Utilized SAP Fiori design guidelines and SAP BTP for secure enterprise connectivity.</div>
        </div>
      </div>

      <div>
        <h3 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:24px;">Our Core Expertise</h3>
        <div class="services-list">
          <div class="service-item">
            <div class="service-num">01</div>
            <div>
              <div class="service-name">SAP Mobile Applications</div>
              <div class="service-desc">Native iOS apps seamlessly integrated with SAP ERP, adhering to Fiori design languages.</div>
            </div>
          </div>
          <div class="service-item">
            <div class="service-num">02</div>
            <div>
              <div class="service-name">OData &amp; RFC Integration</div>
              <div class="service-desc">Robust middleware integration using SAP BTP, direct OData services, and RFC calls.</div>
            </div>
          </div>
          <div class="service-item">
            <div class="service-num">03</div>
            <div>
              <div class="service-name">Offline-First Architecture</div>
              <div class="service-desc">Core Data persistence with intelligent delta sync for disconnected field workers.</div>
            </div>
          </div>
          <div class="service-item">
            <div class="service-num">04</div>
            <div>
              <div class="service-name">Enterprise Security</div>
              <div class="service-desc">OAuth 2.0, SAML, and biometric authentication meeting strict corporate compliance.</div>
            </div>
          </div>
          <div class="service-item">
            <div class="service-num">05</div>
            <div>
              <div class="service-name">Legacy System Modernization</div>
              <div class="service-desc">Transforming complex, aging SAP GUI workflows into intuitive mobile interfaces.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
})();
