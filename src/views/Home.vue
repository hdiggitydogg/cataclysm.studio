<template>
  <div class="home">

      <div class="container">
          <h2>Behold - some stuff I did:</h2>
          <a @click="applyTag('colour')" :class="{ active : tagActive('colour') }"> colour </a>
          <a @click="applyTag('mono')" :class="{ active : tagActive('mono') }">mono </a>
          <a @click="applyTag('sculpture')" :class="{ active : tagActive('sculpture') }">sculpture </a>
          <a @click="applyTag('commission')" :class="{ active : tagActive('commission') }">commission </a>
          <a @click="applyAllTags()" :class="{ active : allTags() }">All </a>
          <div class="work-examples">
              <div :key="artwork.id" v-for="artwork in artworks">
                    <Artwork v-if="showImage(artwork)"  :artwork="artwork" />
              </div>
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
                    description: "A pretty pony in watercolour pencil I did when I was hungover",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image2",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "2.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["colour", "sculpture"]
                },
                {
                    id: "image3",
                    name: "Pony no.3",
                    altText: "Another pretty pony",
                    image: "3.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "sculpture"]
                },
                {
                    id: "image4",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "4.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image5",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "5.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image6",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "6.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image7",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "7.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image8",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "8.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image9",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "9.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image10",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "10.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image11",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "11.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image12",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "12.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image13",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "13.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image14",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "14.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image15",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "15.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image16",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "16.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image17",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "17.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image18",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "18.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image19",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "19.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image20",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "20.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image21",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "21.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image22",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "22.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image23",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "23.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image24",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "24.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                },                {
                    id: "image25",
                    name: "Pony no.2",
                    altText: "Another pretty pony",
                    image: "25.jpg",
                    description: "Another nice pony in watercolour pencil I did when I was hungover",
                    tags: ["mono", "commission"]
                }
            ],
            tags: [ "colour", "mono", "sculpture", "commission" ]
        }
    },
    methods: {
        applyTag(tag) {
            this.tags = [ tag ];
        },
        applyAllTags() {
            this.tags = [ "colour", "mono", "sculpture", "commission" ];
        },
        showImage(artwork) {
            return this.tags.some(t => artwork.tags.includes(t));
        },
        tagActive(tag) {
            return this.tags.includes(tag) && this.tags.length === 1;
        },
        allTags() {
            return this.tags.length > 1;
        },
    }
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
        margin-top: 30px;
    }

    a.active {
        color: red;
    }

</style>
