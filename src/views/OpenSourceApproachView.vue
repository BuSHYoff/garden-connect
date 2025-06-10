<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/approche_open_source.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Approche open source"
      subtitle="Garden Connect adopte une approche ouverte et inclusive en mettant à disposition de sa communauté le code source."
      />
    <section class="content">
      <SectionComponent title="Approche open source" content="Garden Connect adopte une approche ouverte et inclusive en mettant à disposition de sa communauté le code source ainsi que les schémas matériels nécessaires pour reproduire le système. Cette démarche s'inscrit dans une volonté de démocratiser l'accès à la technologie pour les maraîchers qui, bien que limités par des budgets ou une infrastructure initiale, souhaitent tout de même bénéficier des avantages d'une serre connectée. 

Le code, écrit principalement en Python pour sa lisibilité et sa compatibilité avec les microcontrôleurs et systèmes IoT, sera accompagné d'une documentation détaillée. Cette documentation inclura des instructions pas à pas pour configurer les capteurs, les modules de communication LoRa et la cellule mère. Les utilisateurs pourront ainsi comprendre et adapter le fonctionnement du système selon leurs besoins spécifiques, qu'il s'agisse de modifier des seuils d'alerte, de calibrer des capteurs ou d'ajouter de nouvelles métriques à surveiller. 

Les schémas matériels comprendront les plans pour assembler les cellules enfants, en intégrant des capteurs accessibles comme des modules de température, d’humidité ou de luminosité. Des modèles 3D des boîtiers protecteurs seront également disponibles pour une impression facile, garantissant une résistance aux conditions extérieures tout en minimisant les coûts. Cette approche open-source permettra aux utilisateurs de fabriquer et personnaliser leurs propres cellules à moindre coût, tout en respectant les spécificités locales de leurs exploitations. 

Cette philosophie d'ouverture vise à créer une communauté d’utilisateurs et de contributeurs capables de partager leurs améliorations et adaptations du système. Bien que les utilisateurs qui choisissent cette voie ne bénéficieront pas des services premium tels que l'accès au cloud sécurisé ou aux mises à jour logicielles avancées, ils auront entre leurs mains les outils nécessaires pour exploiter les bases du système. Ainsi, Garden Connect ne se limite pas à un produit commercial, mais s'impose comme un écosystème collaboratif favorisant l'innovation et la résilience dans le domaine de l'agriculture connectée."/>
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