<template>
  <div>

    <div class='art-container'>
    <img class='art' :id="artwork.id" :src="getArtworkImageSrc(artwork)" :alt="artwork.altText">
    <div class="opacity-layer">
      <span class='name'>{{ artwork.name }}</span>
    </div>
    <span class='description'>{{ artwork.description }}</span>
  </div>

  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <img :id="artwork.id" :src="getArtworkImageSrc(artwork)" :alt="artwork.altText">
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="showModal = false">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

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
          imagePath: "/images/art/",
          showModal: false
      }
  },
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

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }


</style>
