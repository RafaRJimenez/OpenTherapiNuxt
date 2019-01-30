<template>
  <div>
    <div class="level">
      <div class="level-left"><div class="level-item"><img src="../static/logo.png"></div></div>
      <div class="level-right">
        <div class="level-item">
          <b-dropdown>
            <button 
              slot="trigger" 
              class="button is-primary"
            >
              <span><i class="fa fa-bars"/></span>
            </button>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.level{
		background-color: black;
		color: white;
		padding: 1rem 3rem;
	}

	.level-item{
	}

</style>