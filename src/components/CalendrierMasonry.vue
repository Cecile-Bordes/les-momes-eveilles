<template>
      <section class=" px-4 sm:px-0">
              <div class="container mx-auto relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
                <h2 class="font-hkbold text-secondary text-lg mt-8 md:mt-12 text-center">Le calendrier</h2>
                <vue-masonry-wall :items="items" :options="{width: 300, padding: 0}" @append="append">
                   <template v-slot:default="{item}">
                        <!--<p :key="content" v-for="content in spectaclescontents" class="mt-3 text-base text-gray-500">
                              {{content}}
                        </p> -->
                        <article v-bind:key="index" v-for="(spectacle, index) in spectacles" class="cursor-pointer m-2 duration-500 ease-in-out transform hover:-translate-y-1 relative origin-center transition-all hover:opacity-75 shadow-md sm:h-128 bg-center overflow-hidden">
                                <a href="#" target="_blank" rel="noopener noreferrer nofollow" class="hover:opacity-75">
                                    <div class="flex items-center px-4 py-3 border border-gray-200">
                                        <div class="ml-3">
                                            <span class="text-gray-600 text-xs block">
                                                {{item.map}} - 
                                                <strong>{{date}}</strong>
                                            </span>
                                        </div>
                                    </div> 
                                    <div class="flex-shrink-0">
                                          <picture>
                                              <!--<source :srcset="item.imagewebp" type="image/webp" :alt="item.title" loading="lazy" class="w-full h-full object-center object-cover" width="310" height="310" />
                                              <img :src="item.image" type="image/jpeg" :alt="item.title" loading="lazy" class="w-full h-full object-center object-cover" width="310" height="310" />-->
                                              <!--<span :key="image" v-for="image in spectaclesimages"> 
                                                <img :src="letterIcon(image)" />
                                              </span>-->
                                              <!--{{item.image}}-->
                                          </picture>
                                    </div> 
                                    <div class="flex-1 p-6 flex flex-col justify-between">
                                          <div class="flex-1">
                                              <div class="block">
                                                  <h3 class="text-xl font-semibold text-gray-900 truncate">
                                                      {{title}}
                                                  </h3> 
                                                  <p class="mt-3 text-base text-gray-500">
                                                      {{content}}
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

import eventsData from "../assets/json/events.json";

export default {
  name: 'CalendrierMasonry',
  data() {
      return {
        json_url: "@/assets/json/events.json",
        items: [],
        myJson: eventsData
      }
            
    },
    computed: {
        spectacles() {
          return eventsData.spectacles.map((item) => {
            this.title = item.title;
            this.content = item.content;
            this.date = item.date;
            this.map = item.map;
            //this.image = require("@"+item.image);
          })
        },
        spectaclescontents() {
          return eventsData.spectacles.map((item) => {
            return item.content;
          })
        }
      },
    methods: {
          append() {
            for (let i = 0; i < 20; i++) {
              this.items.push({title: `Item ${this.items.length}`, content: 'Content'})
            }
          },
          //letterIcon: function(image) {
            //return require("@/" + image);
          //},
          leerJson: function () {
              fetch(this.json_url)
                .then(response => {
                  return response.json();
                })
                .then(data => {
                  this.items = data;
                })
                .catch(function (error) {
                  console.log('Erreur Json', error);
              });
            },
            
      },
    components: {
      VueMasonryWall,
  }
}
</script>
<style scoped></style>
