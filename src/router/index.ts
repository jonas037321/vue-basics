import { createRouter, createWebHistory } from 'vue-router'
import { defineComponent } from 'vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const StaticPageView = (title: string, description: string) =>
  defineComponent({
    name: `${title.replace(/\s+/g, '')}View`,
    template: `
      <section>
        <h1 class="h3 mb-3">${title}</h1>
        <p class="mb-0">${description}</p>
      </section>
    `,
  })

const ImpressumView = StaticPageView(
  'Impressum',
  'Dieses Impressum ist ein Platzhalter für die spätere rechtliche Ausgestaltung.',
)

const LoginView = StaticPageView('Login', 'Hier wird später das Anmeldeformular angezeigt.')

const RegistrationView = StaticPageView(
  'Registrierung',
  'Hier wird später das Registrierungsformular angezeigt.',
)

const ProfileView = StaticPageView('Profil', 'Hier erscheint später die Profilübersicht.')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/registrierung',
      name: 'registration',
      component: RegistrationView,
    },
    {
      path: '/profil',
      name: 'profile',
      component: ProfileView,
    },
  ],
})

export default router
