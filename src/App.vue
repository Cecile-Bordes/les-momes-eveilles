<template>
  <div id="app">   
    <div class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ...">
        Test
    </div> 
    <vue-masonry-wall :items="items" :options="{width: 300, padding: 12}" @append="append">
      <template v-slot:default="{item}">
        <article>
          <img :src="item.image" class="image" />
          <h5>{{item.title}}</h5>
          <p>{{item.content}}</p>
        </article>
      </template>
    </vue-masonry-wall>
  </div>
  
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

import Image1 from '@/assets/img/actualites/01-les-pepites-sonores-le-sax.jpg'

export default {
  name: 'App',
  components: {VueMasonryWall},
    data() {
      return {
        items: [
          {
            title: 'Les Pépites Sonores - Le Sax', 
            content: 'Du 27 mars au 15 avril, le festival de musique dédié aux enfants et à la famille présente 12 spectacles à découvrir au Sax à Achères mais aussi chez nos voisins et partenaires : La ville d’ Andrésy, Le Château Ephémère à Carrière-sous-Poissy, la ville de Chanteloup-les-Vignes, Le Story-Boat à Conflans-Saint-Honorine, la Médiathèque Christine de Pizan à Poissy et le Festival Les Francos. Petites et grandes oreilles s’ouvriront à de nouvelles explorations sonores : sieste électro-acoustique, conte musical, ballades sonores, ciné-concert, musique et arts numériques aux saveurs jazzy, funk ou baroque en passant par la chanson. De la musique et encore de la musique avec des temps de résidences de création, des ateliers de pratiques artistiques et de palpitantes rencontres.', 
            description: '',
            image: Image1
          },
          {
            title: 'Festival rencontre des jonglages', 
            content: 'La  Rencontre des Jonglages arpentera du 21 mars au 22 avril 2018 toute l’Ile de France, d’Evry à Garges, d’Aubervilliers à Saint- Denis et de Paris à la Courneuve pour des petits et grands écarts jonglés. En investissant les monuments, les rues, les places, le pavé et la plage, le jonglage se joue de l’espace urbain et réinvente un art très public.', 
            description: '',
            image: require('@/assets/img/actualites/02-jonglage.jpg')
          },
          {
            title: 'Salle Mômes !', 
            content: 'À l\'intérieur du Centre commercial Vill Up, le cinéma Pathé La Villette accueille les familles avec une salle IMAX et un son DOLBY ATMOS. Sa Salle Mômes ! est réservée aux enfants de 2 à 14 ans pour une sortie 7e art adaptée aux plus jeunes.', 
            description: '',
            image: require('@/assets/img/actualites/03-salle-momes.jpg')
          },
          {
            title: 'Salle Mômes !', 
            content: 'À l\'intérieur du Centre commercial Vill Up, le cinéma Pathé La Villette accueille les familles avec une salle IMAX et un son DOLBY ATMOS. Sa Salle Mômes ! est réservée aux enfants de 2 à 14 ans pour une sortie 7e art adaptée aux plus jeunes.', 
            description: '',
            image: require('@/assets/img/actualites/03-salle-momes.jpg')
          },
        ]
      }
    },
    methods: {
      /**
       * I am mocking a API call that load 20 objects at a time.
       */
      append() {
        for (let i = 0; i < 20; i++) {
          this.items.push({title: `Item ${this.items.length}`, content: 'Content'})
        }
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.image {
    height: 250px;
    width:250px;
    margin:1%;
}
article {
    height: inherit;
    grid-row-end: span 60;
    border-radius: 3px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
}
.masonry-wall {
  display: grid;
  -webkit-column-gap: 10px;
  -moz-column-gap: 10px;
  column-gap: 10px;
  row-gap: 7px;
  grid-template-columns: repeat(3,400px);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: var(--card-container-width);
}
</style>
