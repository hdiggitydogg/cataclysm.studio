<template>
  <div id="app">
    <nav id="nav" class="navbar">
      <div class="container">
        <router-link class="navbar-brand image" to="/" title="homepage">
          <img src="/images/CA-icon-white.png" />
        </router-link>
        <span class="name">CatAclysm<strong>.Studio</strong></span>
        <span class="nav-links">
          <router-link to="/" title="home">Home</router-link> |
          <router-link to="/about" title="about">About</router-link>
        </span>
      </div>

    </nav>

    <router-view/>
  </div>
</template>

<style lang="scss" type="text/scss">

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .container {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .navbar {
    text-align: left;
    padding: 30px 15px;
    background: #cbf2da; /* Old browsers */
    background: -moz-linear-gradient(left, #86BEBE 0%, #C6A4BF 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #86BEBE 0%,#C6A4BF 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #86BEBE 0%,#C6A4BF 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86BEBE', endColorstr='#C6A4BF',GradientType=1 ); /* IE6-9 */
    .name {
      font-size: 20px;
      margin-right: 15px;
      color: white;
    }
  }
  .navbar-brand {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    margin-bottom: -20px;
    margin-top: -15px;
    margin-right: 15px;
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 65px;
      width: 65px;
    }
  }

  .text-center {
    text-align: center;
  }

  h2 {
    font-size: 30px;
    margin: 30px 0px;
  }

  .nav-links {
    position: absolute;
    right: 0;
    color: white;
    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      width: 55px;
      display: inline-block;
      padding: 0 10px;
      -webkit-transition: font-weight 0.3s;
      -moz-transition: font-weight 0.3s;
      -ms-transition: font-weight 0.3s;
      -o-transition: font-weight 0.3s;
      transition: font-weight 0.3s;
    }
    .router-link-exact-active, a:hover {
      font-weight: bold;
    }
  }

</style>