<template>
  <div>
    <!-- Main container -->
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>123</strong> posts
          </p>
        </div>
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input 
                class="input" 
                type="text" 
                placeholder="Find a post"
              >
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item"><a>Inicio</a></p>
        <p class="level-item"><a>Como funciona</a></p>
        <p class="level-item"><a>Noticias</a></p>
        <p class="level-item"><a>Blog</a></p>
        <p class="level-item"><a>Contacto</a></p>
        <p class="level-item"><a>Login</a></p>
      </div>
    </nav>

    <div class="columns">
      <div class="column">
        First column
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        Fourth column
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>




  </div>
</template>

<!-- 
<template>
  <div>
    <section class="hero is-large has-bg-img"> <div class="hero-body"> <div class="container has-text-centered"> <h1 class="title">Title 1</h1> <h2 class="subtitle">Subtitle 3</h2> </div> </div> </section>
  </div>
  <template>

<style/></template></template>




<template>
  <div>
    <nav 
      class="breadcrumb" 
      aria-label="breadcrumbs"
    >
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active"><a 
          href="#" 
          aria-current="page"
        >Breadcrumb</a></li>
      </ul>
    </nav>
  </div>
</template>


 <p class="isfull">ACCESIBLE EN CUALQUIER MOMENTO Y EN CUALQUIER LUGAR.</p>
        <p class="isfull"><i class="fa fa-mobile"/>DESDE TU ORDENADOR, TABLET O SMARTPHONE
        Vea pacientes desde cualquier lugar con las aplicaciones para móviles. Soportamos smartphones y tablets de iOS y Android.</p>
        <p class="isfull">CALIDAD DE VIDEO
        Ofrecemos video y audio HD de alta calidad para asegurar que usted y su paciente tengan la mejor experiencia posible.</p>

        <div class="columns">
      <div class="column is-seven has-text-centered">
        <div class="columns">
          <div class="column isfull"><p>ACCESIBLE EN CUALQUIER MOMENTO Y EN CUALQUIER LUGAR.</p></div>
        </div>
        <div class="columns"/>
        <div class="column is-three">
          <i class="fa fa-mobile"/>
        </div>
        <div class="column is-nine">
          DESDE TU ORDENADOR, TABLET O SMARTPHONE
          Vea pacientes desde cualquier lugar con las aplicaciones para móviles. Soportamos smartphones y tablets de iOS y Android.
        </div>
      </div>
      <div class="columns"/>
    </div>
    <div class="column is-five has-text-centered">Auto</div>
  </div>
  </div>


  ///////////////////////////////////////////////////////////////////////////////

  Prueba 

  <template>
  <div id="app">
    <p v-if="seen">Message Can Be Seen!</p>
    <p><button 
      class="btn btn-lg btn-primary" 
      @click="seen = !seen"
    >Toggle</button></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      seen:true,
    }
  },
   methods: {
  changeDropdown: function () {
    this.seen=false;
  },
},
}

</script>




-->