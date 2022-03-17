<template>
  <div class="item-card">
    <figure class="item__thumb">
      <img
        :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`"
        alt="img not found"
      />
      <div class="item__info">
        <h3 class="item__title">{{ item.title ? item.title : item.name }}</h3>
        <div class="item__original-title">
          Original title:
          {{ item.original_title ? item.original_title : item.original_name }}
        </div>
        <div class="item__type">
          Type: {{ item.title ? "Movie" : "TV series" }}
        </div>
        <div class="item__language">
          Language: {{ getFlag(item.original_language) }}
        </div>
        <div class="item__vote">
          Vote:
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
    </figure>
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
  width: 300px;

  .item__thumb {
    margin-bottom: 10px;
    height: 450px;
    position: relative;
    cursor: pointer;
    text-align: center;

    img {
      color: $secondary_color;
      width: 100%;
      line-height: 450px;
    }

    .item__info {
      z-index: 100;
      position: absolute;
      background-color: rgba($color: #000000, $alpha: 0.8);
      padding: 40px 20px 20px;
      top: 0px;
      right: 0px;
      left: 0px;
      bottom: 0px;
      display: none;
      text-align: left;
    }

    &:hover .item__info {
      display: block;
    }

    .item__title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 25px;
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
}
</style>