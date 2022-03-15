<template>
  <div class="item-card">
    <h3>Titolo: {{ item.title }}</h3>
    <div> Titolo originale: {{ item.original_title }} </div>
    <div> Lingua: {{ item.original_language }} </div>
    <div> Voto: {{ item.vote_avarage }} </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    itemObject: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>