<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark d-flex justify-content-center align-items-center" data-bs-theme="dark">
      <div class="container-fluid d-flex justify-content-center align-items-center">
        <!-- Centered Logo -->
        <img src="./assets/logo.png" class="navbar-brand" alt="Logo" />

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links and Form in the Center -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarColor02">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <i class="fas fa-home"></i> My Resume/CV
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img.navbar-brand {
  height: 50px;
  width: 50px;
  margin-right: 20px;
}

.navbar-nav .nav-link {
  color: #fff;
  font-size: 1.1em;
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-nav .nav-link:hover {
  color: #ccc;
}

form .btn {
  display: flex;
  align-items: center;
}

form .btn i {
  margin-right: 5px;
}
</style>
