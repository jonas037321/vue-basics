<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
  <div class="app-shell">
    <!-- Header mit Navigation -->
    <header class="site-header">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid px-0">
          <RouterLink class="navbar-brand fw-semibold" to="/">Vue Basics</RouterLink>

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
            <div class="navbar-nav ms-auto gap-lg-2">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
              <RouterLink class="nav-link" to="/about">Über Uns</RouterLink>
              <RouterLink class="nav-link" to="/impressum">Impressum</RouterLink>
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
              <RouterLink class="nav-link" to="/registrierung">Registrierung</RouterLink>
              <RouterLink class="nav-link" to="/profil">Profil</RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="site-main container-fluid px-0">
      <div class="content-grid">
        <section class="content-panel card border-0 shadow-sm">
          <div class="card-body p-4 p-lg-5">
            <RouterView />
          </div>
        </section>

        <aside class="sidebar-panel card border-0 shadow-sm">
          <div class="card-body p-4 p-lg-5">
            <h2 class="h5 mb-3">Seitenbereich</h2>
            <p class="mb-0">
              Hier ist Platz für ergänzende Informationen, Hinweise oder eine zweite Navigation.
            </p>
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
  gap: 1.5rem;
}

.site-header {
  background: linear-gradient(135deg, #1f3c88 0%, #183153 100%);
  color: #fff;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
}

.site-header :deep(.navbar-brand),
.site-header :deep(.nav-link) {
  color: rgba(255, 255, 255, 0.9);
}

.site-header :deep(.nav-link:hover),
.site-header :deep(.nav-link.router-link-exact-active) {
  color: #ffffff;
}

.site-main {
  flex: 1;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.content-panel,
.sidebar-panel {
  min-height: 100%;
  border-radius: 1rem;
}

.sidebar-panel {
  background: #f8fafc;
}

.site-footer {
  background: #0f172a;
  color: rgba(255, 255, 255, 0.85);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
}

@media (max-width: 991.98px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
