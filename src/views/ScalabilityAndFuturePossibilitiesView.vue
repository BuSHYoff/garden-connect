<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/evol_futures.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Évolutivité et possibilités futures"
      subtitle="Ce projet a été conçu dès le départ comme une solution évolutive, capable de s'adapter aux besoins changeants des maraîchers et d’intégrer des avancées technologiques."
      />
    <section class="content">
      <SectionComponent title="Evolutivité et possibilités futures" content="Garden Connect a été conçu dès le départ comme une solution évolutive, capable de s'adapter aux besoins changeants des maraîchers et d’intégrer des avancées technologiques. Cette évolutivité repose à la fois sur l’architecture modulaire du système et sur une vision à long terme des fonctionnalités à développer. Chaque étape de l’évolution de Garden Connect vise à répondre à des besoins pratiques tout en offrant une expérience utilisateur enrichie. 

L’architecture du système, avec une cellule mère connectée à des cellules enfants, permet une expansion facile. Un maraîcher peut commencer avec un système de base comprenant une cellule mère et quelques cellules enfants, puis ajouter progressivement d’autres capteurs ou modules selon ses besoins. Cette capacité d’extension est particulièrement précieuse pour les exploitations qui souhaitent couvrir de plus grandes surfaces ou surveiller des cultures variées avec des exigences environnementales spécifiques. Les capteurs supplémentaires peuvent être intégrés de manière plug-and-play, simplifiant le processus d’ajout tout en garantissant une continuité dans la collecte et le traitement des données. 

À long terme, Garden Connect ambitionne d’introduire des fonctionnalités d’automatisation avancées. Cela inclut la gestion automatisée de l’arrosage basée sur les seuils d’humidité, le contrôle de la ventilation pour maintenir des températures optimales, ou encore l’utilisation de panneaux occultants motorisés pour ajuster la lumière. Ces automatisations seront guidées par les données collectées, offrant un système intelligent qui répond aux besoins spécifiques des cultures sans intervention manuelle. 

Parmi les possibilités futures figure également l’intégration d’une intelligence artificielle pour l’analyse prédictive. En exploitant les données historiques et en les croisant avec des prévisions météorologiques, l’IA pourrait identifier des schémas récurrents et anticiper les risques, comme l’apparition de maladies ou les périodes de stress hydrique. Cela donnerait aux maraîchers un avantage stratégique en leur permettant de prévenir plutôt que de réagir, tout en optimisant leurs ressources. 

Enfin, Garden Connect prévoit de s’ouvrir à de nouveaux marchés, notamment celui des producteurs conventionnels. Ces derniers pourraient bénéficier de solutions plus avancées comme des lampes horticoles pour la gestion de la photopériode, des plaques chauffantes pour réguler la température du sol ou des systèmes de chauffage pour les serres en hiver. Bien que ces fonctionnalités soient pensées pour des phases ultérieures, elles illustrent l’ambition de Garden Connect d’évoluer avec son marché tout en restant fidèle à son engagement envers une agriculture durable. 

En somme, l’évolutivité de Garden Connect n’est pas simplement technique, elle est également stratégique. Elle garantit que la solution restera pertinente face à l’évolution des besoins des exploitants et des avancées technologiques, tout en préservant son accessibilité et sa simplicité d’utilisation. Cette capacité d’adaptation positionne Garden Connect comme un acteur durable dans l’écosystème de l’agriculture connectée."/>
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