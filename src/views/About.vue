<template>

  <div class="about">
    <div class="background-image">
      <img class="img" src="/images/CatAclysmIcon.png"/>
    </div>

    <div class="container-50">

      <div class="sub-container">
        <p>If you're interested in buying or commissioning artwork or just fancy a chat, you can <strong>contact me here: </strong> <a href="mailto:helen@cataclysm.studio?subject=Hello">helen@cataclysm.studio</a></p>
        <p><strong>If you would like to support me</strong> you can purchase some of my artwork from my Redbubble or Society6 stores, or leave me a tip on Ko-fi if you're feeling particularly generous!</p>
        <a href="https://www.redbubble.com/people/helenlloydart/shop" target="blank">Redbubble</a> | <a href="https://society6.com/hdiggitydogg" target="blank">Society 6</a> | <a href="https://ko-fi.com/hdiggitydogg" target="blank">Ko-Fi</a>
        <p><strong>Here are some social links</strong> that will rarely, if ever, be updated:</p>
        <a href="http://www.facebook.com/ArtByHelen" target="blank">facebook</a> | <a href="http://www.twitter.com/hdiggitydogg" target="blank">twitter</a> | <a href="http://www.instagram.com/hdiggitydogg" target="blank">instagram</a>
      </div>

      <h2>A little about myself</h2>
      <p><strong>Hi, I'm Helen.</strong></p>
      <p><strong>I'm a self-taught artist</strong> and also a front-end website developer, so with that very particular hyphenated set of skills it seemed like I should probably write my own website. I've been drawing and painting since I was old enough to find a thing that made a mark on another thing, so I imagine my parents were thrilled.</p>
      <p><strong>When I got older</strong> (and needed the money) I cut my teeth in the art world doing pet portraits, and developed a super-detailed style of graphite portraiture that was borderline obsessive. I then began offering coloured and watercolour pencil portraits, which are a little bit more exciting and 10x harder to get right, but 8 years later I'm getting there.</p>
      <p><strong>The sculpture</strong> started while I was a temp in an office job and kept nicking blu-tack off everyone's desks to keep my hands busy. Turns out it's super hard to use it as intended when it looks like a cute bird. My leaving present was a card with a big photo of me drinking beer through a novelty horse mask, and an industrial quantity of blu-tack. I miss those guys, but maybe it's a good job I work from home now.</p>
      <p><strong>When it comes to web development</strong> I've been writing html/css/sass for 2 years for mostly Laravel based PHP web apps, with my little company Hatch Apps Ltd. I've been learning javascript, so this site is written by me using Vue.js. You can find the code on my <a href="https://github.com/hdiggitydogg" target="blank">Github</a>.</p>
      <p><strong>I love</strong> pretending I can care for plants that are hard to kill, using too much teal in everything, weird science stuff (I have an MSc in Neuroscience, not that I've ever used it - now it's just a creepy hobby I guess), and of course all manner of animals, beasties, birds and beings. In my very limited spare time while I'm not drowning in impostor syndrome, I can be found playing my playstation and drinking tea with my cat, Griffin.</p>



    </div>
  </div>
</template>

<style scoped lang="scss">

  .sub-container {
    color: white;
    background: #cbf2da; /* Old browsers */
    background: -moz-linear-gradient(left top, #5086BEBE 0%, #50C6A4BF 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left top, #5086BEBE 0%,#50C6A4BF 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right bottom, #5086BEBE 0%,#50C6A4BF 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86BEBE', endColorstr='#C6A4BF',GradientType=1 ); /* IE6-9 */
    padding: 5px 10px 25px 10px;
    a {
      color: white;
      &:hover {
        color: darken(#C6A4BF, 20%);
      }
    }
  }

  .container-50 {
    padding: 15px;
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

</style>