<template>
  <div>
    <header-most/>
    <nuxt />
  </div>
</template>

<script>
import HeaderMost from '../components/headerMost'
export default {
	components:{
		HeaderMost,
	},
};
</script>
<style>
html {
  background-color: #eceff1;
}
</style>

<style lang="scss">
$primary: #1e73be;

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
