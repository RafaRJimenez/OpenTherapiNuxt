<template>
  <div id="element">
    <header>
      <div 
        v-if="seen" 
      >
        <nav 
          :class="{classA: scrollPosition <= 100, classB: scrollPosition > 100}" 
          class="navbar level level-header navbar-transparent is-fixed-top"
        >
          <!-- Left side -->
          <div class="level-left">
            <p class="level-item is-size-3"><img src="../static/logo.png"></p>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">Inicio</p>
            <p class="level-item"><i class="fa fa-search"/>&nbsp;Buscador</p>
            <p class="level-item">Como funciona</p>
            <p class="level-item">Blog</p>
            <p class="level-item">Contacto</p>
            <p class="level-item">ACCESO PROFESIONALES</p>
          </div>
        </nav>
      </div>
      <div v-else>
        <div 
          class="level is-mobile level-dropdown"
        >
          <div class="level-left"><div class="level-item"><img src="../static/logo.png"></div></div>
          <div class="level-right">
            <div class="level-item">
              <b-dropdown 
                :mobile-modal="false" 
                position="is-bottom-left"
                class="has-text-centered"
                toggle
              >
                <button 
                  slot="trigger" 
                  class="button button-dropdown"
                >
                  <span><i class="fa fa-bars"/></span>
                </button>
                <b-dropdown-item class="dropdown-style">Inicio</b-dropdown-item>
                <b-dropdown-item class="dropdown-style">Como funciona</b-dropdown-item>
                <b-dropdown-item class="dropdown-style">Noticias</b-dropdown-item>
                <b-dropdown-item class="dropdown-style">Blog</b-dropdown-item>
                <b-dropdown-item class="dropdown-style">Contacto</b-dropdown-item>
                <b-dropdown-item class="dropdown-style">Login</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div 
      v-scroll-to="'#element'" 
      :class="{buttonScrollHidden: scrollPosition <= 800, buttonScroll: scrollPosition > 801}"
    >
      <i class="fa fa-chevron-up"/>
    </div>
</div></template>

<script>

export default {
  data() {
    return {
      seen:true,
      windowWidth: 0,
      scrollPosition: null,
    }
  },

mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      //Init
      this.getWindowWidth()
    }),
    window.addEventListener('scroll', this.updateScroll);

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
   methods: {
   getWindowWidth() {
        this.windowWidth = document.documentElement.clientWidth;
        if (document.documentElement.clientWidth < 1000){
          this.seen=false;
        } else {
          this.seen=true;
        }
      },
      updateScroll() {
      this.scrollPosition = window.scrollY
    },
},

}

</script>

<style scoped>
.fullwidth {
width: 100vw;
}

 .level-header{
    padding-right:6rem;
    padding-left:6rem;
    margin-top:1rem;
  }
  .level-right .level-item{
    padding: 0 0.5rem;
  }


  .navbar-transparent{
    background-color:; /* before transparent */
    color: #FFFFFF;
  }

  .level-dropdown{
    background-color:#000000;
    padding: 1rem 3rem;
  }

  b-dropdown {
    background-color: #000000;
  }

  .button-dropdown {
    background-color: #000000;
    color: #FFFFFF;
  }

  .dropdown-content{
    background-color: #1c1c1c !important;
  }

  .dropdown-menu{
    background-color: #1c1c1c !important;
  }

  .dropdown-style{
    background-color: #1C1C1C;
    color: #FFFFFF;
    padding:1rem;
    min-width: 15rem;
  }

  .dropdown-style:parent{
    background-color: blue;
  }

  .dropdown-style:hover{
    background-color: #1C1C1C;
    color: #FFFFFF;
  }

  .buttonScroll{
    position: fixed;
    bottom: 0;
    right: 0.8rem;
    transition: all 900ms;
    margin-bottom: 1rem;
    background-color: #6ABFEA;
    padding: 0.75rem;
    color: #FFFFFF;
    border-radius: 10%;
    cursor: pointer;
}

.buttonScrollHidden{
    visibility: hidden;
    position: fixed;
    transition: all 900ms;
    bottom: 0;
    right: 0.8rem;
    padding: 0.75rem;
    color: #FFFFFF;
    background-color: transparent;
}

  .classA{
    background-color: transparent;
  }

  .classB{
    background-color: #000000;
    margin-top: 0;
    transition: all 900ms;
  }

  .access{
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.2rem;
    background: rgba(86, 183, 232, 0.5);
    color: white;
    cursor: pointer;
  }

  .access:hover{
    background: rgba(86, 183, 232, 0.8);
  }

  .message{
  display: none;
  }
</style>