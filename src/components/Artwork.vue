<template>
  <div>

    <div class='art-container' @click="showModal = true">
    <img class='art' :id="artwork.id" :src="getArtworkImageSrc(artwork)" :alt="artwork.altText">
    <div class="opacity-layer">
      <span class='name'>{{ artwork.name }}</span>
    </div>
    <span class='description'>{{ artwork.description }}</span>
  </div>

  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                <h3>{{ artwork.name }}</h3>
              </slot>
              <span class="modal-default-button" @click="showModal = false">
                <svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
                  <title>Close</title>
                  <g fill="none" fill-rule="evenodd">
                      <circle id="circle" cx="190" cy="190" r="190"/>
                      <path fill="#FFF" d="M259.09 110.804l10.606 10.607-147.785 147.785-10.607-10.607z"/>
                      <path fill="#FFF" d="M121.91 110.804l-10.606 10.607 147.785 147.785 10.607-10.607z"/>
                  </g>
              </svg>
              </span>
            </div>

            <div class="modal-body">
              <slot name="body">
                <img class="art-fullview" :id="artwork.id" :src="getArtworkImageSrc(artwork)" :alt="artwork.altText">
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                {{ artwork.description }}
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
    background-color: white;
    right: 0;
    left: 0;
    width: calc(100% - 20px);
    margin: 5px 10px;
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
    pointer-events: none;
  }

  .art {
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
    border: 5px white solid;
    -webkit-box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
    -moz-box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
    box-shadow: 13px 10px 19px -8px rgba(217,202,217,1);
    cursor: pointer;
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

  /*Modal shiz*/
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .8);
    transition: opacity .3s ease;
    overflow: scroll;
  }

  .modal-wrapper {
    max-width: 1170px;
    max-height: 100vh;
    display: block;
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
  }

  .modal-container {
    overflow: scroll;
    margin: 10px auto;
    padding: 0;
    background-color: transparent;
    border-radius: 2px;
    transition: all .3s ease;
    color: white;
  }

  .modal-header {
    h3 {
      margin: 10px;
    }
  }

  .modal-footer {
    padding-bottom: 15px;
  }

  .modal-body {
    margin: 15px 0;
  }

  img.art-fullview {
    max-height: 75vh;
    border: 5px white solid;
    max-width: 85vw;
  }

  .modal-default-button {
    float: right;
    svg {
      #circle {
        fill: #C6A4BF;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -ms-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
      }
      height: 50px;
      width: 50px;
      &:hover {
        cursor: pointer;
        #circle {
          fill: #86BEBE;
        }
      }
    }
  }

  @media (min-width: 1175px) {
    img.art-fullview {
      max-width: 1170px;
    }
  }

  @media (max-width: 600px) {


    .modal-default-button {
      float: right;
      svg {
        #circle {
          fill: #C6A4BF;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -ms-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
        }
        height: 30px;
        width: 30px;
        &:hover {
          cursor: pointer;
          #circle {
            fill: #86BEBE;
          }
        }
      }
    }
  }

</style>
