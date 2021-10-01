<template>
      <section class=" px-4 sm:px-0">
              <div class="container mx-auto relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                <h2 class="font-hkbold text-secondary text-lg mt-8 md:mt-12 text-center">Le calendrier</h2>
                <vue-masonry-wall :items="items" :options="{width: 300, padding: 0}" @append="append">
                    <template v-slot:default="{item}">
                        <article class="cursor-pointer m-2 duration-500 ease-in-out transform hover:-translate-y-1 relative origin-center transition-all hover:opacity-75 shadow-md sm:h-128 bg-center overflow-hidden">
                                <a href="#" target="_blank" rel="noopener noreferrer nofollow" class="hover:opacity-75">
                                    <div class="flex items-center px-4 py-3 border border-gray-200">
                                            <div class="ml-3">
                                                <span class="text-gray-600 text-xs block">{{item.map}} - {{item.date}}</span>
                                              </div>
                                    </div> 
                                    <div class="flex-shrink-0">
                                          <picture>
                                              <source :srcset="item.imagewebp" type="image/webp" :alt="item.title" loading="lazy" class="w-full h-full object-center object-cover" width="310" height="310" />
                                              <img :src="item.image" type="image/jpeg" :alt="item.title" loading="lazy" class="w-full h-full object-center object-cover" width="310" height="310" />
                                          </picture>
                                    </div> 
                                    <div class="flex-1 p-6 flex flex-col justify-between">
                                          <div class="flex-1">
                                              <div class="block">
                                                  <h3 class="text-xl font-semibold text-gray-900 truncate">
                                                      {{item.title}}
                                                  </h3> 
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
            </div>
          </section>   
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

import Image1 from '@/assets/img/actualites/01-les-pepites-sonores-le-sax.jpg'
import Image1wep from '@/assets/img/actualites/01-les-pepites-sonores-le-sax.webp'

