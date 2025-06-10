<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/outils_access.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Outils accessibles"
      subtitle="Le suivi des métriques environnementales offrent aux maraîchers une visibilité en temps réel sur les paramètres critiques qui influencent directement la croissance et la santé de leurs cultures."
      />
    <section class="content">
      <SectionComponent title="Outils accessibles pour les maraîchers bios" content="Le suivi des métriques environnementales est au cœur de Garden Connect, offrant aux maraîchers une visibilité en temps réel sur les paramètres critiques qui influencent directement la croissance et la santé de leurs cultures. Ce suivi repose sur un réseau de capteurs IoT intégrés dans les cellules enfants, stratégiquement positionnées au sein des serres pour collecter des données précises et fiables. 

Les capteurs de température permettent de surveiller à la fois l’air et le sol, offrant une compréhension complète des conditions thermiques qui impactent les besoins en irrigation et la photosynthèse. Les capteurs d’humidité mesurent non seulement l’humidité relative de l’air, mais aussi celle du sol, essentielle pour anticiper les besoins en eau et éviter le stress hydrique des plantes. Ces données permettent aux maraîchers de réagir rapidement à des situations critiques, comme une baisse soudaine de l’humidité du sol, tout en optimisant l’utilisation des ressources naturelles. 

En intégrant des informations météorologiques externes, Garden Connect offre également un aperçu contextuel des conditions climatiques. Les prévisions de pluie, de vent ou de température élevées peuvent être combinées avec les données collectées localement pour fournir une analyse complète et anticiper les impacts sur les cultures. Par exemple, si une pluie est prévue dans les prochaines heures et que l'humidité du sol est déjà élevée, une alerte peut signaler qu'aucun arrosage n'est nécessaire, évitant ainsi un gaspillage d’eau. 

Cette capacité à suivre les métriques environnementales en temps réel donne aux maraîchers les outils nécessaires pour prendre des décisions éclairées. En réduisant les approximations et en offrant une vue précise des conditions, Garden Connect favorise une gestion plus durable et efficace des serres, tout en améliorant la productivité et la résilience face aux aléas climatiques. Cette fonctionnalité, simple d’accès via l’interface utilisateur, garantit un impact direct sur les pratiques agricoles et la qualité des récoltes. "/>
    </section>
  </main>
</template>

<style scoped>

.content {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-right: 25%;
  white-space: pre-line;
}
</style>