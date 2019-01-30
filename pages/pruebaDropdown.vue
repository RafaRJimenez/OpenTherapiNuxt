<template>
  <div id="app">
    <div 
      v-if="seen" 
      class="dropdown"
    >
      <b-dropdown class="has-text-centered">
        <button 
          slot="trigger" 
          class="button is-primary"
        >
          <span class="has-text-centered"><i class="fa fa-bars"/></span>
          <b-icon icon="menu-down"/>
        </button>

        <b-dropdown-item>Inicio</b-dropdown-item>
        <b-dropdown-item>Como funciona</b-dropdown-item>
        <b-dropdown-item>Noticias</b-dropdown-item>
        <b-dropdown-item>Blog</b-dropdown-item>
        <b-dropdown-item>Contacto</b-dropdown-item>
        <b-dropdown-item>LOGIN</b-dropdown-item>
      </b-dropdown>
      <h1 v-show="seen">{{ msg }}</h1> Window width: {{ windowWidth }}
      <br> Window height: {{ windowHeight }}
    </div>
    <div 
      v-else 
      class="headerMost"
    >
      Esto sería el header
    </div>

    <div/>


  </div>
</template>

<script>

export default {
  data() {
    return {
      seen:true,
      msg: 'Hello World! This is a Event listener test.',
      windowWidth: 0,
      windowHeight: 0,
    }
  },

mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })

  },

  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  },
   methods: {
  changeDropdown: function () {
    this.seen=false;
  },
   getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
        if (document.documentElement.clientWidth < 800){
          this.seen=false;
        } else {
          this.seen=true;
        }
      },

      getWindowHeight() {
        this.windowHeight = document.documentElement.clientHeight;
      },
},

}

</script>