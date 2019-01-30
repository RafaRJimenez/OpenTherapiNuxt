<template>
  <div>
    <footer class="footerMost">
      <div class="columns">
        <div class="column column-nav-footer">
          <div class="columns columns-navbar has-text-centered is-vcentered is-mobile">
            <div class="column">
              <nav>
                <ul>
                  <li>Home</li>
                  <li>Contacto</li>
                  <li>Login</li>
                </ul>
              </nav>
            </div>
            <div class="column column-home">
              <nav>
                <ul>
                  <li>Política de privacidad</li>
                  <li>Aviso legal</li>
                  <li>Condiciones de uso</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns has-text-centered">
            <div class="column">
              <a 
                href="https://www.facebook.com/opentherapi/" 
                rel="nofollow"
                target="_blank"
              >
                <i 
                  class="fa fa-footer fa-facebook" 
              /> </a><a 
                href="https://twitter.com/opentherapi" 
                rel="nofollow"
                target="_blank"
              ><i class="fa fa-footer fa-twitter"/></a><a 
                href="https://www.linkedin.com/company/opentherapi/" 
                rel="nofollow"
                target="_blank"
              ><i class="fa fa-footer fa-linkedin"/></a><a 
                href="https://www.youtube.com/channel/UCyKBMsASlkiQGfeFLvIvygA" 
                rel="nofollow"
                target="_blank"
              ><i class="fa fa-footer fa-youtube"/></a>
            </div>
          </div>
          <div class="columns has-text-centered">
            <div class="column">
              Espacio Minerva - Vodafone Smart Center <br>
              C/ Albert Einstein s/n, Edificio Insur, 1ª planta. <br>
              PCT Cartuja - 41092 Sevilla <br><br><br>

              feedback@opentherapi.com | +34 690 830 401
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns has-text-centered">
            <div class="column open-therapi-logo">
              <img src="../static/logo.png">
            </div>
          </div>
          <div class="columns has-text-centered">
            <div class="column">Con el apoyo de: <br>
              <a 
                href="https://www.programaminerva.es/" 
                rel="nofollow"
                target="_blank"
              ><img src="../static/colaboraciones.png"></a>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-one-third"><a 
              href="https://www.eoi.es/" 
              rel="nofollow"
              target="_blank"
            ><img src="../static/eoi.jpg"></a></div>
            <div class="column is-one-third"><a 
              href="https://www.secot.org/" 
              rel="nofollow"
              target="_blank"
            ><img src="../static/secot.png"></a></div>
            <div class="column is-one-third"><a 
              href="http://www.pctcartuja.es/" 
              rel="nofollow"
              target="_blank"
            ><img src="../static/Cartuja.png"></a></div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

	li{
		padding: 1rem 0;
	}

	.footerMost{
		background-color: #252525;
		color: #ACACAD;
	}

	.fa-footer{
		color: #56B7E8;
		font-size: 3rem;
		padding: 1.8rem 0.5rem;
	}

	.open-therapi-logo{
		padding: 1.8rem;
	}

	.column-nav-footer{
		padding: 2rem 1rem;
	}

	.column-home{
		padding: 2rem 1.7rem;
		border-left: 1px solid #ACACAD;
	}

	.columns-navbar{
		padding-top: 1rem;
	}

</style>