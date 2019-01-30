<template>
  <div ref="main">
    <register />
    <information />
    <devices />
    <youtube-video />
    <register-banner />
    <prensa />
    <opinion-banner />
  </div>
</template>

<script>
import Register from '../components/register'
import Information from '../components/information'
import Devices from '../components/devices'
import YoutubeVideo from '../components/youtube-video'
import RegisterBanner from '../components/registerbanner'
import Prensa from '../components/prensa'
import OpinionBanner from '../components/opinionbanner'


export default {
  layout: 'default',
	components:{
		Register,
		Information,
		Devices,
		YoutubeVideo,
		RegisterBanner,
		Prensa,
    OpinionBanner,
	},

}
</script>

<style>
body {
  font-family: Raleway;
}
</style>

<!--<script>
export default {
  asyncData({ redirect, route }) {
    redirect(`${process.env.REDIRECTION}/${route.fullPath}`);
  },
};
</script>
-->