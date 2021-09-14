<template>
  <div id="app">    
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
          {title: 'Item 0', content: 'Content', image: Image1},
          {title: 'Item 1', content: 'Content', image: require('@/assets/img/actualites/02-jonglage.jpg')},
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
