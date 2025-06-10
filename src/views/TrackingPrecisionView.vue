<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import DividerComponent from '@/components/DividerComponent.vue'
import HamburgerMenuComponent from '@/components/HamburgerMenuComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import headerImage from '@/assets/suivi_precis.avif'
</script>

<template>
  <main>
    <HamburgerMenuComponent />
    <HeaderComponent
      :imageSrc="headerImage"
      title="Suivi précis et personnalisable"
      subtitle="Notre solution consiste à collecter en temps réel des données environnementales afin de les analyser."
      />
    <section class="content">
      <SectionComponent title="Collecte en temps réel des données environnementales" content="Garden Connect repose sur un réseau de capteurs IoT spécialement conçus pour capturer en temps réel les paramètres environnementaux critiques au sein des serres. Ces capteurs, connectés à une cellule mère via des communications LoRa, permettent une surveillance constante et fiable, même dans des environnements où la connectivité Internet peut être limitée. 

Chaque capteur est dédié à une métrique spécifique pour garantir la précision des données. Par exemple, les capteurs de température mesurent l’air et le sol pour offrir une vue complète des conditions thermiques. Les capteurs d’humidité suivent à la fois l’atmosphère et le niveau d’humidité du sol, essentiels pour évaluer les besoins en arrosage. Les capteurs de luminosité détectent l’intensité et la qualité de la lumière, cruciales pour la photosynthèse et la croissance des plantes. Enfin, des capteurs plus avancés peuvent également mesurer la qualité de l’air (ex. : détection de gaz ou de particules fines) et la force du vent pour anticiper les impacts climatiques. 

Les données sont collectées en continu et stockées localement sur la cellule mère avant d’être transmises au serveur cloud via le protocole MQTT. Cette méthode garantit la résilience du système, permettant aux capteurs de fonctionner et de stocker leurs relevés même en cas de perte temporaire de connexion. La fréquence des relevés est ajustable pour équilibrer la précision et la consommation énergétique, allant de l’envoi toutes les minutes à des intervalles horaires pour des conditions stables. "/>
      <DividerComponent />
      <SectionComponent title="Alertes personnalisables selon les besoins de l’utilisateur" content="Un des aspects clés de Garden Connect est sa capacité à transformer les données brutes en informations exploitables grâce à un système d’alertes intelligent. Les maraîchers peuvent configurer des seuils pour chaque métrique suivie, afin de recevoir des notifications dès qu’une condition critique est atteinte ou dépassée. Par exemple, une alerte peut être déclenchée si l’humidité du sol chute en dessous d’un certain niveau, suggérant un besoin d’arrosage, ou si la température dépasse un seuil risquant de stresser les plantes.  

Ces alertes ne se contentent pas d’informer. Grâce à une interface utilisateur intuitive, les exploitants peuvent personnaliser les paramètres des alertes pour s’adapter aux spécificités de chaque culture. Les seuils minimum et maximum, ainsi que les types de notifications (par e-mail, SMS ou notifications push), peuvent être ajustés directement depuis l’application mobile ou web. 

L’objectif de ces alertes est de permettre aux maraîchers d’anticiper et de réagir rapidement aux changements environnementaux, réduisant ainsi les pertes potentielles et optimisant les rendements. De plus, dans les futures itérations du projet, ces alertes pourront être associées à des actions automatisées, comme l’activation d’un système d’arrosage ou l’ajustement de panneaux d’ombrage motorisés."/>
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