<template>
  <div class="item-card">
    <figure class="item__thumb">
      <img
        :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
        alt="img not found"
      />
    </figure>
    <h3 class="item__title">{{ item.title ? item.title : item.name }}</h3>
    <div class="item__original-title">
      Original title:
      {{ item.original_title ? item.original_title : item.original_name }}
    </div>
    <div class="item__language">
      Language: {{ getFlag(item.original_language) }}
    </div>
    <div class="item__type">Type: {{ item.title ? "Movie" : "TV series" }}</div>
    <div class="item__vote">
      <img
        :class="[
          'star',
          i <= Math.ceil(item.vote_average / 2) ? 'star-yellow' : '',
        ]"
        v-for="i in [1, 2, 3, 4, 5]"
        :key="i"
        src="../assets/img/star.png"
        alt=""
      />
    </div>
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/mixins.scss";

.item-card {
  width: calc(94% / 4);
  width: 200px;

  .item__thumb {
    margin-bottom: 10px;
    height: 300px;
    color: $secondary_color;
    text-align: center;
    line-height: 300px;
    img {
      width: 100%;
    }
  }

  .item__title {
    text-align: center;
    margin-bottom: 15px;
  }

  .item__original-title {
    @include card-text;
  }

  .item__language {
    @include card-text;
  }

  .item__type {
    @include card-text;
  }

  .item__vote {
    @include card-text;

    .star {
      width: 15px;

      &.star-yellow {
        filter: invert(61%) sepia(79%) saturate(639%) hue-rotate(3deg)
          brightness(97%) contrast(100%);
      }
    }
  }
}
</style>