export default {
  name: 'CalendrierMasonry',
  data() {
      return {
        items: [
          {
            title: 'Les Pépites Sonores - Le Sax', 
            map: '',
            date: '',
            content: 'Du 27 mars au 15 avril, le festival de musique dédié aux enfants et à la famille présente 12 spectacles à découvrir au Sax à Achères mais aussi chez nos voisins et partenaires : La ville d’ Andrésy, Le Château Ephémère à Carrière-sous-Poissy, la ville de Chanteloup-les-Vignes, Le Story-Boat à Conflans-Saint-Honorine, la Médiathèque Christine de Pizan à Poissy et le Festival Les Francos. Petites et grandes oreilles s’ouvriront à de nouvelles explorations sonores : sieste électro-acoustique, conte musical, ballades sonores, ciné-concert, musique et arts numériques aux saveurs jazzy, funk ou baroque en passant par la chanson. De la musique et encore de la musique avec des temps de résidences de création, des ateliers de pratiques artistiques et de palpitantes rencontres.', 
            description: '',
            image: Image1,
            imagewebp: Image1wep
          },
          {
            title: 'Festival rencontre des jonglages', 
            map: '',
            date: '',
            content: 'La  Rencontre des Jonglages arpentera du 21 mars au 22 avril 2018 toute l’Ile de France, d’Evry à Garges, d’Aubervilliers à Saint- Denis et de Paris à la Courneuve pour des petits et grands écarts jonglés. En investissant les monuments, les rues, les places, le pavé et la plage, le jonglage se joue de l’espace urbain et réinvente un art très public.', 
            description: '',
            image: require('@/assets/img/actualites/02-jonglage.jpg'),
            imagewebp: require('@/assets/img/actualites/02-jonglage.webp')
          },
          {
            title: 'Salle Mômes !', 
            map: '',
            date: '',
            content: 'À l\'intérieur du Centre commercial Vill Up, le cinéma Pathé La Villette accueille les familles avec une salle IMAX et un son DOLBY ATMOS. Sa Salle Mômes ! est réservée aux enfants de 2 à 14 ans pour une sortie 7e art adaptée aux plus jeunes.', 
            description: '',
            image: require('@/assets/img/actualites/03-salle-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/03-salle-momes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/04-chorus.jpg'),
            imagewebp: require('@/assets/img/actualites/04-chorus.webp')
          },
          {
            title: 'Le Festival Puy-de-Mômes', 
            map: 'Dans la région de Clermont-ferrand',
            date: 'Du 7 au 18 avril',
            content: 'Puy-de-Mômes relève le défi de placer l’enfant au cœur de sa programmation. Depuis la première édition en 1995, le Festival n’a cessé de se développer et sa fréquentation a été multipliée par 20.', 
            description: '',
            image: require('@/assets/img/actualites/05-puy-de-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/05-puy-de-momes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/06-cecile-bergame.jpg'),
            imagewebp: require('@/assets/img/actualites/06-cecile-bergame.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/07-boite-a-outils2.jpg'),
            imagewebp: require('@/assets/img/actualites/07-boite-a-outils2.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/08-maxi-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/08-maxi-momes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/09-tataouiglala.jpg'),
            imagewebp: require('@/assets/img/actualites/09-tataouiglala.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/10-vendege.jpg'),
            imagewebp: require('@/assets/img/actualites/10-vendege.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/11-couleurs-enfance.jpg'),
            imagewebp: require('@/assets/img/actualites/11-couleurs-enfance.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/12-potjesman.jpg'),
            imagewebp: require('@/assets/img/actualites/12-potjesman.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/13-104.jpg'),
            imagewebp: require('@/assets/img/actualites/13-104.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/14-centre-pompidou.jpg'),
            imagewebp: require('@/assets/img/actualites/14-centre-pompidou.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/15-exploradome.jpg'),
            imagewebp: require('@/assets/img/actualites/15-exploradome.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/16-babel-minot.jpg'),
            imagewebp: require('@/assets/img/actualites/16-babel-minot.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/17-193soleil5.jpg'),
            imagewebp: require('@/assets/img/actualites/17-193soleil2.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/18-teatralia.jpg'),
            imagewebp: require('@/assets/img/actualites/18-teatralia.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/19-contes.jpg'),
            imagewebp: require('@/assets/img/actualites/19-contes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/20-premieres-rencontres.jpg'),
            imagewebp: require('@/assets/img/actualites/20-premieres-rencontres.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/21-escape-game.jpg'),
            imagewebp: require('@/assets/img/actualites/21-escape-game.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/22-festival-oeil-de-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/22-festival-oeil-de-momes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/23-festival-culture-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/23-festival-culture-momes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/24-moult-ronds-cie-switch.jpg'),
            imagewebp: require('@/assets/img/actualites/24-moult-ronds-cie-switch.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/25-semaines-petite-enfance.jpg'),
            imagewebp: require('@/assets/img/actualites/25-semaines-petite-enfance.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/25-tres-tot-theatre.jpg'),
            imagewebp: require('@/assets/img/actualites/25-tres-tot-theatre.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/29-kernel.jpg'),
            imagewebp: require('@/assets/img/actualites/29-kernel.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/30-la-croisee-des-chemins.jpg'),
            imagewebp: require('@/assets/img/actualites/30-la-croisee-des-chemins.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/31-ouragane.jpg'),
            imagewebp: require('@/assets/img/actualites/31-ouragane.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/32-1-0-1.jpg'),
            imagewebp: require('@/assets/img/actualites/32-1-0-1.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/33-festival-brie-art.jpg'),
            imagewebp: require('@/assets/img/actualites/33-festival-brie-art.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/34-festival-franco.jpg'),
            imagewebp: require('@/assets/img/actualites/34-festival-franco.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/35-forenia.jpg'),
            imagewebp: require('@/assets/img/actualites/35-forenia.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/36-compagnie-ours.jpg'),
            imagewebp: require('@/assets/img/actualites/36-compagnie-ours.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/37-theatre-guimbarde.jpg'),
            imagewebp: require('@/assets/img/actualites/37-theatre-guimbarde.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/38-bambino.jpg'),
            imagewebp: require('@/assets/img/actualites/38-bambino.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/39-philharmonie.jpg'),
            imagewebp: require('@/assets/img/actualites/39-philharmonie.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/40-de-mains.jpg'),
            imagewebp: require('@/assets/img/actualites/40-de-mains.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/41-festival-contes.jpg'),
            imagewebp: require('@/assets/img/actualites/41-festival-contes.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/42-festival-o4vents.jpg'),
            imagewebp: require('@/assets/img/actualites/42-festival-o4vents.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/43-festival-parades.jpg'),
            imagewebp: require('@/assets/img/actualites/43-festival-parades.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/44-festival-ptites-oreilles.jpg'),
            imagewebp: require('@/assets/img/actualites/44-festival-ptites-oreilles.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/45-curieux.jpg'),
            imagewebp: require('@/assets/img/actualites/45-curieux.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/46-bretagne.jpg'),
            imagewebp: require('@/assets/img/actualites/46-bretagne.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/47-chaboti.jpg'),
            imagewebp: require('@/assets/img/actualites/47-chaboti.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/48-teamlab.jpg'),
            imagewebp: require('@/assets/img/actualites/48-teamlab.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/49-place-aux-marmots.jpg'),
            imagewebp: require('@/assets/img/actualites/49-place-aux-marmots.webp')
          },
          {
            title: 'Festival Chorus des enfants', 
            map: 'A Boulogne (92)',
            date: 'Du 7 au 8 avril',
            content: '@lefestivalchorus, Depuis son origine, le Chorus des Enfants n\'a eu de cesse d\'offrir aux plus petits une programmation riche de toutes les musiques, tous les genres et toutes les cultures confondues.', 
            description: '',
            image: require('@/assets/img/actualites/50-rock-ici-momes.jpg'),
            imagewebp: require('@/assets/img/actualites/50-rock-ici-momes.webp')
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
    },
  components: {
      VueMasonryWall,
  }
}
</script>

 <style scoped></style>
