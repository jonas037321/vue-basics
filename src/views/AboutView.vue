<script setup lang="ts">
const pageTitle = 'Über Uns'
const pageLead = 'Hier steht eine kurze Beschreibung des Projekts und seines Zwecks.'
</script>

<template>
  <section class="about-layout">
    <div class="about-panel about-panel-main">
      <p class="about-kicker mb-2">Projekt</p>
      <h1 class="about-title mb-3">{{ pageTitle }}</h1>
      <p class="about-lead mb-0">{{ pageLead }}</p>
    </div>

    <div class="about-panel about-panel-side">
      <div class="about-stat">
        <span class="about-stat-value">01</span>
        <span class="about-stat-label">Klare Struktur</span>
      </div>
      <div class="about-stat">
        <span class="about-stat-value">02</span>
        <span class="about-stat-label">Scharfe Kontraste</span>
      </div>
      <div class="about-stat">
        <span class="about-stat-value">03</span>
        <span class="about-stat-label">Moderne Typografie</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(220px, 0.7fr);
  gap: 1.25rem;
}

.about-panel {
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.04);
}

.about-panel-main {
  background:
    linear-gradient(135deg, rgba(124, 58, 237, 0.14), transparent 48%),
    linear-gradient(320deg, rgba(34, 211, 238, 0.08), transparent 38%),
    rgba(255, 255, 255, 0.04);
}

.about-kicker {
  color: var(--accent-3);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
}

.about-title {
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.about-lead {
  color: var(--text-soft);
  font-size: 1.05rem;
  max-width: 34rem;
}

.about-panel-side {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  background: rgba(255, 255, 255, 0.03);
}

.about-stat {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
}

.about-stat-value {
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  color: #07111f;
  font-weight: 700;
}

.about-stat-label {
  color: var(--text-bright);
}

@media (max-width: 767.98px) {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
</style>
