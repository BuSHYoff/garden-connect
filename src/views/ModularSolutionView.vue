<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import DividerComponent from '@/components/DividerComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/solution_modulaire.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Solution modulaire"
      subtitle='Une cellule "mère" connectée à des cellules "enfants" via la technologie LoRa'
      />
    <section class="content">
      <SectionComponent 
        title='Une cellule "mère" connectée à des cellules "enfants" via LoRa' 
        content="L'architecture de Garden Connect repose sur un modèle hiérarchique où une cellule centrale, appelée « mère », joue le rôle de cerveau du système, tandis que des cellules satellites, appelées « enfants », assurent la collecte des données environnementales. Ce design permet de gérer efficacement la communication et l'analyse des données tout en minimisant la consommation énergétique. 
        
        La cellule mère, basée sur un Raspberry Pi, centralise les données reçues des cellules enfants. Elle utilise le protocole LoRa (Long Range) pour communiquer avec ces dernières. Ce protocole est particulièrement adapté aux environnements agricoles grâce à sa faible consommation d'énergie et sa portée étendue, pouvant couvrir plusieurs kilomètres en ligne droite, même en présence d'obstacles tels que des structures métalliques ou végétales. 
        
        Les cellules enfants, généralement construites sur la base d'Arduinos, sont équipées de capteurs spécifiques (température, humidité, luminosité, etc.). Chaque cellule enfant est dédiée à une zone géographique ou à un type de métrique particulier. Par exemple, une cellule enfant peut surveiller l'humidité et la température d'un sol sur une planche de culture, tandis qu'une autre collecte des données sur la luminosité et les précipitations. 
        
        Les cellules enfants transmettent les données à la cellule mère selon un modèle de transmission par chaîne ou point-à-point. En cas de perte temporaire de communication, les cellules enfants stockent localement les données collectées jusqu'à ce que la connexion soit rétablie, garantissant ainsi la continuité du suivi environnemental." 
      />
      <DividerComponent />
      <SectionComponent 
        title="Capacité d’extension pour s’adapter à différentes tailles de serres" 
        content="Une des forces principales de Garden Connect est sa modularité. Le système a été conçu pour s’adapter à des exploitations agricoles de tailles variées, allant de petites serres artisanales à des installations de grande envergure. Cette adaptabilité repose sur deux éléments clés : l’évolutivité du réseau LoRa et la flexibilité des cellules enfants."
      />
      <DividerComponent />
      <SectionComponent 
        title="Scalabilité technique" 
        content='Pour les serres de grande taille ou les exploitations multi-serres, plusieurs cellules mères peuvent être déployées en parallèle, chaque cellule couvrant une zone spécifique. Ces cellules mères peuvent ensuite communiquer entre elles via un réseau local ou une infrastructure cloud pour fournir une vue unifiée des données de l’ensemble des exploitations.'
      />
      <DividerComponent />
      <SectionComponent 
        title="Gestion des grandes surfaces" 
        content='Le protocole LoRa permet d’ajouter de nouvelles cellules enfants au réseau sans nécessiter de modifications importantes au niveau de la cellule mère. Cela signifie qu’un utilisateur peut commencer avec un "starter pack" comprenant une cellule mère et quelques cellules enfants, puis étendre progressivement son système en ajoutant des capteurs supplémentaires à mesure que ses besoins évoluent. Cette extension se fait de manière plug-and-play, où chaque nouvelle cellule enfant est automatiquement reconnue par la cellule mère après une configuration initiale minimale.'
      />
      <DividerComponent />
      <SectionComponent 
        title="Optimisation des coûts et des ressources" 
        content='Grâce à cette architecture modulaire, il est possible de répartir stratégiquement les cellules enfants en fonction des besoins spécifiques des cultures. Par exemple, un maraîcher qui cultive plusieurs planches de tomates dans une serre pourra placer une cellule enfant par groupe de planches homogènes, évitant ainsi une duplication inutile des capteurs. 

Cette capacité d’extension assure que Garden Connect reste une solution pertinente et accessible pour des exploitants aux besoins variés. Qu’il s’agisse d’un petit maraîcher souhaitant surveiller une seule serre ou d’une grande exploitation agricole nécessitant une couverture extensive, le système peut être calibré pour offrir une performance optimale tout en maîtrisant les coûts. '
      />
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