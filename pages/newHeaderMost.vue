<template>
  <div>
    <div 
      v-if="$nuxt.$el.clientWidth < 1000" 
      class="is-full"
    >
      <nav class="navbar level level-header navbar-transparent is-fixed-top">
        <!-- Left side -->
        <div class="level-left">
          <p class="level-item is-size-3">OpenTherapi</p>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item">Inicio</p>
          <p class="level-item">Como funciona</p>
          <p class="level-item">Noticias</p>
          <p class="level-item">Blog</p>
          <p class="level-item">Contacto</p>
          <p class="level-item">LOGIN</p>
        </div>
      </nav>
    </div>
    <div v-else>
      <div class="level">
        <div class="level-left"><div class="level-item"><img src="../static/logo.png"></div></div>
        <div class="level-right">
          <div class="level-item">
            <b-dropdown class="has-text-centered dropdown-style">
              <button 
                slot="trigger" 
                class="button button-dropdown"
              >
                <span><i class="fa fa-bars"/></span>
              </button>
              <b-dropdown-item class="dropdown-style">Inicio</b-dropdown-item>
              <b-dropdown-item>Como funciona</b-dropdown-item>
              <b-dropdown-item>Noticias</b-dropdown-item>
              <b-dropdown-item>Blog</b-dropdown-item>
              <b-dropdown-item>Contacto</b-dropdown-item>
              <b-dropdown-item>Login</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
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
        this.windowWidth = this.$nuxt.$el.clientWidth;
        
      },

      getWindowHeight() {
        this.windowHeight = document.documentElement.clientHeight;
      },
},

}
</script>


<style scoped>
 .level-header{
    padding-right:6rem;
    padding-left:6rem;
    margin-top:1rem;
  }
  .level-right .level-item{
    padding: 0 10px;
  }


  .navbar-transparent{
    background-color: black; /* before transparent */
    color: white;
  }

  .level{
    background-color: black;
    color: white;
    padding: 1rem 3rem;
  }

  .level-item{
  }

  .button-dropdown{
    background-color: black;
    color: white;
  }

  .dropdown-style{
  
  }
</style>