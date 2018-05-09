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

  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>

      <!-- template for the modal component -->
    <script type="text/x-template" id="modal-template">
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
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
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
  },
}
// // register modal component
// Vue.component('modal', {
//     template: '#modal-template'
// });
//
// // start app
// new Vue({
//     el: '#app',
//     data: {
//         showModal: false
//     }
// })
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
