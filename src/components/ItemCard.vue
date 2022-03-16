<template>
  <div class="item-card">
    <figure class="item__thumb">
      <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
    </figure>
    <h3 class="item__title">{{ item.title ? item.title : item.name }}</h3>
    <div class="item__original-title">Original title: {{ item.original_title ? item.original_title : item.original_name }}</div>
    <div class="item__language">Language: {{ getFlag(item.original_language) }}</div>
    <div class="item__vote">Vote: {{ item.vote_average }}</div>
  </div>
</template>

<script>
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { hasFlag } from "country-flag-icons";

export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    getFlag(lan) {
      if (lan === "en") {
        lan = "gb";
      }
      if (hasFlag(lan.toUpperCase())) {
        return getUnicodeFlagIcon(lan);
      } else {
        return lan;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";

.item-card {
  width: calc(94% / 4);
  text-align: center;
  width: 200px;
  
  .item__thumb {
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }

  .item__title {
    margin-bottom: 10px;
  }

  .item__original-title {
    @include card-text;
  }

  .item__language {
    @include card-text;
  }

  .item__vote {
    @include card-text;
  }

}
</style>