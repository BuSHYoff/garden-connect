<script setup>
import DividerComponent from '@/components/DividerComponent.vue'
import DiscoverTeamComponent from '@/components/DiscoverTeamComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FeatureComponent from '@/components/FeatureComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'

import headerImage from '@/assets/serre.avif'
import headerLogo from '@/assets/radis.png'

import imgSuivi from '@/assets/suivi_precis.avif'
import imgModulaire from '@/assets/solution_modulaire.avif'
import imgFinanciere from '@/assets/access_financiere.avif'
import imgOpenSource from '@/assets/approche_open_source.avif'
import imgOutils from '@/assets/outils_access.avif'
import imgEvolutivite from '@/assets/evol_futures.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      :logoSrc="headerLogo"
      title="Garden Connect"
      subtitle="La serre connectée"
    />

    <section class="content">
      <div class="description">
        Garden Connect est une réponse technologique innovante aux défis spécifiques des maraîchers biologiques, qui doivent composer avec des contraintes environnementales, économiques, et techniques. Ce projet vise à transformer la gestion des serres en rendant accessible une solution complète de suivi et d'analyse des données environnementales. Conçu pour être à la fois abordable et évolutif, Garden Connect combine les technologies de l'Internet des Objets (IoT), une architecture modulaire, et une interface utilisateur intuitive pour répondre aux besoins des exploitants agricoles, qu'ils soient novices ou experts en technologie.
      </div>

      <DividerComponent />

      <FeatureComponent
        title="Suivi précis et personnalisable"
        description="Notre solution consiste à collecter en temps réel des données environnementales afin de les analyser."
        :imageSrc="imgSuivi"
        link="/tracking-precision"
      />

      <FeatureComponent
        title="Solution modulaire"
        description='Une cellule "mère" connectée à des cellules "enfants" via la technologie LoRa'
        :imageSrc="imgModulaire"
        link="/modular-solution"
        :reverse="true"
      />

      <FeatureComponent
        title="Accessibilité financière"
        description="Garden Connect a été pensé pour être une solution abordable, accessible à une majorité de maraîchers biologiques, souvent contraints par des budgets limités."
        :imageSrc="imgFinanciere"
        link="/financial-accessibility"
      />

      <FeatureComponent
        title="Approche open source"
        description="Garden Connect adopte une approche ouverte et inclusive en mettant à disposition de sa communauté le code source."
        :imageSrc="imgOpenSource"
        link="/opensource-approach"
        :reverse="true"
      />

      <FeatureComponent
        title="Outils accessibles"
        description="Le suivi des métriques environnementales offre aux maraîchers une visibilité en temps réel sur les paramètres critiques qui influencent directement la croissance et la santé de leurs cultures."
        :imageSrc="imgOutils"
        link="/accessibility-tools"
      />

      <FeatureComponent
        title="Évolutivité et possibilités futures"
        description="Ce projet a été conçu dès le départ comme une solution évolutive, capable de s'adapter aux besoins changeants des maraîchers et d’intégrer des avancées technologiques."
        :imageSrc="imgEvolutivite"
        link="/scalability"
        :reverse="true"
      />

      <DividerComponent />
      <DiscoverTeamComponent />
    </section>
  </main>
</template>

<style scoped>
.description {
  text-align: center;
}

.content {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-right: 25%;
}
</style>