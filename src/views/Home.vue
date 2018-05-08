<template>
  <div class="home">

      <div class="container">
          <h2>Behold - some stuff I did:</h2>
          <div class="work-examples">
              <Artwork v-for="artwork in artworks" :key="artwork.id" :artwork="artwork">
              </Artwork>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Artwork from '@/components/Artwork.vue'

export default {
    name: 'home',
    components: {
        Artwork
    },
    data() {
        return {
            artworks: [
                {
                    id: "image1",
                    name: "Pony",
                    altText: "A pretty pony",
                    image: "1.jpg",
                    description: "A pretty pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image2",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "2.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image3",
                    name: "Pony no.3",
                    altText: "Another pretty pony",
                    image: "3.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image4",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "4.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image5",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "5.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image6",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "6.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image7",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "7.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image8",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "8.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image9",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "9.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image10",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "10.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image11",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "11.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image12",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "12.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image13",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "13.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image14",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "14.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image15",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "15.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image16",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "16.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image17",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "17.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image18",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "18.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image19",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "19.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image20",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "20.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image21",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "21.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image22",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "22.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image23",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "23.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },
                {
                    id: "image24",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "24.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                },                {
                    id: "image25",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "25.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover"
                }
            ],
        }
    },

}
</script>

<style scoped lang="scss">

    .work-examples {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: start;
        width: 100%;
    }

    // MODALS

    /* The Modal (background) */
    /*.my-modal {*/
        /*display: none; !* Hidden by default *!*/
        /*position: fixed; !* Stay in place *!*/
        /*z-index: 1; !* Sit on top *!*/
        /*left: 0;*/
        /*top: 0;*/
        /*width: 100%; !* Full width *!*/
        /*height: 100%; !* Full height *!*/
        /*overflow: auto; !* Enable scroll if needed *!*/
        /*background-color: rgb(0,0,0); !* Fallback color *!*/
        /*background-color: rgba(0,0,0,0.4); !* Black w/ opacity *!*/
    /*}*/

    /*!* Modal Content/Box *!*/
    /*.my-modal-content {*/
        /*background-color: transparent;*/
        /*margin: 15% auto; !* 15% from the top and centered *!*/
        /*padding: 20px;*/
        /*max-width: 80%; !* Could be more or less, depending on screen size *!*/
        /*position: relative;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*-ms-flex-direction: column;*/
        /*flex-direction: column;*/
        /*text-align: right;*/
    /*}*/

    /*.modal-img {*/
        /*max-height: 100vh;*/
        /*margin-left: auto;*/
        /*margin-right: auto;*/
    /*}*/
    /*.modal-desc {*/
        /*text-align: center;*/
        /*width: 100%;*/
        /*color: white;*/
    /*}*/

    /*!* The Close Button *!*/
    /*.close-x {*/
        /*color: white;*/
        /*float: right;*/
        /*font-size: 28px;*/
        /*font-weight: bold;*/
    /*}*/

    /*.close-x:hover,*/
    /*.close-x:focus {*/
        /*color: pink;*/
        /*text-decoration: none;*/
        /*cursor: pointer;*/
    /*}*/

    /*// Alt item modal*/

    /*.grid-alpha{*/
        /*display: none;*/
        /*position: absolute;*/
        /*background-color: #F4F3F4;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*top: 0;*/
        /*left: 0;*/
        /*text-align: center;*/
    /*}*/
    /*.grid-alpha:hover{*/
        /*cursor: zoom-out;*/
    /*}*/

    /*.art.item-opened{*/
        /*width: 80%;*/
        /*height: 80vw;*/
    /*}*/

</style>
