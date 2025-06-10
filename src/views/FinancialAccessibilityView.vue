<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/access_financiere.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Accessibilité financière"
      subtitle='Garden Connect a été pensé pour être une solution abordable, accessible à une majorité de maraîchers biologiques, souvent contraints par des budgets limités.'
      />
    <section class="content">
      <SectionComponent title="Accessibilité financière" content='Garden Connect a été pensé pour être une solution abordable, accessible à une majorité de maraîchers biologiques, souvent contraints par des budgets limités. Le "starter pack", estimé à environ 300 euros, inclut une cellule mère et cinq cellules enfants. La cellule mère, basée sur un Raspberry Pi, centralise les données, tandis que les cellules enfants, construites sur des microcontrôleurs Arduino, collectent des métriques environnementales clés comme la température, l’humidité et la luminosité. Chaque composant est conçu pour être économique, fiable et durable, avec des boîtiers imprimés en 3D pour une résistance accrue aux conditions agricoles. 

L’abonnement annuel, fixé à environ 100 euros, permet de couvrir les services essentiels nécessaires au bon fonctionnement du système. Il inclut l’accès à une plateforme cloud sécurisée pour le stockage des données, des mises à jour logicielles régulières et un support technique adapté. Ce modèle garantit non seulement une maintenance continue mais aussi des évolutions du produit, avec l’ajout progressif de fonctionnalités avancées comme l’analyse prédictive via une intelligence artificielle. 

Cette structure tarifaire vise à équilibrer accessibilité économique et durabilité technologique. Elle permet aux maraîchers d’accéder à une solution professionnelle à un coût maîtrisé, tout en leur offrant la possibilité d’étendre leur système selon leurs besoins futurs, en ajoutant des cellules enfants à faible coût. Garden Connect s’engage ainsi à offrir un excellent rapport qualité-prix tout en respectant les contraintes des petites exploitations agricoles.' />
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