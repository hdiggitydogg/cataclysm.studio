<template>
  <div id="app">
    <nav id="nav" class="navbar">
      <div class="container">
        <router-link class="navbar-brand image" to="/">
          <img src="https://78.media.tumblr.com/946f726109b1ec6df351b51ccb9d8acc/tumblr_o3u29w39P51vn31wpo1_400.jpg" />
        </router-link>
        <span class="name">CatAclysm.Studio</span>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
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
}

.navbar {
  text-align: left;
  padding: 30px 15px;
  background: #cbf2da; /* Old browsers */
  background: -moz-linear-gradient(left, #cbf2da 0%, #9ee8fa 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #cbf2da 0%,#9ee8fa 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #cbf2da 0%,#9ee8fa 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cbf2da', endColorstr='#9ee8fa',GradientType=1 ); /* IE6-9 */
  .name {
    font-weight: bold;
    font-size: 16px;
    margin-right: 15px;
  }
}
.navbar-brand {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
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
    height: 50px;
    width: 50px;
  }
}

.text-center {
  text-align: center;
}

h2 {
  font-size: 30px;
  margin: 30px 0px;
}

</style>