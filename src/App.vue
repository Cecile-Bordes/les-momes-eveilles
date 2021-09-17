<template>
  <div id="app">   
      <header></header>
      <main>
          <section>
              <div id="homepage-header" class="w-full">
                  <div class="relative flex flex-col pt-10 min-h-96 h-screen md:h-85 bg-black">
                      <span class="absolute top-0 right-0 bottom-0 left-0 header-img bg-gradient"></span> 
                      <div class="relative flex flex-col justify-center pt-20 md:pt-0 sm:my-auto">
                        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div class="relative py-12 sm:py-0">
                            <div class="text-center mb-20">
                              <h1 class="mt-1
                                text-3xl
                                leading-10
                                font-extrabold
                                text-gray-900
                                md:text-5xl md:leading-normal md:tracking-tight
                                lg:text-5xl">
                              Les mômes éveillés
                            </h1>
                            <p class="text-gray-500 text-2xl font-medium pt-4">
                              Les mômes éveillés : Des p'ti gars et des p'tites fifilles, curieux, bien réveillés et plein de vie. 
                                  l'ouverture aux autres et le respect des différences est une chance pour les enfants. 
                                  Nous aimons les petits bonheurs simples de la vie, la nature, la bonne bouffe, la musique, les voyages... 
                                  Une devise ? c'est meilleur quand on partage !!!
                            </p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </section>
          <section>
              <vue-masonry-wall :items="items" :options="{width: 300, padding: 0}" @append="append">
                  <template v-slot:default="{item}">
                      <article class="slick-slide slick-active" style="outline: currentcolor none medium; width: 300px;">
                              <a href="#" target="_blank" rel="noopener noreferrer nofollow" class="hover:opacity-75">
                                  <div class="flex items-center px-4 py-3 border border-gray-200">
                                          <div class="ml-3">
                                              <span class="text-gray-600 text-xs block">{{item.map}} - {{item.date}}</span>
                                            </div>
                                  </div> 
                                  <div class="flex-shrink-0">
                                        <img :src="item.image" :alt="item.title" loading="lazy" class="w-full h-full object-center object-cover">
                                  </div> 
                                  <div class="flex-1 p-6 flex flex-col justify-between">
                                        <div class="flex-1">
                                            <div class="block">
                                                <h4 class="text-xl font-semibold text-gray-900 truncate">
                                                    {{item.title}}
                                                </h4> 
                                                <p class="mt-3 text-base text-gray-500">
                                                    {{item.content}}
                                                </p>
                                            </div>
                                        </div>
                                  </div>
                              </a>
                      </article>
                  </template>
            </vue-masonry-wall>
          </section>
      </main>
      <footer></footer>
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
            map: '',
            date: '',
            content: 'Du 27 mars au 15 avril, le festival de musique dédié aux enfants et à la famille présente 12 spectacles à découvrir au Sax à Achères mais aussi chez nos voisins et partenaires : La ville d’ Andrésy, Le Château Ephémère à Carrière-sous-Poissy, la ville de Chanteloup-les-Vignes, Le Story-Boat à Conflans-Saint-Honorine, la Médiathèque Christine de Pizan à Poissy et le Festival Les Francos. Petites et grandes oreilles s’ouvriront à de nouvelles explorations sonores : sieste électro-acoustique, conte musical, ballades sonores, ciné-concert, musique et arts numériques aux saveurs jazzy, funk ou baroque en passant par la chanson. De la musique et encore de la musique avec des temps de résidences de création, des ateliers de pratiques artistiques et de palpitantes rencontres.', 
            description: '',
            image: Image1
          },
          {
            title: 'Festival rencontre des jonglages', 
            map: '',
            date: '',
            content: 'La  Rencontre des Jonglages arpentera du 21 mars au 22 avril 2018 toute l’Ile de France, d’Evry à Garges, d’Aubervilliers à Saint- Denis et de Paris à la Courneuve pour des petits et grands écarts jonglés. En investissant les monuments, les rues, les places, le pavé et la plage, le jonglage se joue de l’espace urbain et réinvente un art très public.', 
            description: '',
            image: require('@/assets/img/actualites/02-jonglage.jpg')
          },
          {
            title: 'Salle Mômes !', 
            map: '',
            date: '',
            content: 'À l\'intérieur du Centre commercial Vill Up, le cinéma Pathé La Villette accueille les familles avec une salle IMAX et un son DOLBY ATMOS. Sa Salle Mômes ! est réservée aux enfants de 2 à 14 ans pour une sortie 7e art adaptée aux plus jeunes.', 
            description: '',
            image: require('@/assets/img/actualites/03-salle-momes.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/04-chorus.jpg')
          },
          {
            title: 'Le Festival Puy-de-Mômes', 
            map: 'Dans la région de Clermont-ferrand',
            date: 'Du 7 au 18 avril',
            content: 'Puy-de-Mômes relève le défi de placer l’enfant au cœur de sa programmation. Depuis la première édition en 1995, le Festival n’a cessé de se développer et sa fréquentation a été multipliée par 20.', 
            description: '',
            image: require('@/assets/img/actualites/05-puy-de-momes.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/06-cecile-bergame.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/07-boite-a-outils2.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/08-maxi-momes.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/09-tataouiglala.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/10-vendege.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/11-couleurs-enfance.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/12-potjesman.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/13-104.jpg')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/14-centre-pompidou.jpg')
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

<style></style>
