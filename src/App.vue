<template>
  <div id="app">   
      <header-top></header-top>
      <main role="main" aria-label="Contenu principal">
          <router-view></router-view>
          <div class="my-6 w-full container mx-auto my-12 sm:my-24"></div>
          <div class="container mx-auto relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div class="h-56 w-56 rounded-full overflow-hidden mx-auto">
                  <div class="aspect-w-1 aspect-h-1">
                      <picture>
                            <source srcset="@/assets/img/actualites/66-shambala13.webp" type="image/webp" alt="Profil" class="object-cover" width="225" height="225" />
                            <img src="@/assets/img/actualites/66-shambala13.jpg" type="image/jpeg" alt="Profil" class="object-cover" width="225" height="225" />
                      </picture>
                  </div>
              </div>
              <h2 class="mx-auto px-6 sm:px-16 font-butler text-secondary text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center leading-tight mt-12">
                  Ici, ce sera un echange de bons plans sorties, concerts et festivals pour que nos enfants s'éveillent.
              </h2>
          </div>
          <calendrier></calendrier>
      </main>
      <footer role="contentinfo"></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'

import CalendrierMasonry from './components/CalendrierMasonry.vue'

export default {
  name: 'App',
  components: {
      'header-top' : Header,
      'calendrier' : CalendrierMasonry,
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style></style>
