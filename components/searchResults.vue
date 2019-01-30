<template>
  <section>
    <search-result
      v-for="result in results"
      :key="result.slug"
      :result="result"
    />
  </section>
</template>

<script>
import searchResult from '~/components/searchResult';
export default {
  components: {
    searchResult,
  },

  props: {
    results: {
      type: Array,
      required: true,
    },
  },
};
</script>
