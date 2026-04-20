<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Direkt zum Inhalt springen</a>

    <header class="site-header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid px-0">
          <RouterLink class="navbar-brand fw-semibold" to="/">
            <span class="brand-mark" aria-hidden="true">VB</span>
            <span class="brand-text">Vue Basics</span>
          </RouterLink>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#siteNavigation"
            aria-controls="siteNavigation"
            aria-expanded="false"
            aria-label="Navigation umschalten"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="siteNavigation" class="collapse navbar-collapse">
            <div class="navbar-nav me-lg-auto gap-lg-2">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
              <RouterLink class="nav-link" to="/about">Über Uns</RouterLink>
              <RouterLink class="nav-link" to="/impressum">Impressum</RouterLink>
            </div>

            <div class="navbar-nav ms-lg-auto mt-3 mt-lg-0">
              <div class="nav-item dropdown">
                <button
                  id="accountDropdown"
                  class="nav-link dropdown-toggle dropdown-trigger"
                  type="button"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Konto
                </button>

                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                  <li>
                    <RouterLink class="dropdown-item" to="/login">Login</RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/registrierung">
                      Registrierung
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/profil">Profil</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main id="main-content" class="site-main container-fluid px-0">
      <div class="content-grid">
        <section class="content-panel card border-0 shadow-sm">
          <div class="card-body p-4 p-lg-5">
            <RouterView />
          </div>
        </section>

        <aside class="sidebar-panel card border-0 shadow-sm">
          <div class="card-body p-4 p-lg-5 d-flex flex-column gap-4">
            <div>
              <p class="sidebar-kicker mb-2">Live System</p>
              <h2 class="sidebar-title mb-3">Schnell, klar, kontrastreich.</h2>
              <p class="sidebar-copy mb-0">
                Ein starkes Interface für Inhalte mit Fokus, Struktur und digitaler Präsenz.
              </p>
            </div>

            <div class="status-grid">
              <div class="status-chip">Navigation rechts</div>
              <div class="status-chip">Content links</div>
              <div class="status-chip">Footer unten</div>
              <div class="status-chip">Responsive Layout</div>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <footer class="site-footer">
      <div class="container-fluid px-0">
        <p class="mb-0">© 2026 Vue Basics. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: 0.75rem;
  z-index: 1000;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: #ffffff;
  color: #08111f;
  transform: translateY(-180%);
  transition: transform 160ms ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 1rem;
  z-index: 20;
  background: linear-gradient(135deg, rgba(10, 16, 32, 0.92), rgba(8, 12, 24, 0.82));
  color: #fff;
  border: 1px solid var(--line);
  border-radius: 1.35rem;
  padding: 0.9rem 1rem;
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.site-header :deep(.navbar-brand) {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.96);
  letter-spacing: 0.02em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  color: #07111f;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 12px 30px rgba(34, 211, 238, 0.25);
}

.brand-text {
  font-size: 1.05rem;
}

.site-header :deep(.nav-link) {
  color: rgba(255, 255, 255, 0.8);
  border-radius: 999px;
  padding: 0.65rem 1rem;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;
}

.site-header :deep(.nav-link:hover),
.site-header :deep(.nav-link.router-link-exact-active) {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  transform: translateY(-1px);
}

.site-header :deep(.dropdown-menu) {
  background: rgba(6, 10, 20, 0.96);
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.site-header :deep(.dropdown-item) {
  border-radius: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.7rem 0.9rem;
}

.site-header :deep(.dropdown-item:hover),
.site-header :deep(.dropdown-item:focus) {
  background: rgba(34, 211, 238, 0.14);
  color: #fff;
}

.site-header :deep(.dropdown-toggle::after) {
  margin-left: 0.7rem;
}

.dropdown-trigger {
  border: 0;
  background: transparent;
}

.site-main {
  flex: 1;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.75fr) minmax(320px, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.content-panel,
.sidebar-panel {
  min-height: 100%;
  border-radius: 1.5rem;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(16, 24, 40, 0.88), rgba(8, 12, 24, 0.94));
  color: var(--text-bright);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
  overflow: hidden;
}

.content-panel :deep(.card-body),
.sidebar-panel :deep(.card-body) {
  position: relative;
}

.sidebar-panel {
  background:
    linear-gradient(160deg, rgba(124, 58, 237, 0.14), transparent 42%),
    linear-gradient(200deg, rgba(34, 211, 238, 0.12), transparent 36%),
    linear-gradient(180deg, rgba(16, 24, 40, 0.9), rgba(8, 12, 24, 0.96));
}

.sidebar-kicker {
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.76rem;
}

.sidebar-title {
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  line-height: 1.04;
}

.sidebar-copy {
  color: var(--text-soft);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.status-chip {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
  padding: 0.8rem 0.9rem;
  color: var(--text-bright);
  font-size: 0.95rem;
}

.site-footer {
  background: rgba(8, 12, 24, 0.92);
  color: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  border-radius: 1.2rem;
  padding: 1rem 1.25rem;
  text-align: center;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.25);
}

@media (max-width: 575.98px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .site-header {
    top: 0.5rem;
  }

  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
