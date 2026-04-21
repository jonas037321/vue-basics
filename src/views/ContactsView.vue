<script setup lang="ts">
const pageTitle = 'Kontakt'
const pageLead = 'Hier findest du die wichtigsten Kontaktmöglichkeiten für Rückfragen und Austausch.'
</script>

<template>
  <section class="contacts-layout">
    <div class="contacts-panel contacts-panel-main">
      <p class="contacts-kicker mb-2">Direkter Kontakt</p>
      <h1 class="contacts-title mb-3">{{ pageTitle }}</h1>
      <p class="contacts-lead mb-0">{{ pageLead }}</p>
    </div>

    <div class="contacts-panel contacts-panel-side">
      <div class="contact-item">
        <span class="contact-label">E-Mail</span>
        <a class="contact-link" href="mailto:kontakt@vue-basics.de">kontakt@vue-basics.de</a>
      </div>

      <div class="contact-item">
        <span class="contact-label">Telefon</span>
        <a class="contact-link" href="tel:+491234567890">+49 123 4567890</a>
      </div>

      <div class="contact-item">
        <span class="contact-label">Erreichbarkeit</span>
        <span class="contact-text">Montag bis Freitag von 09:00 bis 17:00 Uhr</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
  gap: 1.25rem;
}

.contacts-panel {
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.04);
}

.contacts-panel-main {
  background:
    linear-gradient(135deg, rgba(34, 211, 238, 0.12), transparent 45%),
    linear-gradient(320deg, rgba(124, 58, 237, 0.16), transparent 36%),
    rgba(255, 255, 255, 0.04);
}

.contacts-kicker {
  color: var(--accent-2);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.78rem;
}

.contacts-title {
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.contacts-lead {
  color: var(--text-soft);
  font-size: 1.05rem;
  max-width: 34rem;
}

.contacts-panel-side {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  background: rgba(255, 255, 255, 0.03);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border: 1px solid var(--line);
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
}

.contact-label {
  color: var(--text-soft);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.contact-link,
.contact-text {
  color: var(--text-bright);
}

.contact-link {
  word-break: break-word;
}

@media (max-width: 767.98px) {
  .contacts-layout {
    grid-template-columns: 1fr;
  }
}
</style>