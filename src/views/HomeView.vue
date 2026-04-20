<script setup lang="ts">
const pageTitle = 'Home'
const pageLead = 'Willkommen auf der Startseite dieser Vue-Anwendung.'
</script>

<template>
  <section class="page-hero">
    <div class="hero-copy">
      <p class="hero-kicker mb-2">Dashboard</p>
      <h1 class="hero-title mb-3">{{ pageTitle }}</h1>
      <p class="hero-lead mb-4">{{ pageLead }}</p>

      <div class="hero-actions">
        <span class="hero-pill">Modern UI</span>
        <span class="hero-pill hero-pill-accent">Bootstrap Layout</span>
        <span class="hero-pill">Vue 3</span>
      </div>
    </div>

    <div class="hero-card">
      <div class="hero-card-top">
        <span class="hero-card-label">Aktueller Fokus</span>
        <span class="hero-card-value">Schnell, klar, direkt</span>
      </div>
      <div class="hero-card-chart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
  gap: 1.5rem;
  align-items: stretch;
}

.hero-copy {
  padding: 0.5rem 0;
}

.hero-kicker {
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.8rem;
}

.hero-title {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

.hero-lead {
  max-width: 44rem;
  color: var(--text-soft);
  font-size: 1.1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-pill {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-bright);
}

.hero-pill-accent {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(124, 58, 237, 0.22));
}

.hero-card {
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  padding: 1.2rem;
  background:
    linear-gradient(160deg, rgba(34, 211, 238, 0.12), transparent 36%),
    linear-gradient(340deg, rgba(249, 115, 22, 0.1), transparent 30%),
    rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
}

.hero-card-top {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.hero-card-label {
  color: var(--text-soft);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.hero-card-value {
  font-size: 1.3rem;
}

.hero-card-chart {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.65rem;
  align-items: end;
  min-height: 10rem;
}

.hero-card-chart span {
  display: block;
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background: linear-gradient(180deg, var(--accent-2), var(--accent));
  min-height: 30%;
}

.hero-card-chart span:nth-child(1) {
  min-height: 40%;
}

.hero-card-chart span:nth-child(2) {
  min-height: 78%;
}

.hero-card-chart span:nth-child(3) {
  min-height: 55%;
  background: linear-gradient(180deg, var(--accent-3), #fb7185);
}

.hero-card-chart span:nth-child(4) {
  min-height: 90%;
  background: linear-gradient(180deg, #fbbf24, var(--accent-3));
}

@media (max-width: 767.98px) {
  .page-hero {
    grid-template-columns: 1fr;
  }
}
</style>
