import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import TrackingPrecisionView from './views/TrackingPrecisionView.vue'
import AccessibleToolsView from './views/AccessibleToolsView.vue'
import ModularSolutionView from './views/ModularSolutionView.vue'
import OpenSourceApproachView from './views/OpenSourceApproachView.vue'
import ScalabilityAndFuturePossibilitiesView from './views/ScalabilityAndFuturePossibilitiesView.vue'
import FinancialAccessibilityView from './views/FinancialAccessibilityView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/tracking-precision', component: TrackingPrecisionView },
  { path: '/accessibility-tools', component: AccessibleToolsView },
  { path: '/modular-solution', component: ModularSolutionView },
  { path: '/opensource-approach', component: OpenSourceApproachView },
  { path: '/scalability', component: ScalabilityAndFuturePossibilitiesView },
  { path: '/financial-accessibility', component: FinancialAccessibilityView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router