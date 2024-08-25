<template>
  <div class="home">
      <div class="background-image">
          <img class="img" src="/images/CatAclysmIcon.png"/>
      </div>
      <div class="container">
          <h2>Behold - some stuff I did:</h2>
          <a class="tag" @click="applyTag('sculpture')" :class="{ active : tagActive('sculpture') }">Sculpture</a>
          <span> | </span>
          <a class="tag" @click="applyTag('colour')" :class="{ active : tagActive('colour') }">Colour</a>
          <span> | </span>
          <a class="tag" @click="applyTag('mono')" :class="{ active : tagActive('mono') }">Graphite</a>
          <span> | </span>
          <a class="tag" @click="applyTag('commission')" :class="{ active : tagActive('commission') }">Commission</a>
          <span> | </span>
          <a class="tag" @click="applyAllTags()" :class="{ active : allTags() }">All</a>
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
                    id: "image42",
                    name: "Griffin Jr",
                    altText: "A ceramic statue of a Griffin",
                    image: "griffin_jr",
                    description: "This Griffin was sculpted during my class time at Clayability in Wrington, with his brother Blunicorn. He is decorated with underglaze and oxides which were sponged off to give him his furry appearance, then glazed clear. My favourite thing about him is his fat little back paws.",
                    tags: ["sculpture"]
                },
                {
                    id: "image41",
                    name: "Blunicorn",
                    altText: "A ceramic statue of a unicorn, glazed all over in blue",
                    image: "blunicorn",
                    description: "This unicorn was sculpted during my class time at Clayability in Wrington, with his brother Griffin Jr. Hand built in buff clay, glazed all over, then decorated with mother-of-pearl lustre.",
                    tags: ["sculpture"]
                },
                {
                    id: "image40",
                    name: "Octopus Bowl",
                    altText: "A blue ceramic bowl, with a blue ceramic octopus in the middle, tentacles reaching out",
                    image: "octopus_bowl",
                    description: "This octopus jewellry dish was sculpted during my class time at Clayability in Wrington. He was a one-off piece for a friend's birthday. Look out for that top tentacle, he's a tad stabby.",
                    tags: ["sculpture"]
                },
                {
                    id: "image39",
                    name: "Mouse Mug and Bowl",
                    altText: "A blue ceramic mug with a small mouse perched on the handle, and a small blue ceramic bowl with a mouse perched on the edge",
                    image: "mouse_bowl_and_mug",
                    description: "This matching mug and teabag bowl were made at my home studio - they were actually created at different times, so the bowl is white clay and the mug is buff. The base glaze is the same but the mug has additional mayco green glaze as a drip.",
                    tags: ["sculpture"]
                },
                {
                    id: "image38",
                    name: "Cat Bowl",
                    altText: "A small blue ceramic bowl with a calico cat hanging on the side",
                    image: "cat_bowl",
                    description: "This bowl was made at my home studio, because I like sculpting small animals, and making small bowls, so the two just kind of have to happen together. It makes life more fun when there's a little animal involved.",
                    tags: ["sculpture"]
                },
                {
                    id: "image37",
                    name: "Sea Otter Chopstick Holders",
                    altText: "Two chopstick holders in the shape of sea otters",
                    image: "otter_chopsticks",
                    description: "These sea otter chopstick holders were sculpted during my class time at Clayability in Wrington, and they just look too cute. Never separate them.",
                    tags: ["sculpture"]
                },
                {
                    id: "image36",
                    name: "Mushroom Ring Holder",
                    altText: "A ceramic dish, with a ceramic mushroom in the centre to hold jewellry",
                    image: "mushroom_ring_holder",
                    description: "This mushroom ring dish was made at my home studio, as I keep needing something to put my wedding ring on when I throw, and I had this idea for little mushrooms. The tops of the mushrooms simply balance on the stems and they make a very satisfying sound.",
                    tags: ["sculpture"]
                },
                {
                    id: "image35",
                    name: "Tess",
                    altText: "A portrait of a blak labradoodle",
                    image: "Tess_the_dog",
                    description: "This portrait of Tess was a charity auction piece for Holly Hedge Animal Sanctuary, she was a pleasure to paint with all those curls. Watercolour and watercolour pencil, at A5(ish).",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image34",
                    name: "Water",
                    altText: "A water mermaid pegasus",
                    image: "Water",
                    description: "A water elemental pegasus, with a mermaid tail. There's no portmanteau wide enough to cover that I think. To go with the fire and ice pegususes-pegusai-pegawhatnot. Because I have very little restraint, this one is also larger and has glitter in it.",
                    tags: ["colour"]
                },
                {
                    id: "image33",
                    name: "Alpacas",
                    altText: "Two alpacas, one tan and one black",
                    image: "Alpacas",
                    description: "These two look like trouble! Two alpacas who live in New Zealand, a commission in watercolour and watercolour pencil. They have such funny faces!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image32",
                    name: "Birds",
                    altText: "A tui and a fantail play in the NZ rainforest",
                    image: "Birds",
                    description: "A Tui and a Fantail, two iconic NZ birds, hang out in the lush NZ rainforest. This was a watercolour commission for a baby's room, for her first birthday. Happy birthday Eva!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image31",
                    name: "CatAclysm",
                    altText: "A cat skull on a background of black and green space with stars",
                    image: "CatAclysm",
                    description: "Designed to be my icon, the galaxy background was created in watercolour and then the cat skull was drawn digitally with my wacom tablet, and superimposed on top. I used to do heaps of digital drawing but I don't do much anymore, not sure why",
                    tags: ["colour"]
                },
                {
                    id: "image36",
                    name: "Sculpture of Bo",
                    altText: "A sculpture of a black dog with a white chest",
                    image: "Sculpture_of_Bo",
                    description: "Having learned my lesson from the greyhound sculpture, this guy has legs made from apoxie fast drying clay so less faff all round! He's painted in acrylic, and yes, I did get carried away with all those curls. Worth it!",
                    tags: ["sculpture", "commission"]
                },
                {
                    id: "image1",
                    name: "Grey Stallion",
                    altText: "Portrait of a grey stallion",
                    image: "Grey_Stallion",
                    description: "This handsome horse commission was created in watercolour graphite and good ‘ol pencil at slightly over A4 in size. I love watercolour graphite. Like watercolour pencil, it’s so easy to get the softness of watercolour whilst also creating harder cleaner lines, and really easy to layer onto with regular and mechanical pencils for even more depth and detailing, plus you can erase it relatively easily!",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image2",
                    name: "Portrait of Tip",
                    altText: "Portrait of a tri-colour collie cross dog",
                    image: "Portrait_of_Tip",
                    description: "This very sweet dog is the lovely Tip, who lives all the way in New Zealand on a farm. He’s been recreated in watercolour pencils as a pet portrait commission. For this particular commission as it was quite large (A3), I’ve used a lot of watercolour paint as a base as well as layering the pencils on top to give his fur a rich, full texture.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image3",
                    name: "Ziggy the bearded dragon",
                    altText: "Portrait of a yellow and orange bearded dragon",
                    image: "Ziggy_the_bearded_dragon",
                    description: "This is a portrait of beautiful Ziggy, the bearded dragon. He was a commission created in inktense watercolour pencil, with a bit of white gel pen and gouache for good measure. His portrait is about A4 size, but what a challenge with all those scales! Ziggy had such a charismatic face and dramatic colouring I couldn’t resist taking this commission on, and despite the hand cramp from all that detail I’m really pleased with how this one turned out.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image29",
                    name: "Pug",
                    altText: "A small stylised sculpture of a pug dog wih tiny little legs",
                    image: "Pug",
                    description: "I can't help myself, he's tooooo cute. Sculpted in super sculpey clay and painted in acrylic",
                    tags: ["sculpture"]
                },
                {
                    id: "image4",
                    name: "Portrait of Sleepy Senna",
                    altText: "portrait of a sleeping tabby cat in graphite",
                    image: "Portrait_of_Senna",
                    description: "A4 graphite, an adorable snoozing tabby. I have a massive soft spot for tabbies, we had a huge bruiser of a tabby cat called Paddy who looked so similar, though woe betide you if you woke him up during his nap.",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image5",
                    name: "Harlequin Gecko on Lichen",
                    altText: "A yellow and black harlequin gecko on lichen",
                    image: "Harlequin_Gecko_on_Lichen",
                    description: "Bound for NZ, where the Stewart Island Harlequin Gecko hails from, this piece was commissioned and created in a combination of watercolour and coloured pencil, which adds heaps of texture to the lichen and rock I hope. This is actually a companion piece to the gecko on river stones  I completed a few years ago!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image6",
                    name: "Portrait of Belle",
                    altText: "portrait of a very dignified sealpoint ragdoll cat, sitting up",
                    image: "Portrait_of_Belle",
                    description: "These two gorgeous Ragdoll cats are Ted (in the ‘catloaf’ position) and Belle (the princess with the pink nose). Being cats I know in person, they were a real pleasure to paint as they have very distinct personalities, and the shapes made by their fur are so much fun to render.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image7",
                    name: "Portrait of Ted",
                    altText: "portrait of a very curious sealpoint ragdoll cat, in loaf position",
                    image: "Portrait_of_Ted",
                    description: "These two gorgeous Ragdoll cats are Ted (in the ‘catloaf’ position) and Belle (the princess with the pink nose). Being cats I know in person, they were a real pleasure to paint as they have very distinct personalities, and the shapes made by their fur are so much fun to render.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image19",
                    name: "Portrait of Oscar",
                    altText: "A portrait of a black standard poodle, looking to the left",
                    image: "Portrait_of_Oscar",
                    description: "The really amazing thing about this colour portrait in watercolour pencil, at A5, is that it ever got completed at all because I was literally moving house that week. Really pleased with it though!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image8",
                    name: "The Crow",
                    altText: "Drawing of a crow, wings spread facing the viewer",
                    image: "The_Crow",
                    description: "This crow is my most popular (read: most frequently stolen) artwork - a crow with wings spread in A3 size, in graphite. I even have a whole page on this site for it! The commissioner wanted it as a tattoo, because he is incredibly brave.",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image9",
                    name: "Portrait of a Staffy",
                    altText: "graphite portrait of a staffordshire terrier",
                    image: "Portrait_of_a_Staffy",
                    description: "Proud of this one! Helps that this was a very handsome dog; the commission was graphite in A4. I only use mechanical pencils for my pet portraits, with an electric eraser and putty eraser for detailing.",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image10",
                    name: "Grumpy little fantail",
                    altText: "drawing of a fantail bird with an expression of consternation",
                    image: "Grumpy_little_fantail",
                    description: "This grumpy little fantail was commissioned by some of my family in New Zealand. Fantails are adorable tiny birds, I love their angry little eyebrows! He was completed in graphite  using mostly mechanical pencils, on thick hand pressed cardstock.",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image27",
                    name: "Air",
                    altText: "A stylised painting of a pegasus in blue",
                    image: "Air",
                    description: "I loooooove drawing pegasus', or pegasi? Whatever, I still love them. This is part of a series I have been attempting to do forever of the four elements, new pieces incoming! ",
                    tags: ["colour"]
                },
                {
                    id: "image28",
                    name: "Fire",
                    altText: "A stylised painting of a pegasus in red",
                    image: "Fire",
                    description: "I loooooove drawing pegasus', or pegasi? Whatever, I still love them. This is part of a series I have been attempting to do forever of the four elements, new pieces incoming! ",
                    tags: ["colour"]
                },
                {
                    id: "image17",
                    name: "Cute Little Sloth",
                    altText: "A sloth hanging onto a branch and looking at the viewer",
                    image: "Cute_Little_Sloth",
                    description: "Drawn at a very sloth-y pace in about 30 hours over many many months between projects! In watercolour pencil (Derwent Inktense as usual), white gel pen and gouache on A3 handmade natural paper.",
                    tags: ["colour"]
                },
                {
                    id: "image18",
                    name: "The Maharaja",
                    altText: "A portrait of a tiger, looking very regal",
                    image: "The_Maharaja",
                    description: "Well it all started as a warm up sketch and then I got a little carried away… I think he’s rather grand, though. Watercolour pencil, coloured pencil, white gel pen and gold gel pen in A5.",
                    tags: ["colour"]
                },
                {
                    id: "image11",
                    name: "Portrait of Jasmine",
                    altText: "Portrait of a chestnut and white paint horse with white stripe looking at the viewer",
                    image: "Portrait_of_Jasmine",
                    description: "I am usually commissioned for dogs, so when I was commissioned for five horse portraits I was very excited to get my equine artistry on again! These are five beautiful horses each postcard sized. Painted in Derwent Inktense watercolour pencils layered both wet and dry, with a splash of gouache and white gel pen here and there for highlights and texture. From the reference photos, tack was removed and those that were plaited were unplaited for their portraits.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image12",
                    name: "Portrait of Miss Dior",
                    altText: "Portrait of a bay and white paint horse with white stripe looking at the viewer",
                    image: "Portrait_of_Miss_Dior",
                    description: "I am usually commissioned for dogs, so when I was commissioned for five horse portraits I was very excited to get my equine artistry on again! These are five beautiful horses each postcard sized. Painted in Derwent Inktense watercolour pencils layered both wet and dry, with a splash of gouache and white gel pen here and there for highlights and texture. From the reference photos, tack was removed and those that were plaited were unplaited for their portraits.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image13",
                    name: "Portrait of Polyanna",
                    altText: "Portrait of a bay and white paint horse with white stripe looking at the viewer",
                    image: "Portrait_of_Polyanna",
                    description: "I am usually commissioned for dogs, so when I was commissioned for five horse portraits I was very excited to get my equine artistry on again! These are five beautiful horses each postcard sized. Painted in Derwent Inktense watercolour pencils layered both wet and dry, with a splash of gouache and white gel pen here and there for highlights and texture. From the reference photos, tack was removed and those that were plaited were unplaited for their portraits.",
                    tags: ["colour", "commission"]
                },
                // {
                //     id: "image14",
                //     name: "Portrait of Smotyn",
                //     altText: "Portrait of a black horse looking at the viewer",
                //     image: "14",
                //     description: "I am usually commissioned for dogs, so when I was commissioned for five horse portraits I was very excited to get my equine artistry on again! These are five beautiful horses each postcard sized. Painted in Derwent Inktense watercolour pencils layered both wet and dry, with a splash of gouache and white gel pen here and there for highlights and texture. From the reference photos, tack was removed and those that were plaited were unplaited for their portraits.",
                //     tags: ["colour", "commission"]
                // },
                {
                    id: "image15",
                    name: "Portrait of Solly",
                    altText: "Portrait of an appaloosa horse looking at the viewer",
                    image: "Portrait_of_Solly",
                    description: "I am usually commissioned for dogs, so when I was commissioned for five horse portraits I was very excited to get my equine artistry on again! These are five beautiful horses each postcard sized. Painted in Derwent Inktense watercolour pencils layered both wet and dry, with a splash of gouache and white gel pen here and there for highlights and texture. From the reference photos, tack was removed and those that were plaited were unplaited for their portraits.",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image16",
                    name: "Portrait of Jess",
                    altText: "A portrait of a spaniel dog looking up to the left",
                    image: "Portrait_of_Jess",
                    description: "This is Jess, a spaniel, in coloured pencil. There’s also a little white gouache and gel pen in there too to make her pop! She’s such a lovely colour with beautiful eyes, I really enjoyed drawing this one, even all that ear hair!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image20",
                    name: "Big Ol Rhino",
                    altText: "A rhino, at 3/4 view",
                    image: "Big_Ol_Rhino",
                    description: "A gift for my friends Chris and Mel in South Africa, this rhino is A5 and completed in watercolour graphite, which was perfect",
                    tags: ["mono"]
                },
                {
                    id: "image21",
                    name: "Portrait of Rosie",
                    altText: "Portrait of a fuzzy terrier dog in graphite",
                    image: "Portrait_of_Rosie",
                    description: "This is a portrait commission of the adorable Rosie, completed using mechanical pencils on A3 bristol board. Total time taken was about 15 hours – the hardest part was probably all that chest hair!",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image22",
                    name: "Portrait of Cassie and Roxy",
                    altText: "A colour portrait of two brown and white boxer dogs looking at the viewer",
                    image: "Portrait_of_Cassie_and_Roxy",
                    description: "This is a full coloured pencil A3 portrait of two boxers; Cassie and Roxy. As far as I can work out it took about 2-25 hours for the two of them. It was a pleasure though, they have such beautiful faces!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image23",
                    name: "Gecko on the Rocks",
                    altText: "A green and silver kaikoura gecko and a brown leaf on blue striped river stones",
                    image: "Gecko_on_the_Rocks",
                    description: "This is a finalised commission for Kim and Pete in New Zealand of a kaikoura gecko on river stones. This is an A3 mixed media piece, with watercolour wash, watercolour pencil, coloured pencil, and a little bit of white acrylic thrown in too!",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image24",
                    name: "Portrait of Charlie the bull mastiff",
                    altText: "A portrait of a bull mastiff dog, looking at the viewer",
                    image: "Portrait_of_Charlie",
                    description: "This was the first time I completed a portrait in in coloured pencils that I was happy with, so a bit of a milestone! He's A4 and his face makes me happy. Slight cost to my sanity though, perhaps. And a sore back",
                    tags: ["colour", "commission"]
                },
                {
                    id: "image25",
                    name: "Bay Arab",
                    altText: "A bay arab horse galloping towards the viewer",
                    image: "Bay_Arab",
                    description: "This is one for me! Coloured pencil on recycled organic cotton paper. The beautiful paper was a gift, it’s so lovely but unfortunately very tricky to draw on! Little micro-layers of it kept peeling off when I tried to use my eraser or if my pencil was too sharp, so it was a learning curve!",
                    tags: ["colour"]
                },
                {
                    id: "image38",
                    name: "Moogle",
                    altText: "A sculpture of a moogle from Final Fantasy 14",
                    image: "Moogle",
                    description: "I play a lot of Final Fantasy 14 with my sister. There, now I've said it. I do super love the moogles, so this one is suspended on a wire from a base of pebbles and crystal, all in super sculpey clay and painted with acrylic",
                    tags: ["sculpture"]
                },
                {
                    id: "image26",
                    name: "A portrait of Burt",
                    altText: "A 3/4 portrait of a springer spaniel dog in graphite",
                    image: "portrait_of_Burt",
                    description: "This is a full A4 graphite pencil portrait for some friends of mine of the ever so lovely dog they had, Burt. This one took me a fair amount of time between doing my exams for my MSc and working my day job!",
                    tags: ["mono", "commission"]
                },
                {
                    id: "image30",
                    name: "Two Greyhounds",
                    altText: "Two small stylised sculptures of greyhounds, one standing and one bowing and ready to play",
                    image: "Two_Greyhounds",
                    description: "These two greyhounds were a real challenge to sculpt with those legs! An armature wasn't cutting it, so I pre-baked the legs and then baked them again into the bodies when it was time, and cleaned it all up with a dremmel",
                    tags: ["sculpture", "commission"]
                },

                {
                    id: "image37",
                    name: "Lego wedding cake topper",
                    altText: "A cake topper created in clay to look like giant lego people, painted like the bride and groom",
                    image: "Lego_wedding_cake_topper",
                    description: "This isn't lego, this is super sculpey clay and about 20 hours of my life! The groom who commissioned me is a big lego fan so I kept it painstakingly to lego dimensions, of course. With stick-on diamonds and removable bouquet accessory!",
                    tags: ["sculpture", "commission"]
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
        max-width: 1170px;
    }

    .tag {
        text-decoration: underline;
    }

    a:hover {
        cursor: pointer;
    }

    a.active {
        font-weight: bold;
        &:hover {
            color: #2c3e50;
            cursor: default;
        }
    }

</style>
