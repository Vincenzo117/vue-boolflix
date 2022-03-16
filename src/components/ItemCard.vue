<template>
  <div class="item-card">
    <h3 class="item__title">Titolo: {{ item.title }}</h3>
    <div class="item__original-title">Titolo originale: {{ item.original_title }}</div>
    <div class="item__vote">Voto: {{ item.vote_average }}</div>
    <div class="item__language">{{ getFlag(item.original_language) }}</div>
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

.item-card {
  width: calc(94% / 4);
  text-align: center;
}
</style>