<template>
      <header role="banner" aria-label="Entête de page">
          <div class="relative w-full">
              <div class="w-full">
                  <div class="mx-auto relative container z-30">
                      <div class="py-2 sm:py-6 px-4 sm:px-0 flex items-center justify-between ">
                          <div class="text-left flex">
                              <a href="/" class="text-medium text-2xl inline-block text-blue-900">
                                <span class="text-blue-900">Les mômes éveillés</span> 
                                <span class="text-yellow-500">.</span>
                              </a>
                          </div> 
                          <div class="flex items-center justify-between">
                            <ul class="hidden sm:flex mr-12">
                              <li class="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <router-link to="/" class="text-lg mr-12  font-bold hover:underline" exact>Accueil</router-link>
                              </li>
                              <li class="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">
                                  <router-link to="/calendrier" class="text-lg mr-12  font-bold hover:underline">Calendrier</router-link>
                              </li> 
                              <li class="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1">
                                  <router-link to="/fabrique" class="text-lg mr-12  font-bold hover:underline">La Fabrique</router-link>
                              </li> 
                            </ul> 
                            <button aria-label="Menu Burger" class="relative flex items-center text-blue-900 my-auto mr-2 focus:outline-none">
                              <div class="w-5">
                                  <div class="w-full border-t  mb-2 origin-top ease-in-height duration-300 top-0 relative border-blue-900"></div> 
                                  <div class="w-full border-t  mb-2 origin-top ease-in-height duration-300 top-0 relative border-blue-900"></div> 
                                  <div class="w-full border-t  mb-2 origin-top ease-in-height duration-300 top-0 relative border-blue-900"></div>
                              </div>
                            </button> 
                            <div class="fixed h-0 flex top-0 left-0 origin-top-right overflow-hidden  z-50 transition-all duration-500 ease-in-out bg-white w-full shadow h-0">
                                <button aria-label="Menu Burger" class="absolute top-0 right-0 flex items-center text-blue-900 m-6 focus:outline-none">
                                    <div class="w-5">
                                        <div class="w-full border-t border-blue-900 mb-2 origin-top ease-in-height duration-300 top-0 relative"></div> 
                                        <div class="w-full border-t border-blue-900 mb-2 origin-top ease-in-height duration-300 top-0 relative"></div> 
                                        <div class="w-full border-t  border-blue-900 mb-2 origin-top ease-in-height duration-300 top-0 relative"></div>
                                    </div>
                                </button> 
                                <ul class="m-auto text-blue-900 transition-all duration-500 ease-in-out opacity-0">
                                  <li>
                                      <router-link to="/calendrier" class="w-full text-center text-xl font-medium py-6 block">Calendrier</router-link>
                                  </li> 
                                  <li>
                                    <router-link to="/fabrique" class="w-full text-center text-xl font-medium py-6 block">La Fabrique</router-link>
                                  </li> 
                                </ul> 
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>    
</template>

<script>

export default {
  name: 'Header',
  data() {
        return {
             
        }
    },
  methods: {
  },
  components: {
  }
}
</script>

 <style scoped></style>
