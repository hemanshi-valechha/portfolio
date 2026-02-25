/* =====================================================
   COMPONENT: Navigation
   ===================================================== */
(function () {
  var s = document.currentScript;
  s.insertAdjacentHTML('afterend', `
  <!-- NAV -->
  <nav>
    <a href="#" class="nav-logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" style="text-decoration: none; color: inherit;">Hemanshi Valechha</a>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#sap">SAP Mobile</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#calyza">CalyzaTech</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav-badge">Open to Opportunities</div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- MOBILE NAV MENU -->
  <div class="mobile-nav-menu" id="mobileMenu">
    <a href="#about">About</a>
    <a href="#sap">SAP Mobile</a>
    <a href="#projects">Projects</a>
    <a href="#calyza">CalyzaTech</a>
    <a href="#contact">Contact</a>
  </div>
  `);
})();
