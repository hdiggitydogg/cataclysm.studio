<template>
  <div class='art-container'>
    <img class='art' :id="artwork.id" :src="getArtworkImageSrc(artwork)" :alt="artwork.altText">
    <div class="opacity-layer">
      <span class='name'>{{ artwork.name }}</span>
    </div>
    <span class='description'>{{ artwork.description }}</span>
  </div>
</template>

<script>
export default {
  name: 'Artwork',
  props: {
    artwork: Object
  },
  methods: {
      getArtworkImageSrc(artwork) {
          return this.imagePath + artwork.image;
      }
  },
  data () {
      return {
          imagePath: "/images/art/"
      }
  }
}
</script>

<style scoped lang="scss">

  .description {
    display: none;
  }

  .art-container {
    position: relative;
  }

  .opacity-layer {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .art {
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    border: 5px white solid;
    margin: 5px 10px;
    -webkit-box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
    -moz-box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
    box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
  }

  .art-container:hover .art {
    opacity: 0.3;
  }

  .art-container:hover .opacity-layer {
    opacity: 1;
  }

  .work-examples {
    img.art {
      max-height: 150px;
    }
  }

</style>
