<template>
  <main>
    <div class="container">
      <div class="items-wrapper">
        <ItemCard />
      </div>
    </div>
  </main>
</template>

<script>
import ItemCard from "./ItemCard.vue";

import axios from "axios";

export default {
    name: 'MainContent',
    components: {
        ItemCard
    },
    data() {
        return {
            baseUrl: "https://api.themoviedb.org/3/movie/"
        }
    },
    methods: {
        fetchFilmAndSeries () {
            axios.get( `https://api.themoviedb.org/3/movie/550?api_key=20fefb6c28c97eabe3d7a5781f7ea9db` )
                .then (function (res) {
                    
                    console.log(res);
                })
        }
    },
    created() {
        this.fetchFilmAndSeries();
    }
}
</script>

<style lang="scss" scoped>
main {
  .contaniner {
    .items-wrapper {
      display: flex;
    }
  }
}
</style>