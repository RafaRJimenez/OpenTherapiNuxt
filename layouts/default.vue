<template>
  <div>
    <header-most/>
    <nuxt />
    <footer-most/>
  </div>
</template>

<script>
import HeaderMost from '../components/headerMost'
import FooterMost from '../components/footerMost'
export default {
	components:{
		HeaderMost,
    FooterMost,
	},
};
</script>

<style>
html {
  background-color: #eceff1;
}

.navbar {
  background-color: #37474f;
}

a.navbar-item:hover {
  background-color: initial;
}
</style>

<style lang="scss">
$primary: #1e73be;

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
